import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { createServer } from 'vite';

const saved = new Map();
Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
  getItem: (key) => saved.get(key) ?? null,
  setItem: (key, value) => saved.set(key, value),
} });
const server = await createServer({ configFile: false, logLevel: 'silent', server: {
  middlewareMode: true, hmr: false, watch: null,
} });
after(() => server.close());
const load = (path) => server.ssrLoadModule(`/src/${path}`);
const { serializeDocument, deserializeDocument } = await load('model/serialization.ts');
const { demoDocument } = await load('model/demo.ts');
const { createComponent } = await load('model/catalog.ts');
const { createWire, createTextAnnotation, createRectangle } = await load('model/factories.ts');
const { useEditorStore: store } = await load('store/editorStore.ts');
const { cloneObjects, extractSelection } = await load('utils/operations.ts');
const { wirePoints, resolveEndpoint } = await load('utils/geometry.ts');
const { insertJunction, drawingWireCandidate } = await load('utils/wires.ts');
const { findInlineCandidate } = await load('smartPlacement/findCandidates.ts');
const { smartPlacement } = await load('smartPlacement/smartConnection.ts');
const { replaceComponent } = await load('model/replacement.ts');
const { readProjectFile, projectFilename, projectBlob } = await load('utils/projectFile.ts');
const { localPersistence } = await load('utils/localPersistence.ts');
const { exportSVG } = await load('svg/exporter.tsx');
const { pngDimensions, PNG_MAX_PIXELS, PNG_MAX_DIMENSION } = await load('png/exporter.ts');
const { numericValue } = await load('utils/numericValue.ts');
const { actionMenuPosition } = await load('components/toolbar/actionMenuPosition.ts');
const document = (...objects) => ({version:1,title:'Circuit test',objects});
const reset = (doc = demoDocument()) => store.setState({document:doc,past:[],future:[],gestureStart:null,selection:[],activeLabel:null,tool:'select',pendingPresetId:null,splittingWireId:null});
const valid = (doc) => deserializeDocument(serializeDocument(doc));
const free = (x,y) => ({kind:'free',point:{x,y}});

test('complete demo survives repeated JSON round trips without geometry or labels changing', () => {
  const original = valid(demoDocument());
  assert.deepEqual(valid(valid(original)),original);
});

test('legacy string and missing component labels remain readable; legacy values migrate', () => {
  const c = createComponent('resistor',{x:0,y:0});
  for (const label of ['R_old',undefined]) {
    const legacy = {...c,label,value:'50 Ω'};
    const parsed = valid(document(legacy)).objects[0];
    assert.equal(parsed.label.text,label ?? '50 Ω');
    assert.equal(parsed.value,undefined);
    assert.equal(typeof parsed.label.offset.x,'number');
  }
});

test('malformed roots, versions, IDs, numbers and references fail validation', () => {
  const demo = demoDocument();
  for (const raw of ['{','null','[]',JSON.stringify({...demo,version:2}),
    JSON.stringify({...demo,objects:[demo.objects[0],demo.objects[0]]}),
    JSON.stringify(document({...createComponent('resistor',{x:0,y:0}),x:Infinity})),
    JSON.stringify(document(createWire({kind:'terminal',componentId:'missing',terminalId:'a'},free(0,0)))),
  ]) assert.throws(()=>deserializeDocument(raw));
});

test('project import validates before returning and refuses oversized files before reading', async () => {
  const raw = serializeDocument(demoDocument());
  assert.deepEqual(await readProjectFile({size:raw.length,text:async()=>raw}),valid(demoDocument()));
  let read = false;
  await assert.rejects(readProjectFile({size:10_000_001,text:async()=>{read=true;return raw;}}));
  assert.equal(read,false);
  await assert.rejects(readProjectFile({size:3,text:async()=>'{x}'}));
});

test('download filenames preserve Unicode while removing path and control characters', () => {
  assert.equal(projectFilename('Rete Ω'), 'Rete Ω.drawcircuit');
  assert.equal(projectFilename('../a/b\\c: ?*\n'), '..-a-b-c- ---.drawcircuit');
  assert.equal(projectFilename('...'), 'DrawCircuit.drawcircuit');
  assert(projectFilename('x'.repeat(1000)).length <= 112);
});

test('opening a project is one undo/redo step and clears transient editing state', () => {
  const previous = demoDocument(); reset(previous);
  store.setState({tool:'wire',selection:['r-AB'],activeLabel:'r-AB',splittingWireId:'w-r-AB-a'});
  const next = document(createTextAnnotation({x:10,y:20},'hello'));
  assert.equal(store.getState().replace(next),true);
  assert.deepEqual(store.getState().document,valid(next));
  assert.equal(store.getState().past.length,1);
  assert.deepEqual(store.getState().selection,[]);
  assert.equal(store.getState().tool,'select');
  assert.equal(store.getState().splittingWireId,null);
  store.getState().undo(); assert.deepEqual(store.getState().document,previous);
  store.getState().redo(); assert.deepEqual(store.getState().document,valid(next));
});

test('invalid project replacement preserves document, gesture, selection and history', () => {
  reset(); const s = store.getState();
  s.select(['r-AB']); s.beginGesture();
  const before = store.getState();
  assert.equal(before.replace({...document(),version:999}),false);
  const after = store.getState();
  for (const key of ['document','gestureStart','selection','past','future','tool']) assert.equal(after[key],before[key]);
});

test('opening during a preview preserves the last committed drawing for Undo', () => {
  const original = demoDocument(); reset(original);
  store.getState().beginGesture();
  store.getState().preview({...original,title:'unfinished'});
  store.getState().replace(document());
  store.getState().undo();
  assert.deepEqual(store.getState().document,original);
});

test('project opening does not reconcile coincident frame IDs from unrelated documents', () => {
  const child = createComponent('resistor',{x:50,y:50});
  const a = {...createRectangle({x:0,y:0},{x:100,y:100}),id:'shared-frame',frame:{name:'Frame',children:[child.id],constraints:{},direction:'free',gap:0,padding:[0,0,0,0],align:'start',widthSizing:'fixed',heightSizing:'fixed'}};
  reset(document(a,child));
  const next = document({...a,x:500,y:500}, {...child,x:550,y:550});
  store.getState().replace(next);
  assert.deepEqual(store.getState().document,valid(next));
});

test('multi-selection duplication creates independent IDs and remaps internal wire connections', () => {
  const doc = demoDocument(); reset(doc);
  store.getState().select(doc.objects.map(o=>o.id)); store.getState().duplicate();
  const result = store.getState().document;
  valid(result);
  assert.equal(result.objects.length,doc.objects.length*2);
  assert.equal(new Set(result.objects.map(o=>o.id)).size,result.objects.length);
  const duplicateIds = new Set(store.getState().selection);
  for (const wire of result.objects.filter(o=>duplicateIds.has(o.id)&&o.kind==='wire')) {
    for(const ep of [wire.startEndpoint,wire.endEndpoint])
      if(ep.kind!=='free') assert(duplicateIds.has(ep.componentId ?? ep.junctionId));
  }
  store.getState().undo(); assert.deepEqual(store.getState().document,doc);
});

test('copying a partial selection freezes external references, keeping the source intact', () => {
  const doc=demoDocument(), snapshot=serializeDocument(doc);
  const copied=cloneObjects(extractSelection(doc,['r-AB','w-r-AB-a']),{x:40,y:40},doc);
  valid(document(...copied));
  assert.equal(serializeDocument(doc),snapshot);
  assert(copied.some(o=>o.kind==='wire' && [o.startEndpoint,o.endEndpoint].some(ep=>ep.kind==='free')));
});

test('component replacement retains labels and connections and rejects incompatible symbols', () => {
  const doc=demoDocument(), result=replaceComponent(doc,'r-AB','capacitor');
  valid(result);
  assert.equal(result.objects.find(o=>o.id==='r-AB').label.text,'r_{AB}');
  for(const wire of result.objects.filter(o=>o.kind==='wire')) {
    resolveEndpoint(wire.startEndpoint,result); resolveEndpoint(wire.endEndpoint,result);
  }
  assert.throws(()=>replaceComponent(doc,'r-AB','npn'));
});

test('deleting a connected component keeps incident wires readable and undo restores topology', () => {
  const doc=demoDocument(); reset(doc);
  store.getState().select(['r-AB']); store.getState().remove();
  valid(store.getState().document);
  assert(!store.getState().document.objects.some(o=>o.id==='r-AB'));
  store.getState().undo(); assert.deepEqual(store.getState().document,doc);
});

test('wire split creates a shared junction without changing the physical path', () => {
  const wire=createWire(free(0,0),free(240,0)); const doc=document(wire);
  const result=insertJunction(doc,{x:120,y:0},wire.id);
  const next=result.doc;
  valid(next);
  assert.equal(next.objects.filter(o=>o.kind==='wire').length,2);
  const paths=next.objects.filter(o=>o.kind==='wire').flatMap(w=>wirePoints(w,next));
  assert(paths.every(p=>p.y===0));
  assert(paths.some(p=>p.x===0)); assert(paths.some(p=>p.x===240));
});

test('snap bypass preserves precise coordinates instead of quantizing to the grid', () => {
  const point={x:13.25,y:17.75};
  const candidate=drawingWireCandidate(point,document(),1,null,{enabled:false,routing:'orthogonal'});
  assert.deepEqual(candidate.point,point);
});

test('smart inline placement splits exactly once, preserves endpoints, and is undoable', () => {
  const wire=createWire(free(0,0),free(300,0)); const doc=document(wire);
  const candidate=findInlineCandidate(doc,'resistor',{x:140,y:0},0,1);
  assert(candidate);
  const result=smartPlacement(doc,'resistor',{phase:'inline-candidate',candidate,position:candidate.position,rotation:candidate.rotation});
  valid(result.doc);
  assert.equal(result.doc.objects.length,3);
  const wires=result.doc.objects.filter(o=>o.kind==='wire');
  assert(wires.every(w=>[w.startEndpoint,w.endEndpoint].some(ep=>ep.kind==='terminal'&&ep.componentId===result.component.id)));
  reset(doc); store.getState().commit(result.doc); store.getState().undo();
  assert.deepEqual(store.getState().document,doc);
});

test('smart inline placement refuses short segments and crossings through the new symbol', () => {
  assert.equal(findInlineCandidate(document(createWire(free(0,0),free(20,0))),'resistor',{x:10,y:0},0,1),null);
  const doc=document(createWire(free(0,0),free(300,0)),createWire(free(140,-100),free(140,100)));
  assert.equal(findInlineCandidate(doc,'resistor',{x:140,y:0},0,1),null);
});

test('a multi-object gesture adds one history entry and cancellation adds none', () => {
  const doc=demoDocument();reset(doc);
  store.getState().select(['r-AB','r-BC']); store.getState().beginGesture();
  for(let i=0;i<5;i++) store.getState().updateSelection(o=>({...o,y:o.y+10}));
  store.getState().endGesture(); assert.equal(store.getState().past.length,1);
  store.getState().undo(); assert.deepEqual(store.getState().document,doc);
  store.getState().beginGesture();store.getState().updateSelection(o=>({...o,y:o.y+10}));store.getState().cancelGesture();
  assert.equal(store.getState().past.length,0);
});

test('SVG export preserves math and fonts while omitting editor handles and grid', () => {
  const svg=exportSVG(demoDocument());
  assert.match(svg,/<svg/); assert.match(svg,/Comic Relief/);
  assert.match(svg,/data:font\/woff2;base64/);
  assert.doesNotMatch(svg,/data-(?:object|handle|label)|selection-handle|grid-pattern|foreignObject/);
  assert.doesNotMatch(svg, /(?:d|x|y|width|height|viewBox|transform)="[^"]*(?:NaN|Infinity)/);
});

test('unreadable local saves are backed up before a new valid document replaces them', () => {
  saved.clear(); saved.set('test-document','broken');
  const persistence=localPersistence('test-document',deserializeDocument,serializeDocument,demoDocument);
  assert(persistence.load().error);
  persistence.save(demoDocument());
  assert([...saved].some(([key,value])=>key.startsWith('test-document.recovery.')&&value==='broken'));
  assert.deepEqual(deserializeDocument(saved.get('test-document')),valid(demoDocument()));
});

test('failed recovery backup never overwrites original data or unrelated storage', () => {
  const original=globalThis.localStorage;
  const writes=[];
  Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{
    getItem:key=>key==='test-document'?'broken':null,
    setItem:(key)=>{writes.push(key);throw new Error('Quota exceeded');},
  }});
  try {
    const persistence=localPersistence('test-document',deserializeDocument,serializeDocument,demoDocument);
    persistence.load(); assert.throws(()=>persistence.save(demoDocument()));
    assert.equal(writes.length,1); assert(writes[0].startsWith('test-document.recovery.'));
  } finally { Object.defineProperty(globalThis,'localStorage',{configurable:true,value:original}); }
});


test('downloaded project blobs reopen without changing the source document', async () => {
  const doc=demoDocument(), before=serializeDocument(doc);
  const blob=projectBlob(doc);
  assert.equal(blob.type,'application/json');
  assert.deepEqual(await readProjectFile(blob), valid(doc));
  assert.equal(serializeDocument(doc),before);
});

test('Unicode documents cannot produce a project larger than the import byte limit', () => {
  const text='Ω'.repeat(10_000);
  const doc=document(...Array.from({length:520},(_,i)=>({...createTextAnnotation({x:0,y:i},text),id:`text-${i}`})));
  assert(serializeDocument(doc).length < 10_000_000);
  assert.throws(()=>projectBlob(doc),/10 MB/);
});

test('PNG dimensions keep normal selections at 4x and bound large allocation', () => {
  assert.deepEqual(pngDimensions('<svg viewBox="0 0 100 50">'),{width:400,height:200});
  for (const [width,height] of [[2000,2000],[8000,3000],[1000,10000]]) {
    const result=pngDimensions(`<svg viewBox="0 0 ${width} ${height}">`);
    assert(result.width*result.height<=PNG_MAX_PIXELS);
    assert(result.width<=PNG_MAX_DIMENSION&&result.height<=PNG_MAX_DIMENSION);
  }
});

test('malformed or excessive image dimensions fail before canvas allocation', () => {
  for(const svg of ['<svg>','<svg viewBox="0 0 NaN 5">','<svg viewBox="0 0 0 10">','<svg viewBox="0 0 100000 100000">'])
    assert.throws(()=>pngDimensions(svg));
});

test('numeric controls accept decimal commas and units and reject invalid or out-of-range values', () => {
  const limits={min:0,max:200,exclusiveMin:true,unit:'px'};
  assert.deepEqual(numericValue(' 22,5 px ',limits),{value:22.5});
  for(const raw of ['',' ','NaN','Infinity','20x','1e99']) assert(numericValue(raw,limits).error);
  for(const raw of ['0','-1','201']) assert.equal(numericValue(raw,limits).error,'range');
  assert.equal(numericValue('45',{min:0,max:360,step:90}).error,'step');
  assert.deepEqual(numericValue('90',{min:0,max:360,step:90}),{value:90});
});

test('menus stay in the viewport near all four edges, including nested menus', () => {
  for(const [width,height] of [[1440,900],[1280,800],[768,1024],[390,844]]) {
    for(const [left,top] of [[0,0],[width-30,0],[0,height-30],[width-30,height-30]]) {
      for(const nested of [false,true]) {
        const result=actionMenuPosition({left,right:left+30,top,bottom:top+30},{width:240,height:300},{width,height},nested);
        assert(result.left>=8&&result.top>=8);
        assert(result.left+240<=width-8); assert(result.top+300<=height-8);
      }
    }
  }
});
