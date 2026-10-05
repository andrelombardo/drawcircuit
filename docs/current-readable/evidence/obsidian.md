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
\draw[draw=dcColor0, line width=1.5pt] (-8.9622,5.7991) -- (-1.0544,5.7991);
\draw[draw=dcColor0, line width=1.5pt] (-8.9622,2.6359) -- (-1.0544,2.6359);
\draw[draw=dcColor0, line width=1.5pt] (-8.9622,-0.5272) -- (-1.0544,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (1.5816,5.7991) -- (1.5816,-0.5272);
\draw[draw=dcColor0, line width=1.5pt] (5.2719,5.7991) -- (7.9078,5.7991) -- (7.9078,2.1088) -- (11.071,2.1088);
\draw[draw=dcColor0, line width=1.5pt] (6.0627,-2.1088) -- (6.5899,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (-6.6351,-4.6995) -- (-6.2623,-5.0723) -- (-4.2175,-5.0723) -- (-4.2175,-6.0627) -- (-2.6359,-6.0627);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-8.1262,-3.2084) -- (-7.7534,-3.5811) (-7.0079,-4.3267) -- (-6.6351,-4.6995);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-7.5857,-3.4134) -- (-6.8401,-4.159) -- (-7.1756,-4.4945) -- (-7.9212,-3.7489) -- cycle;
\fill[dcColor0] (-8.9622,5.7991) circle (3.375pt);
\fill[dcColor0] (-1.0544,5.7991) circle (3.375pt);
\fill[dcColor0] (-8.9622,2.6359) circle (3.375pt);
\fill[dcColor0] (-1.0544,2.6359) circle (3.375pt);
\fill[dcColor0] (-8.9622,-0.5272) circle (3.375pt);
\fill[dcColor0] (-1.0544,-0.5272) circle (3.375pt);
\fill[dcColor0] (1.5816,5.7991) circle (3.375pt);
\fill[dcColor0] (1.5816,-0.5272) circle (3.375pt);
\fill[dcColor0] (5.2719,5.7991) circle (3.375pt);
\fill[dcColor0] (11.071,2.1088) circle (3.375pt);
\fill[dcColor0] (6.0627,-2.1088) circle (3.375pt);
\fill[dcColor0] (6.5899,-2.1088) circle (3.375pt);
\path (-7.7497,-2.7414) -- (-7.0124,-2.7414) -- (-7.7497,-3.5822) -- (-7.0124,-3.5822) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-7.3807,-3.1631) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#100;</text></g></g>}{$R_d$}};
\path (-9.1936,6.9595) -- (-8.7309,6.9595) -- (-9.1936,6.0765) -- (-8.7309,6.0765) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-8.9622,6.4317) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#65;</text></g></g>}{A}};
\path (-1.2538,6.9595) -- (-0.8549,6.9595) -- (-1.2538,6.0765) -- (-0.8549,6.0765) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-1.0544,6.4317) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#66;</text></g></g>}{B}};
\path (-9.1528,3.7964) -- (-8.7716,3.7964) -- (-9.1528,2.9133) -- (-8.7716,2.9133) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-8.9622,3.2686) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#67;</text></g></g>}{C}};
\path (-1.2827,3.7964) -- (-0.8261,3.7964) -- (-1.2827,2.9133) -- (-0.8261,2.9133) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-1.0544,3.2686) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#68;</text></g></g>}{D}};
\path (-9.1598,0.6332) -- (-8.7646,0.6332) -- (-9.1598,-0.2498) -- (-8.7646,-0.2498) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-8.9622,0.1054) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#69;</text></g></g>}{E}};
\path (-1.2464,0.6332) -- (-0.8623,0.6332) -- (-1.2464,-0.2498) -- (-0.8623,-0.2498) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-1.0544,0.1054) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#70;</text></g></g>}{F}};
\path (1.3666,6.9595) -- (1.7966,6.9595) -- (1.3666,6.0765) -- (1.7966,6.0765) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.5816,6.4317) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#71;</text></g></g>}{G}};
\path (1.3386,0.6332) -- (1.8246,0.6332) -- (1.3386,-0.2498) -- (1.8246,-0.2498) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.5816,0.1054) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#72;</text></g></g>}{H}};
\path (5.0615,6.9595) -- (5.4823,6.9595) -- (5.0615,6.0765) -- (5.4823,6.0765) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.2719,6.4317) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#74;</text></g></g>}{J}};
\path (10.8777,3.2692) -- (11.2643,3.2692) -- (10.8777,2.3862) -- (11.2643,2.3862) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.071,2.7414) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#75;</text></g></g>}{K}};
% Electrical annotation: current
\draw[draw=white,line width=4.65pt,line cap=butt] (-5.5882,5.7991) -- (-4.4284,5.7991);
\draw[draw=dcColor2,line width=1.65pt,line cap=round,line join=round] (-5.4828,5.7991) -- (-4.5338,5.7991);
\draw[draw=dcColor2,line width=1.65pt,line cap=round,line join=round] (-4.7974,5.6805) -- (-4.5338,5.7991) -- (-4.7974,5.9177);
\path (-5.3246,5.5882) -- (-4.6928,5.5882) -- (-5.3246,4.7474) -- (-4.6928,4.7474) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.0083,5.1665) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="6.0938" y="0.0156" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#8242;</text></g></g>}{$A^{\prime}$}};
% Electrical annotation: current
\draw[draw=white,line width=4.65pt,line cap=butt] (-5.5882,2.6359) -- (-4.4284,2.6359);
\draw[draw=dcColor0,line width=1.65pt,line cap=round,line join=round] (-5.4828,2.6359) -- (-4.5338,2.6359);
\draw[draw=dcColor0,line width=1.65pt,line cap=round,line join=round] (-4.7974,2.5173) -- (-4.5338,2.6359) -- (-4.7974,2.7546);
\path (-5.2851,2.4251) -- (-4.7402,2.4251) -- (-5.2851,1.5842) -- (-4.7402,1.5842) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.0083,2.0033) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$i_2$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (-5.7991,-0.1054) -- (-4.2175,-0.1054);
\draw[draw=dcColor2,line width=1.5pt] (-4.4284,-0.1977) -- (-4.2175,-0.1054) -- (-4.4284,-0.0132);
\path (-5.2851,0.9489) -- (-4.7402,0.9489) -- (-5.2851,0.1081) -- (-4.7402,0.1081) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.0083,0.5272) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#51;</text></g></g>}{$i_3$}};
% Electrical annotation: current
\draw[draw=white,line width=4.65pt,line cap=butt] (1.5816,3.2159) -- (1.5816,2.056);
\draw[draw=dcColor2,line width=1.65pt,line cap=round,line join=round] (1.5816,3.1104) -- (1.5816,2.1615);
\draw[draw=dcColor2,line width=1.65pt,line cap=round,line join=round] (1.463,2.4251) -- (1.5816,2.1615) -- (1.7002,2.4251);
\path (0.6722,3.0577) -- (1.2171,3.0577) -- (0.6722,2.2169) -- (1.2171,2.2169) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0.9489,2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#52;</text></g></g>}{$i_4$}};
% Electrical annotation: current
\draw[draw=white,line width=4.65pt,line cap=butt] (7.9078,4.5338) -- (7.9078,3.374);
\draw[draw=dcColor1,line width=1.65pt,line cap=round,line join=round] (7.9078,4.4284) -- (7.9078,3.4795);
\draw[draw=dcColor1,line width=1.65pt,line cap=round,line join=round] (7.7892,3.743) -- (7.9078,3.4795) -- (8.0265,3.743);
\path (6.9984,4.3757) -- (7.5433,4.3757) -- (6.9984,3.5348) -- (7.5433,3.5348) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.2752,3.9539) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#53;</text></g></g>}{$i_5$}};
% Electrical annotation: current
\draw[draw=dcColor0,line width=1.65pt,line cap=round,line join=round] (5.8518,-1.687) -- (6.8007,-1.687);
\draw[draw=dcColor0,line width=1.65pt,line cap=round,line join=round] (6.5372,-1.8056) -- (6.8007,-1.687) -- (6.5372,-1.5684);
\path (6.0495,-2.3196) -- (6.5944,-2.3196) -- (6.0495,-3.1605) -- (6.5944,-3.1605) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (6.3263,-2.7414) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#54;</text></g></g>}{$i_6$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.65pt,line cap=round,line join=round] (-6.486,-4.2521) -- (-5.815,-4.9231);
\draw[draw=dcColor2,line width=1.65pt,line cap=round,line join=round] (-6.0852,-4.8206) -- (-5.815,-4.9231) -- (-5.9175,-4.6529);
\path (-7.1728,-4.9115) -- (-6.6279,-4.9115) -- (-7.1728,-5.7523) -- (-6.6279,-5.7523) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-6.896,-5.3332) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#55;</text></g></g>}{$i_7$}};
\end{circuitikz}

\end{document}
```