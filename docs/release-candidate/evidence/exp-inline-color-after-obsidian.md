```tikz
\usepackage{circuitikz}
% TikZJax/Inline TikZ SVG uses the system font; other drivers use upright sans.
\makeatletter
\newif\ifdcSvg
\edef\dcDriver{\pgfsysdriver}
\def\dcXimera{pgfsys-ximera.def}
\def\dcDvisvgm{pgfsys-dvisvgm.def}
\ifx\dcDriver\dcXimera\dcSvgtrue\fi
\ifx\dcDriver\dcDvisvgm\dcSvgtrue\fi
\ifdcSvg
\def\dcCenterAnchor{base west}\def\dcStartAnchor{base west}\def\dcEndAnchor{base west}
\else
\def\dcCenterAnchor{center}\def\dcStartAnchor{west}\def\dcEndAnchor{east}
\fi
\newcommand{\dcCanvasText}[2]{\ifdcSvg\special{dvisvgm:raw #1}\else #2\fi}
\DeclareSymbolFont{dcLetters}{OT1}{cmss}{m}{n}
\SetSymbolFont{dcLetters}{bold}{OT1}{cmss}{bx}{n}
\DeclareSymbolFontAlphabet{\mathrm}{dcLetters}
\DeclareMathSymbol{A}{\mathalpha}{dcLetters}{65}
\DeclareMathSymbol{B}{\mathalpha}{dcLetters}{66}
\DeclareMathSymbol{C}{\mathalpha}{dcLetters}{67}
\DeclareMathSymbol{D}{\mathalpha}{dcLetters}{68}
\DeclareMathSymbol{E}{\mathalpha}{dcLetters}{69}
\DeclareMathSymbol{F}{\mathalpha}{dcLetters}{70}
\DeclareMathSymbol{G}{\mathalpha}{dcLetters}{71}
\DeclareMathSymbol{H}{\mathalpha}{dcLetters}{72}
\DeclareMathSymbol{I}{\mathalpha}{dcLetters}{73}
\DeclareMathSymbol{J}{\mathalpha}{dcLetters}{74}
\DeclareMathSymbol{K}{\mathalpha}{dcLetters}{75}
\DeclareMathSymbol{L}{\mathalpha}{dcLetters}{76}
\DeclareMathSymbol{M}{\mathalpha}{dcLetters}{77}
\DeclareMathSymbol{N}{\mathalpha}{dcLetters}{78}
\DeclareMathSymbol{O}{\mathalpha}{dcLetters}{79}
\DeclareMathSymbol{P}{\mathalpha}{dcLetters}{80}
\DeclareMathSymbol{Q}{\mathalpha}{dcLetters}{81}
\DeclareMathSymbol{R}{\mathalpha}{dcLetters}{82}
\DeclareMathSymbol{S}{\mathalpha}{dcLetters}{83}
\DeclareMathSymbol{T}{\mathalpha}{dcLetters}{84}
\DeclareMathSymbol{U}{\mathalpha}{dcLetters}{85}
\DeclareMathSymbol{V}{\mathalpha}{dcLetters}{86}
\DeclareMathSymbol{W}{\mathalpha}{dcLetters}{87}
\DeclareMathSymbol{X}{\mathalpha}{dcLetters}{88}
\DeclareMathSymbol{Y}{\mathalpha}{dcLetters}{89}
\DeclareMathSymbol{Z}{\mathalpha}{dcLetters}{90}
\DeclareMathSymbol{a}{\mathalpha}{dcLetters}{97}
\DeclareMathSymbol{b}{\mathalpha}{dcLetters}{98}
\DeclareMathSymbol{c}{\mathalpha}{dcLetters}{99}
\DeclareMathSymbol{d}{\mathalpha}{dcLetters}{100}
\DeclareMathSymbol{e}{\mathalpha}{dcLetters}{101}
\DeclareMathSymbol{f}{\mathalpha}{dcLetters}{102}
\DeclareMathSymbol{g}{\mathalpha}{dcLetters}{103}
\DeclareMathSymbol{h}{\mathalpha}{dcLetters}{104}
\DeclareMathSymbol{i}{\mathalpha}{dcLetters}{105}
\DeclareMathSymbol{j}{\mathalpha}{dcLetters}{106}
\DeclareMathSymbol{k}{\mathalpha}{dcLetters}{107}
\DeclareMathSymbol{l}{\mathalpha}{dcLetters}{108}
\DeclareMathSymbol{m}{\mathalpha}{dcLetters}{109}
\DeclareMathSymbol{n}{\mathalpha}{dcLetters}{110}
\DeclareMathSymbol{o}{\mathalpha}{dcLetters}{111}
\DeclareMathSymbol{p}{\mathalpha}{dcLetters}{112}
\DeclareMathSymbol{q}{\mathalpha}{dcLetters}{113}
\DeclareMathSymbol{r}{\mathalpha}{dcLetters}{114}
\DeclareMathSymbol{s}{\mathalpha}{dcLetters}{115}
\DeclareMathSymbol{t}{\mathalpha}{dcLetters}{116}
\DeclareMathSymbol{u}{\mathalpha}{dcLetters}{117}
\DeclareMathSymbol{v}{\mathalpha}{dcLetters}{118}
\DeclareMathSymbol{w}{\mathalpha}{dcLetters}{119}
\DeclareMathSymbol{x}{\mathalpha}{dcLetters}{120}
\DeclareMathSymbol{y}{\mathalpha}{dcLetters}{121}
\DeclareMathSymbol{z}{\mathalpha}{dcLetters}{122}
\DeclareMathSymbol{0}{\mathalpha}{dcLetters}{48}
\DeclareMathSymbol{1}{\mathalpha}{dcLetters}{49}
\DeclareMathSymbol{2}{\mathalpha}{dcLetters}{50}
\DeclareMathSymbol{3}{\mathalpha}{dcLetters}{51}
\DeclareMathSymbol{4}{\mathalpha}{dcLetters}{52}
\DeclareMathSymbol{5}{\mathalpha}{dcLetters}{53}
\DeclareMathSymbol{6}{\mathalpha}{dcLetters}{54}
\DeclareMathSymbol{7}{\mathalpha}{dcLetters}{55}
\DeclareMathSymbol{8}{\mathalpha}{dcLetters}{56}
\DeclareMathSymbol{9}{\mathalpha}{dcLetters}{57}
\makeatother
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\definecolor{dcColor1}{HTML}{2463CB}
\definecolor{dcColor2}{HTML}{DF4949}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,0) -- (-6.3263,0);
\draw[draw=dcColor0, line width=1.5pt] (-2.1088,0) -- (0,0);
\draw[draw=dcColor0, line width=1.5pt] (2.1088,0) -- (0,0);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,0) -- (6.3263,0);
\draw[draw=dcColor0, line width=1.5pt] (-6.3263,-2.1088) -- (-6.3263,0);
\draw[draw=dcColor0, line width=1.5pt] (-6.3263,-4.2175) -- (-6.3263,-5.7991) -- (0,-5.7991);
\draw[draw=dcColor0, line width=1.5pt] (0,-2.1088) -- (0,0);
\draw[draw=dcColor0, line width=1.5pt] (0,-4.2175) -- (0,-5.7991);
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-2.1088) -- (6.3263,0);
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-4.2175) -- (6.3263,-5.7991) -- (0,-5.7991);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,4.2175) -- (-6.3263,4.2175) -- (-6.3263,0);
\draw[draw=dcColor0, line width=1.5pt] (1.0544,4.2175) -- (6.3263,4.2175) -- (6.3263,0);
\draw[draw=dcColor0, line width=1.5pt] (-10.5438,-7.9078) -- (-3.6903,-7.9078);
\draw[draw=dcColor0, line width=1.5pt] (-7.3807,-6.3263) -- (-7.3807,-9.4894);
% Unconnected wire crossing: horizontal bridge
\draw[draw=white,line width=4.5pt] (-7.5652,-7.9078) -- (-7.1961,-7.9078);
\draw[draw=dcColor0,line width=1.5pt] (-7.3807,-7.7233) -- (-7.3807,-8.0924);
\draw[draw=white,line width=4.5pt] (-7.5652,-7.9078) .. controls (-7.4914,-7.7233) and (-7.2699,-7.7233) .. (-7.1961,-7.9078);
\draw[draw=dcColor0,line width=1.5pt] (-7.5652,-7.9078) .. controls (-7.4914,-7.7233) and (-7.2699,-7.7233) .. (-7.1961,-7.9078);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,0) -- (-3.6903,0) (-2.6359,0) -- (-2.1088,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-3.6903,0.2372) -- (-2.6359,0.2372) -- (-2.6359,-0.2372) -- (-3.6903,-0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (2.1088,0) -- (2.6359,0) (3.6903,0) -- (4.2175,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (2.6359,0.2372) -- (3.6903,0.2372) -- (3.6903,-0.2372) -- (2.6359,-0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,4.2175) -- (-0.5272,4.2175) (0.5272,4.2175) -- (1.0544,4.2175);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,4.4548) -- (0.5272,4.4548) -- (0.5272,3.9803) -- (-0.5272,3.9803) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-6.3263,-2.1088) -- (-6.3263,-2.6359) (-6.3263,-3.6903) -- (-6.3263,-4.2175);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-6.089,-2.6359) -- (-6.089,-3.6903) -- (-6.5635,-3.6903) -- (-6.5635,-2.6359) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (0,-2.1088) -- (0,-2.6359) (0,-3.6903) -- (0,-4.2175);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.2372,-2.6359) -- (0.2372,-3.6903) -- (-0.2372,-3.6903) -- (-0.2372,-2.6359) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-2.1088) -- (6.3263,-2.6359) (6.3263,-3.6903) -- (6.3263,-4.2175);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (6.5635,-2.6359) -- (6.5635,-3.6903) -- (6.089,-3.6903) -- (6.089,-2.6359) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-13.1797,5.2719) -- (-12.6526,5.2719) (-11.5982,5.2719) -- (-11.071,5.2719);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-12.6526,5.5091) -- (-11.5982,5.5091) -- (-11.5982,5.0347) -- (-12.6526,5.0347) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-13.1797,1.5816) -- (-12.6526,1.5816) (-11.5982,1.5816) -- (-11.071,1.5816);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-12.6526,1.8188) -- (-11.5982,1.8188) -- (-11.5982,1.3443) -- (-12.6526,1.3443) -- cycle;
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (-13.1797,-2.1088) -- (-12.2835,-2.1088) (-11.9672,-2.1088) -- (-11.071,-2.1088) (-12.2835,-1.6606) -- (-12.2835,-2.5569) (-11.9672,-1.6606) -- (-11.9672,-2.5569);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (-13.1797,-5.7991) -- (-12.758,-5.7991) .. controls (-12.758,-5.3246) and (-12.4417,-5.3246) .. (-12.4417,-5.7991) .. controls (-12.4417,-5.3246) and (-12.1254,-5.3246) .. (-12.1254,-5.7991) .. controls (-12.1254,-5.3246) and (-11.809,-5.3246) .. (-11.809,-5.7991) .. controls (-11.809,-5.3246) and (-11.4927,-5.3246) .. (-11.4927,-5.7991) -- (-11.071,-5.7991);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (9.4894,5.2719) -- (10.0166,5.2719) (11.071,5.2719) -- (11.5982,5.2719);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (10.5438,5.2719) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (10.2538,5.4037) -- (10.2538,5.1401) (10.122,5.2719) -- (10.3856,5.2719) (10.7283,5.2719) -- (10.9392,5.2719);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (9.4894,1.0544) -- (10.0166,1.0544) (11.071,1.0544) -- (11.5982,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (10.5438,1.0544) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (10.2275,1.0544) -- (10.8601,1.0544);
\draw[draw=dcColor0, line width=1.5pt] (10.7283,1.1335) -- (10.8601,1.0544) -- (10.7283,0.9753);
\fill[dcColor0] (-6.3263,0) circle (3.375pt);
\fill[dcColor0] (0,0) circle (3.375pt);
\fill[dcColor0] (6.3263,0) circle (3.375pt);
\fill[dcColor0] (0,-5.7991) circle (3.375pt);
\path (-3.6771,1.2389) -- (-2.6506,1.2389) -- (-3.6771,0.3534) -- (-2.6506,0.3534) -- cycle;
\node[text=dcColor1, font=\fontsize{17.25}{22.425}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-3.1631,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="7.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="23" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4453" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#65;</text><text x="5.3359" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$r_{AB}$}};
\path (2.6623,1.2389) -- (3.6644,1.2389) -- (2.6623,0.3534) -- (3.6644,0.3534) -- cycle;
\node[text=dcColor1, font=\fontsize{17.25}{22.425}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.1631,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17" y="7.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="23" font-style="normal" font-weight="400">&\string#114;</text><text x="-5.9453" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#66;</text><text x="5.0156" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#67;</text></g></g>}{$r_{BC}$}};
\path (-0.514,5.4564) -- (0.5097,5.4564) -- (-0.514,4.5709) -- (0.5097,4.5709) -- cycle;
\node[text=dcColor1, font=\fontsize{17.25}{22.425}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="7.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="23" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4453" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#65;</text><text x="5.3359" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#67;</text></g></g>}{$r_{AC}$}};
\path (-8.0133,-2.715) -- (-6.9575,-2.715) -- (-8.0133,-3.6005) -- (-6.9575,-3.6005) -- cycle;
\node[text=dcColor1, font=\fontsize{17.25}{22.425}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-7.4861,-3.1631) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18" y="7.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="23" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.9453" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#65;</text><text x="4.8359" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#68;</text></g></g>}{$r_{AD}$}};
\path (0.6458,-2.715) -- (1.68,-2.715) -- (0.6458,-3.6005) -- (1.68,-3.6005) -- cycle;
\node[text=dcColor1, font=\fontsize{17.25}{22.425}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.1598,-3.1631) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="7.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="23" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4453" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#66;</text><text x="4.5156" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#68;</text></g></g>}{$r_{BD}$}};
\path (6.9721,-2.715) -- (8.0034,-2.715) -- (6.9721,-3.6005) -- (8.0034,-3.6005) -- cycle;
\node[text=dcColor1, font=\fontsize{17.25}{22.425}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.4861,-3.1631) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="7.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="23" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4453" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#67;</text><text x="4.4063" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#68;</text></g></g>}{$r_{CD}$}};
\path (-12.8107,6.4844) -- (-11.4406,6.4844) -- (-12.8107,5.6436) -- (-11.4406,5.6436) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-12.1254,6.0627) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-24" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#53;&\string#48;&\string#937;</text></g></g>}{$50 \Omega$}};
\path (-12.4944,2.7941) -- (-11.7477,2.7941) -- (-12.4944,1.9533) -- (-11.7477,1.9533) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-12.1254,2.3724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$\color{red}{R_2}$}};
\path (-12.4549,-0.8962) -- (-11.7883,-0.8962) -- (-12.4549,-1.737) -- (-11.7883,-1.737) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-12.1254,-1.318) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (-12.4417,-4.5866) -- (-11.8051,-4.5866) -- (-12.4417,-5.4274) -- (-11.8051,-5.4274) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-12.1254,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (10.2011,6.4844) -- (10.8953,6.4844) -- (10.2011,5.6436) -- (10.8953,5.6436) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (10.5438,6.0627) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (10.2275,2.2669) -- (10.8615,2.2669) -- (10.2275,1.4261) -- (10.8615,1.4261) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (10.5438,1.8452) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-7.2719,0.4671) -- (-6.7513,0.4671) -- (-7.2719,-0.5346) -- (-6.7513,-0.5346) -- cycle;
\node[text=dcColor2, font=\fontsize{20.25}{26.325}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-7.0116,-0.1318) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="27">&\string#65;</text></g></g>}{A}};
\path (-0.2244,1.3896) -- (0.2244,1.3896) -- (-0.2244,0.388) -- (0.2244,0.388) -- cycle;
\node[text=dcColor2, font=\fontsize{20.25}{26.325}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="27">&\string#66;</text></g></g>}{B}};
\path (6.7971,0.4671) -- (7.2261,0.4671) -- (6.7971,-0.5346) -- (7.2261,-0.5346) -- cycle;
\node[text=dcColor2, font=\fontsize{20.25}{26.325}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.0116,-0.1318) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="27">&\string#67;</text></g></g>}{C}};
\path (-0.2569,-6.0965) -- (0.2569,-6.0965) -- (-0.2569,-7.0981) -- (0.2569,-7.0981) -- cycle;
\node[text=dcColor2, font=\fontsize{20.25}{26.325}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-6.6953) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="27">&\string#68;</text></g></g>}{D}};
\draw[draw=dcColor2, line width=1.35pt] (-2.056,-0.9293) arc[start angle=60, end angle=-250, radius=2.2142cm];
\draw[draw=dcColor2, line width=1.35pt] (-4.087,-0.925) -- (-3.9204,-0.7662) -- (-4.1502,-0.7516);
\path (-4.1211,-2.6465) -- (-2.2051,-2.6465) -- (-4.1211,-3.3845) -- (-2.2051,-3.3845) -- cycle;
\node[text=dcColor2, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-3.1631,-3.0841) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#109;&\string#97;&\string#103;&\string#108;&\string#105;&\string#97;&\string#32;&\string#49;</text></g></g>}{maglia 1}};
\draw[draw=dcColor2, line width=1.35pt] (-4.4811,1.5816) .. controls (-4.0857,2.1878) and (-2.1088,2.1878) .. (-1.7134,1.5816);
\draw[draw=dcColor2, line width=1.35pt] (-1.9058,1.7078) -- (-1.7134,1.5816) -- (-1.7513,1.8086);
\path (-3.4136,3.0841) -- (-2.9166,3.0841) -- (-3.4136,2.1985) -- (-2.9166,2.1985) -- cycle;
\node[text=dcColor2, font=\fontsize{17.25}{22.425}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-3.1631,2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-7.5" y="7.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="23" font-style="normal" font-weight="400">&\string#105;</text><text x="-1.0469" y="10.9453" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.1" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (4.4811,0.4218) -- (6.0627,0.4218);
\draw[draw=dcColor2,line width=1.5pt] (5.8518,0.3295) -- (6.0627,0.4218) -- (5.8518,0.514);
\path (5.0347,1.4761) -- (5.5145,1.4761) -- (5.0347,0.6353) -- (5.5145,0.6353) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.2719,1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: voltage
\draw[draw=dcColor2,line width=1.5pt] (11.5982,-1.5816) -- (11.5982,-5.7991);
\draw[draw=dcColor2,line width=1.5pt] (11.5059,-5.5882) -- (11.5982,-5.7991) -- (11.6904,-5.5882);
\path (11.6904,-3.2686) -- (12.7749,-3.2686) -- (11.6904,-4.1094) -- (12.7749,-4.1094) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.2308,-3.6903) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="-4.1953" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="7.0703" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$V_{AB}$}};
\draw[draw=dcColor2, line width=1.5pt] (3.1404,6.5737) arc[start angle=369, end angle=45, x radius=1.8452cm, y radius=1.5816cm];
\draw[draw=dcColor2, line width=1.5pt] (2.4026,7.5118) -- (2.6227,7.4446) -- (2.5226,7.6519);
\end{circuitikz}

\end{document}
```