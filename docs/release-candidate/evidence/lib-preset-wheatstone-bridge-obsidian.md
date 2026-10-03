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
\draw[draw=dcColor0, line width=1.5pt] (1.0544,4.7447) -- (-0.5272,4.7447) -- (-0.5272,3.6903) -- (-3.1631,3.6903) -- (-3.1631,4.7447) -- (-3.1631,3.1631);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,1.0544) -- (-3.1631,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (1.0544,4.7447) -- (5.2719,4.7447) -- (5.2719,3.1631);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,1.0544) -- (5.2719,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,-0.5272) -- (-3.1631,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,-4.2175) -- (-3.1631,-5.7991) -- (1.0544,-5.7991);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-0.5272) -- (5.2719,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-4.2175) -- (5.2719,-5.7991) -- (1.0544,-5.7991);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,-0.5272) -- (0,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (2.1088,-0.5272) -- (5.2719,-0.5272);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,3.1631) -- (-3.1631,2.6359) (-3.1631,1.5816) -- (-3.1631,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-2.9259,2.6359) -- (-2.9259,1.5816) -- (-3.4004,1.5816) -- (-3.4004,2.6359) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (5.2719,3.1631) -- (5.2719,2.6359) (5.2719,1.5816) -- (5.2719,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.5091,2.6359) -- (5.5091,1.5816) -- (5.0347,1.5816) -- (5.0347,2.6359) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,-2.1088) -- (-3.1631,-2.6359) (-3.1631,-3.6903) -- (-3.1631,-4.2175);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-2.9259,-2.6359) -- (-2.9259,-3.6903) -- (-3.4004,-3.6903) -- (-3.4004,-2.6359) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-2.1088) -- (5.2719,-2.6359) (5.2719,-3.6903) -- (5.2719,-4.2175);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.5091,-2.6359) -- (5.5091,-3.6903) -- (5.0347,-3.6903) -- (5.0347,-2.6359) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (0,-0.5272) -- (0.5272,-0.5272) (1.5816,-0.5272) -- (2.1088,-0.5272);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.5272,-0.29) -- (1.5816,-0.29) -- (1.5816,-0.7644) -- (0.5272,-0.7644) -- cycle;
\fill[dcColor0] (1.0544,4.7447) circle (3.375pt);
\fill[dcColor0] (-3.1631,-0.5272) circle (3.375pt);
\fill[dcColor0] (5.2719,-0.5272) circle (3.375pt);
\fill[dcColor0] (1.0544,-5.7991) circle (3.375pt);
\path (-4.5602,2.5305) -- (-3.8786,2.5305) -- (-4.5602,1.6897) -- (-3.8786,1.6897) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.2175,2.1088) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (5.9572,2.5305) -- (6.704,2.5305) -- (5.9572,1.6897) -- (6.704,1.6897) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (6.3263,2.1088) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$R_2$}};
\path (-4.5866,-2.7414) -- (-3.8398,-2.7414) -- (-4.5866,-3.5822) -- (-3.8398,-3.5822) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.2175,-3.1631) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#51;</text></g></g>}{$R_3$}};
\path (5.9572,-2.7414) -- (6.704,-2.7414) -- (5.9572,-3.5822) -- (6.704,-3.5822) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (6.3263,-3.1631) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#52;</text></g></g>}{$R_4$}};
\path (0.6853,0.6853) -- (1.4321,0.6853) -- (0.6853,-0.1555) -- (1.4321,-0.1555) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,0.2636) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#53;</text></g></g>}{$R_5$}};
\path (0.823,5.9051) -- (1.2857,5.9051) -- (0.823,5.0221) -- (1.2857,5.0221) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,5.3773) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#65;</text></g></g>}{A}};
\path (-4.417,0.0006) -- (-4.0181,0.0006) -- (-4.417,-0.8824) -- (-4.0181,-0.8824) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.2175,-0.5272) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#66;</text></g></g>}{B}};
\path (6.1357,0.0006) -- (6.5169,0.0006) -- (6.1357,-0.8824) -- (6.5169,-0.8824) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (6.3263,-0.5272) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#67;</text></g></g>}{C}};
\path (0.8261,-6.3257) -- (1.2827,-6.3257) -- (0.8261,-7.2087) -- (1.2827,-7.2087) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,-6.8535) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#68;</text></g></g>}{D}};
\end{circuitikz}

\end{document}
```