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
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,4.2175) -- (-4.2175,1.0544);
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,-1.0544) -- (-4.2175,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (0,4.2175) -- (0,3.1104);
\draw[draw=dcColor0, line width=1.5pt] (0,2.1615) -- (0,1.0544);
\draw[draw=dcColor0, line width=1.5pt] (0,-1.0544) -- (0,-2.1615);
\draw[draw=dcColor0, line width=1.5pt] (0,-3.1104) -- (0,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,4.2175) -- (4.2175,1.0544);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-1.0544) -- (4.2175,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,4.2175) -- (4.2175,4.2175);
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,-4.2175) -- (4.2175,-4.2175);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,1.0544) -- (-4.2175,0.6326) -- (-3.9803,0.5272) -- (-4.4548,0.3163) -- (-3.9803,0.1054) -- (-4.4548,-0.1054) -- (-3.9803,-0.3163) -- (-4.4548,-0.5272) -- (-4.2175,-0.6326) -- (-4.2175,-1.0544);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (0,1.0544) -- (0,0.6326) -- (0.2372,0.5272) -- (-0.2372,0.3163) -- (0.2372,0.1054) -- (-0.2372,-0.1054) -- (0.2372,-0.3163) -- (-0.2372,-0.5272) -- (0,-0.6326) -- (0,-1.0544);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (4.2175,1.0544) -- (4.2175,0.6326) -- (4.4548,0.5272) -- (3.9803,0.3163) -- (4.4548,0.1054) -- (3.9803,-0.1054) -- (4.4548,-0.3163) -- (3.9803,-0.5272) -- (4.2175,-0.6326) -- (4.2175,-1.0544);
\fill[dcColor0] (0,4.2175) circle (3.375pt);
\fill[dcColor0] (0,-4.2175) circle (3.375pt);
\path (-4.5602,1.687) -- (-3.8786,1.687) -- (-4.5602,0.8462) -- (-3.8786,0.8462) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.2175,1.2653) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.369,1.687) -- (0.3777,1.687) -- (-0.369,0.8462) -- (0.3777,0.8462) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,1.2653) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$R_2$}};
\path (3.8485,1.687) -- (4.5952,1.687) -- (3.8485,0.8462) -- (4.5952,0.8462) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,1.2653) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#51;</text></g></g>}{$R_3$}};
\path (-0.4218,5.3114) -- (0.4215,5.3114) -- (-0.4218,4.381) -- (0.4215,4.381) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,4.8501) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-14" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><g data-math-prime="2" transform="translate(3.5547 -0.7109) scale(0.016800000000000002)"><path d="M198 -560Q224 -560 243 -542Q262 -524 262 -501Q262 -496 260 -486Q259 -479 172.5 -263Q86 -47 84 -45Q80 -41 56 -48Q30 -57 30 -61Q30 -68 85.5 -293Q141 -518 146 -528Q160 -560 198 -560Z"/><path d="M198 -560Q224 -560 243 -542Q262 -524 262 -501Q262 -496 260 -486Q259 -479 172.5 -263Q86 -47 84 -45Q80 -41 56 -48Q30 -57 30 -61Q30 -68 85.5 -293Q141 -518 146 -528Q160 -560 198 -560Z" transform="translate(275 0)"/></g></g></g>}{$A^{\prime\prime}$}};
\path (-0.4086,-3.1236) -- (0.4026,-3.1236) -- (-0.4086,-4.054) -- (0.4026,-4.054) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-3.5849) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#66;</text><g data-math-prime="2" transform="translate(2.8359 -0.7109) scale(0.016800000000000002)"><path d="M198 -560Q224 -560 243 -542Q262 -524 262 -501Q262 -496 260 -486Q259 -479 172.5 -263Q86 -47 84 -45Q80 -41 56 -48Q30 -57 30 -61Q30 -68 85.5 -293Q141 -518 146 -528Q160 -560 198 -560Z"/><path d="M198 -560Q224 -560 243 -542Q262 -524 262 -501Q262 -496 260 -486Q259 -479 172.5 -263Q86 -47 84 -45Q80 -41 56 -48Q30 -57 30 -61Q30 -68 85.5 -293Q141 -518 146 -528Q160 -560 198 -560Z" transform="translate(275 0)"/></g></g></g>}{$B^{\prime\prime}$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (-3.7958,3.4267) -- (-3.7958,1.8452);
\draw[draw=dcColor2,line width=1.5pt] (-3.888,2.056) -- (-3.7958,1.8452) -- (-3.7035,2.056);
\path (-3.4004,3.0577) -- (-2.9205,3.0577) -- (-3.4004,2.2169) -- (-2.9205,2.2169) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-3.1631,2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt,line cap=round,line join=round] (0,3.1104) -- (0,2.1615);
\draw[draw=dcColor2,line width=1.5pt,line cap=round,line join=round] (-0.1186,2.4251) -- (0,2.1615) -- (0.1186,2.4251);
\path (-0.9094,3.0577) -- (-0.3645,3.0577) -- (-0.9094,2.2169) -- (-0.3645,2.2169) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.6326,2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$i_2$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt,line cap=round,line join=round] (0,-2.1615) -- (0,-3.1104);
\draw[draw=dcColor2,line width=1.5pt,line cap=round,line join=round] (-0.1186,-2.8468) -- (0,-3.1104) -- (0.1186,-2.8468);
\path (-0.9094,-2.2142) -- (-0.3645,-2.2142) -- (-0.9094,-3.055) -- (-0.3645,-3.055) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.6326,-2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#52;</text></g></g>}{$i_4$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (4.6393,3.4267) -- (4.6393,1.8452);
\draw[draw=dcColor2,line width=1.5pt] (4.547,2.056) -- (4.6393,1.8452) -- (4.7315,2.056);
\path (4.9951,3.0577) -- (5.54,3.0577) -- (4.9951,2.2169) -- (5.54,2.2169) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.2719,2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#51;</text></g></g>}{$i_3$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (-2.8995,4.6393) -- (-1.318,4.6393);
\draw[draw=dcColor2,line width=1.5pt] (-1.5289,4.547) -- (-1.318,4.6393) -- (-1.5289,4.7315);
\path (-2.1901,5.748) -- (-2.0274,5.748) -- (-2.1901,4.9441) -- (-2.0274,4.9441) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-2.1088,5.2719) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#105;</text></g></g>}{i}};
\end{circuitikz}

\end{document}
```