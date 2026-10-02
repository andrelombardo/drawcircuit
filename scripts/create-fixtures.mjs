import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';
import { format } from 'prettier';
const result = await build({
  stdin: {
    contents: `
import { createComponent } from './src/model/catalog';
import { demoDocument } from './src/model/demo';
import { componentTypes, COLORS } from './src/model/types';
import { exportStandalone } from './src/tikz/exporter';
const demo=demoDocument();
const components=Array.from({length:100},(_,i)=>({...createComponent('resistor',{x:(i%10)*140,y:Math.floor(i/10)*140},i+1),id:'stress-c-'+i}));
const wires=Array.from({length:200},(_,i)=>({kind:'wire',id:'stress-w-'+i,startEndpoint:{kind:'terminal',componentId:components[i%100].id,terminalId:'b'},endEndpoint:{kind:'terminal',componentId:components[(i+(i<100?1:10))%100].id,terminalId:'a'},vertices:[],color:COLORS.ink,width:2}));
const texts=Array.from({length:100},(_,i)=>({kind:'text',id:'stress-t-'+i,x:components[i].x,y:components[i].y+40,text:'i_{'+(i+1)+'}',color:COLORS.red,fontSize:20,align:'middle',rotation:0}));
const stress={version:1,title:'Test · 100 componenti, 200 fili, 100 annotazioni',objects:[...wires,...components,...texts]};
const all={version:1,title:'Tutti i simboli',objects:componentTypes.flatMap((type,i)=>[0,90,180,270].map((rotation,j)=>({...createComponent(type,{x:j*180,y:i*140},i+1),rotation})))};
export const fixtures={demo,stress,demoTex:exportStandalone(demo),allTex:exportStandalone(all)};`,
    resolveDir: process.cwd(),
    loader: 'ts',
  },
  bundle: true,
  platform: 'node',
  format: 'esm',
  write: false,
});
const { fixtures } = await import(
  'data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64')
);
writeFileSync(
  'examples/rete-quattro-nodi.json',
  await format(JSON.stringify(fixtures.demo, null, 2), { parser: 'json', printWidth: 100 }),
);
writeFileSync('examples/rete-quattro-nodi.tex', fixtures.demoTex);
writeFileSync('/private/tmp/drawcircuit-stress.json', JSON.stringify(fixtures.stress));
writeFileSync('/private/tmp/drawcircuit-all-symbols.tex', fixtures.allTex);
console.log('Created example JSON, standalone .tex and verification fixtures.');
