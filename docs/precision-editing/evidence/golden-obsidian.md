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
\definecolor{dcColor3}{HTML}{8855C2}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,0) -- (-1.0544,0);
\draw[draw=dcColor0, line width=1.5pt] (1.0544,0) -- (3.1631,0);
\draw[draw=dcColor0, line width=1.5pt] (-6.3263,0) -- (-5.2719,0);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,0) -- (6.3263,0);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-5.2719,0) -- (-4.7447,0) (-3.6903,0) -- (-3.1631,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-4.7447,0.2372) -- (-3.6903,0.2372) -- (-3.6903,-0.2372) -- (-4.7447,-0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,0) -- (-0.5272,0) (0.5272,0) -- (1.0544,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,0.2372) -- (0.5272,0.2372) -- (0.5272,-0.2372) -- (-0.5272,-0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (3.1631,0) -- (3.6903,0) (4.7447,0) -- (5.2719,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.6903,0.2372) -- (4.7447,0.2372) -- (4.7447,-0.2372) -- (3.6903,-0.2372) -- cycle;
\fill[dcColor0] (-6.3263,0) circle (3.375pt);
\fill[dcColor0] (6.3263,0) circle (3.375pt);
\path (-4.5602,1.2125) -- (-3.8786,1.2125) -- (-4.5602,0.3717) -- (-3.8786,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.2175,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.369,1.2125) -- (0.3777,1.2125) -- (-0.369,0.3717) -- (0.3777,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$R_2$}};
\path (3.8485,1.2125) -- (4.5952,1.2125) -- (3.8485,0.3717) -- (4.5952,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#51;</text></g></g>}{$R_3$}};
\path (-6.5576,1.1604) -- (-6.0949,1.1604) -- (-6.5576,0.2774) -- (-6.0949,0.2774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-6.3263,0.6326) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#65;</text></g></g>}{A}};
\path (6.1268,1.1604) -- (6.5257,1.1604) -- (6.1268,0.2774) -- (6.5257,0.2774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (6.3263,0.6326) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#66;</text></g></g>}{B}};
% Annotation: brace
\draw[draw=dcColor3, line width=2.25pt] (-3.1368,-2.1088) .. controls (-3.1368,-1.7397) and (-2.7677,-1.7397) .. (-2.3987,-1.7397) -- (0.8699,-1.7397) .. controls (1.2389,-1.7397) and (1.6079,-1.7397) .. (1.6079,-1.3707) .. controls (1.6079,-1.7397) and (1.977,-1.7397) .. (2.346,-1.7397) -- (5.6146,-1.7397) .. controls (5.9836,-1.7397) and (6.3526,-1.7397) .. (6.3526,-2.1088);
\path (1.0148,-0.2531) -- (2.1915,-0.2531) -- (1.0148,-1.3099) -- (2.1915,-1.3099) -- cycle;
\node[text=dcColor1, font=\fontsize{21}{27.3}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.6079,-0.7802) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-20.5" y="10" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="28" font-style="normal" font-weight="400">&\string#82;</text><text x="-2.8984" y="13.6953" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="19.6" font-style="normal" font-weight="400">&\string#101;</text><text x="7.8438" y="13.6953" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="19.6" font-style="normal" font-weight="400">&\string#113;</text></g></g>}{$R_{eq}$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (-2.8995,0.4218) -- (-1.318,0.4218);
\draw[draw=dcColor2,line width=1.5pt] (-1.5289,0.3295) -- (-1.318,0.4218) -- (-1.5289,0.514);
\path (-2.346,1.4761) -- (-1.8662,1.4761) -- (-2.346,0.6353) -- (-1.8662,0.6353) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-2.1088,1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: voltage
\draw[draw=dcColor2,line width=1.5pt] (-4.2175,2.6359) -- (4.2175,2.6359);
\draw[draw=dcColor2,line width=1.5pt] (4.0066,2.5437) -- (4.2175,2.6359) -- (4.0066,2.7282);
\path (-0.5404,3.6903) -- (0.5441,3.6903) -- (-0.5404,2.8495) -- (0.5441,2.8495) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,3.2686) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="-4.1953" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="7.0703" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$V_{AB}$}};
\draw[draw=dcColor2, line width=1.5pt] (-2.6359,3.6903) -- (1.5816,3.6903);
\draw[draw=dcColor2, line width=1.5pt] (1.3707,3.5981) -- (1.5816,3.6903) -- (1.3707,3.7826);
\draw[draw=dcColor2, line width=1.5pt] (2.0828,-4.8846) arc[start angle=369, end angle=45, x radius=2.1088cm, y radius=0.7908cm];
\draw[draw=dcColor2, line width=1.5pt] (1.2613,-4.4615) -- (1.4911,-4.4491) -- (1.3261,-4.2887);
% Annotation: bracket
\draw[draw=dcColor2, line width=1.5pt] (7.9078,2.1088) -- (7.5388,2.1088) -- (7.5388,-2.1088) -- (7.9078,-2.1088);
\path (6.1107,1.5822) -- (7.9547,1.5822) -- (6.1107,0.6991) -- (7.9547,0.6991) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.0327,1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#67;&\string#97;&\string#114;&\string#105;&\string#99;&\string#111;</text></g></g>}{Carico}};
\path (-6.3263,4.692) -- (-1.8501,4.692) -- (-6.3263,3.7358) -- (-1.8501,3.7358) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-6.3263,4.2175) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(85,0)"><text x="-83" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#82;</text><text x="-67.7344" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#101;</text><text x="-54.5859" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#116;</text><text x="-43.2734" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#101;</text><text x="-30.125" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="-12.5703" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#8901;</text><text x="2.0156" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#82;</text><text x="17.1016" y="11.6016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#101;</text><text x="26.3047" y="11.6016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#113;</text><text x="43.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#61;</text><text x="67.3672" y="16.2813" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#73;</text><text x="65.2891" y="-1.4531" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#86;</text><rect x="65.2891" y="1.9844" width="14.6484" height="0.5"/></g></g>}{$Rete A · R_{eq} = \frac{V}{I}$}};
\end{circuitikz}

\end{document}
```