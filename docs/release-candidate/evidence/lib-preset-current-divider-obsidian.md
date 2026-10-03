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
\draw[draw=dcColor0, line width=1.5pt] (-5.2719,-0.5272) -- (-4.2175,-0.5272) -- (-3.1631,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-0.5272) -- (7.3807,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,1.5816) -- (-3.1631,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,1.5816) -- (5.2719,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,-0.5272) -- (-3.1631,-2.6359);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-0.5272) -- (5.2719,-2.6359);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,1.5816) -- (0,1.5816);
\draw[draw=dcColor0, line width=1.5pt] (2.1088,1.5816) -- (5.2719,1.5816);
\draw[draw=dcColor0, line width=1.5pt] (-3.1631,-2.6359) -- (0,-2.6359);
\draw[draw=dcColor0, line width=1.5pt] (2.1088,-2.6359) -- (5.2719,-2.6359);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (0,1.5816) -- (0.5272,1.5816) (1.5816,1.5816) -- (2.1088,1.5816);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.5272,1.8188) -- (1.5816,1.8188) -- (1.5816,1.3443) -- (0.5272,1.3443) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (0,-2.6359) -- (0.5272,-2.6359) (1.5816,-2.6359) -- (2.1088,-2.6359);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.5272,-2.3987) -- (1.5816,-2.3987) -- (1.5816,-2.8732) -- (0.5272,-2.8732) -- cycle;
\fill[dcColor0] (-5.2719,-0.5272) circle (3.375pt);
\fill[dcColor0] (7.3807,-0.5272) circle (3.375pt);
\fill[dcColor0] (-3.1631,1.5816) circle (3.375pt);
\fill[dcColor0] (5.2719,1.5816) circle (3.375pt);
\fill[dcColor0] (-3.1631,-0.5272) circle (3.375pt);
\fill[dcColor0] (5.2719,-0.5272) circle (3.375pt);
\fill[dcColor0] (-3.1631,-2.6359) circle (3.375pt);
\fill[dcColor0] (5.2719,-2.6359) circle (3.375pt);
\path (0.7117,2.7941) -- (1.3933,2.7941) -- (0.7117,1.9533) -- (1.3933,1.9533) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,2.3724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (0.6853,-1.4234) -- (1.4321,-1.4234) -- (0.6853,-2.2642) -- (1.4321,-2.2642) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,-1.8452) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$R_2$}};
\path (-6.2208,0.9885) -- (-5.3823,0.9885) -- (-6.2208,0.0581) -- (-5.3823,0.0581) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.7991,0.5272) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-14" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#73;</text><text x="-0.8828" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#105;&\string#110;</text></g></g>}{$I_{in}$}};
\path (7.7084,1.055) -- (8.1073,1.055) -- (7.7084,0.172) -- (8.1073,0.172) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,0.5272) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#66;</text></g></g>}{B}};
\end{circuitikz}

\end{document}
```