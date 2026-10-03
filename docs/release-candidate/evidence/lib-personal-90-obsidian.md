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
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\draw[draw=dcColor0, line width=1.5pt] (-3.3635,-2.147) -- (-1.2547,-2.147) -- (-2.3091,-2.147) -- (-2.3091,-4.2557) -- (-1.2547,-4.2557) -- (-1.2547,-5.3101);
\draw[draw=dcColor0, line width=1.5pt] (-1.2547,-7.4189) -- (-1.2547,-10.582) -- (-3.3635,-10.582);
\draw[draw=dcColor0, line width=1.5pt] (-5.4722,-10.582) -- (-7.581,-10.582) -- (-7.581,-2.147) -- (-5.4722,-2.147);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (-3.3635,-2.147) -- (-3.8907,-2.147) (-4.945,-2.147) -- (-5.4722,-2.147);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-4.4178,-2.147) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-4.1279,-2.2788) -- (-4.1279,-2.0152) (-3.9961,-2.147) -- (-4.2597,-2.147) (-4.6024,-2.147) -- (-4.8132,-2.147);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-1.2547,-5.3101) -- (-1.2547,-5.8373) (-1.2547,-6.8917) -- (-1.2547,-7.4189);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-1.0175,-5.8373) -- (-1.0175,-6.8917) -- (-1.4919,-6.8917) -- (-1.4919,-5.8373) -- cycle;
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (-3.3635,-10.582) -- (-3.8907,-10.582) (-4.945,-10.582) -- (-5.4722,-10.582);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-3.7852,-11.1092) -- (-5.0505,-11.1092) -- (-5.0505,-10.0548) -- (-3.7852,-10.0548) -- cycle;
\path (-4.7737,-0.1437) -- (-4.0647,-0.1437) -- (-4.7737,-0.9845) -- (-4.0647,-0.9845) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.4178,-0.5654) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="2.8047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#115;</text></g></g>}{$V_s$}};
\path (-0.8066,-5.9427) -- (-0.1101,-5.9427) -- (-0.8066,-6.7836) -- (-0.1101,-6.7836) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4639,-6.3645) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#115;</text></g></g>}{$R_s$}};
\path (-5.2305,-11.6875) -- (-3.6052,-11.6875) -- (-5.2305,-12.4914) -- (-3.6052,-12.4914) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.4178,-12.1636) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#76;&\string#79;&\string#65;&\string#68;</text></g></g>}{LOAD}};
\end{circuitikz}

\end{document}
```