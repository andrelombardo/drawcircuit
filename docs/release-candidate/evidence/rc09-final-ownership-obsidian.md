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
\draw[draw=dcColor0, line width=1.5pt] (-4.7447,1.0544) -- (-2.1088,1.0544);
\draw[draw=dcColor0, line width=1.5pt] (-6.8535,-2.6359) -- (-3.6903,-2.6359);
\draw[draw=dcColor0, line width=1.5pt] (-1.5816,-2.6359) -- (1.0544,-2.6359);
\draw[draw=dcColor0, line width=1.5pt] (1.0544,-2.6359) -- (4.7447,-2.6359);
\draw[draw=dcColor0, line width=1.5pt] (-0.5272,-0.5272) -- (-0.5272,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (1.0544,-0.5272) -- (1.0544,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (0,-4.2175) -- (1.0544,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (3.1631,-4.2175) -- (5.2719,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (7.3807,-4.2175) -- (9.4894,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-4.2175) -- (12.6526,-4.2175);
\draw[draw=dcColor0, line width=1.5pt] (6.9431,-8.1082) -- (7.9975,-8.1082);
\draw[draw=dcColor0, line width=1.5pt] (10.1062,-8.1082) -- (12.215,-8.1082);
\draw[draw=dcColor0, line width=1.5pt] (14.3237,-8.1082) -- (16.4325,-8.1082);
\draw[draw=dcColor0, line width=1.5pt] (18.5413,-8.1082) -- (19.5956,-8.1082);
% Unconnected wire crossing: horizontal bridge
\draw[draw=white,line width=4.5pt] (-0.7117,-2.6359) -- (-0.3427,-2.6359);
\draw[draw=dcColor0,line width=1.5pt] (-0.5272,-2.4514) -- (-0.5272,-2.8205);
\draw[draw=white,line width=4.5pt] (-0.7117,-2.6359) .. controls (-0.6379,-2.4514) and (-0.4165,-2.4514) .. (-0.3427,-2.6359);
\draw[draw=dcColor0,line width=1.5pt] (-0.7117,-2.6359) .. controls (-0.6379,-2.4514) and (-0.4165,-2.4514) .. (-0.3427,-2.6359);
% Unconnected wire crossing: vertical bridge
\draw[draw=white,line width=4.5pt] (1.0544,-2.3196) -- (1.0544,-2.9523);
\draw[draw=dcColor0,line width=1.5pt] (0.7381,-2.6359) -- (1.3707,-2.6359);
\draw[draw=white,line width=4.5pt] (1.0544,-2.3196) .. controls (1.3707,-2.4462) and (1.3707,-2.8257) .. (1.0544,-2.9523);
\draw[draw=dcColor0,line width=1.5pt] (1.0544,-2.3196) .. controls (1.3707,-2.4462) and (1.3707,-2.8257) .. (1.0544,-2.9523);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (-6.8535,1.0544) -- (-6.3263,1.0544) (-5.2719,1.0544) -- (-4.7447,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-5.7991,1.0544) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-6.089,1.1862) -- (-6.089,0.9226) (-6.2208,1.0544) -- (-5.9572,1.0544) (-5.6146,1.0544) -- (-5.4037,1.0544);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-2.1088,1.0544) -- (-1.5816,1.0544) (-0.5272,1.0544) -- (0,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-1.5816,1.2916) -- (-0.5272,1.2916) -- (-0.5272,0.8171) -- (-1.5816,0.8171) -- cycle;
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (2.6359,1.0544) -- (3.5322,1.0544) (3.8485,1.0544) -- (4.7447,1.0544) (3.5322,1.5025) -- (3.5322,0.6063) (3.8485,1.5025) -- (3.8485,0.6063);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-3.6903,-2.6359) -- (-3.1631,-2.6359) (-2.1088,-2.6359) -- (-1.5816,-2.6359);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-3.1631,-2.3987) -- (-2.1088,-2.3987) -- (-2.1088,-2.8732) -- (-3.1631,-2.8732) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-2.1088,3.1631) -- (-1.5816,3.1631) (-0.5272,3.1631) -- (0,3.1631);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-1.5816,3.4004) -- (-0.5272,3.4004) -- (-0.5272,2.9259) -- (-1.5816,2.9259) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-6.8535,3.1631) -- (-6.3263,3.1631) (-5.2719,3.1631) -- (-4.7447,3.1631);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-6.3263,3.4004) -- (-5.2719,3.4004) -- (-5.2719,2.9259) -- (-6.3263,2.9259) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (2.6359,3.1631) -- (3.1631,3.1631) (4.2175,3.1631) -- (4.7447,3.1631);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.1631,3.4004) -- (4.2175,3.4004) -- (4.2175,2.9259) -- (3.1631,2.9259) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (1.0544,-4.2175) -- (1.5816,-4.2175) (2.6359,-4.2175) -- (3.1631,-4.2175);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (1.5816,-3.9803) -- (2.6359,-3.9803) -- (2.6359,-4.4548) -- (1.5816,-4.4548) -- cycle;
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-4.2175) -- (5.6936,-4.2175) .. controls (5.6936,-3.743) and (6.01,-3.743) .. (6.01,-4.2175) .. controls (6.01,-3.743) and (6.3263,-3.743) .. (6.3263,-4.2175) .. controls (6.3263,-3.743) and (6.6426,-3.743) .. (6.6426,-4.2175) .. controls (6.6426,-3.743) and (6.9589,-3.743) .. (6.9589,-4.2175) -- (7.3807,-4.2175);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-4.2175) -- (10.3856,-4.2175) (10.702,-4.2175) -- (11.5982,-4.2175) (10.3856,-3.7694) -- (10.3856,-4.6656) (10.702,-3.7694) -- (10.702,-4.6656);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (7.9975,-8.1082) -- (8.5247,-8.1082) (9.579,-8.1082) -- (10.1062,-8.1082);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5247,-7.8709) -- (9.579,-7.8709) -- (9.579,-8.3454) -- (8.5247,-8.3454) -- cycle;
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (12.215,-8.1082) -- (12.6367,-8.1082) .. controls (12.6367,-7.6337) and (12.9531,-7.6337) .. (12.9531,-8.1082) .. controls (12.9531,-7.6337) and (13.2694,-7.6337) .. (13.2694,-8.1082) .. controls (13.2694,-7.6337) and (13.5857,-7.6337) .. (13.5857,-8.1082) .. controls (13.5857,-7.6337) and (13.902,-7.6337) .. (13.902,-8.1082) -- (14.3237,-8.1082);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (16.4325,-8.1082) -- (17.3287,-8.1082) (17.645,-8.1082) -- (18.5413,-8.1082) (17.3287,-7.6601) -- (17.3287,-8.5563) (17.645,-7.6601) -- (17.645,-8.5563);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,0) -- (-0.5272,0) (0.5272,0) -- (1.0544,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,0.2372) -- (0.5272,0.2372) -- (0.5272,-0.2372) -- (-0.5272,-0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-5.7991,2.1088) -- (-5.2719,2.1088) (-4.2175,2.1088) -- (-3.6903,2.1088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-5.2719,2.346) -- (-4.2175,2.346) -- (-4.2175,1.8715) -- (-5.2719,1.8715) -- cycle;
\fill[dcColor0] (1.0544,-2.6359) circle (3.375pt);
\fill[dcColor0] (0,1.0544) circle (3.375pt);
\fill[dcColor0] (4.7447,1.0544) circle (3.375pt);
\fill[dcColor0] (4.7447,-2.6359) circle (3.375pt);
\fill[dcColor0] (0,-4.2175) circle (3.375pt);
\fill[dcColor0] (12.6526,-4.2175) circle (3.375pt);
\fill[dcColor0] (6.9431,-8.1082) circle (3.375pt);
\fill[dcColor0] (19.5956,-8.1082) circle (3.375pt);
\path (-6.1418,2.2669) -- (-5.4476,2.2669) -- (-6.1418,1.4261) -- (-5.4476,1.4261) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.7991,1.8452) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-1.542,3.3213) -- (-0.556,3.3213) -- (-1.542,2.4805) -- (-0.556,2.4805) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-1.0544,2.8995) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-16.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-5.9297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="5.3359" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$r_{AB}$}};
\path (3.3213,2.2669) -- (4.068,2.2669) -- (3.3213,1.4261) -- (4.068,1.4261) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.6903,1.8452) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$R_2$}};
\path (-3.3213,-1.4234) -- (-1.9512,-1.4234) -- (-3.3213,-2.2642) -- (-1.9512,-2.2642) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-2.6359,-1.8452) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-24" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#53;&\string#48;&\string#937;</text></g></g>}{$50 \Omega$}};
\path (-1.3971,4.3757) -- (-0.7154,4.3757) -- (-1.3971,3.5348) -- (-0.7154,3.5348) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-1.0544,3.9539) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-6.1681,4.3757) -- (-5.4214,4.3757) -- (-6.1681,3.5348) -- (-5.4214,3.5348) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.7991,3.9539) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#51;</text></g></g>}{$R_3$}};
\path (3.3213,4.3757) -- (4.068,4.3757) -- (3.3213,3.5348) -- (4.068,3.5348) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.6903,3.9539) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#52;</text></g></g>}{$R_4$}};
\path (1.7397,-3.005) -- (2.4864,-3.005) -- (1.7397,-3.8458) -- (2.4864,-3.8458) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (2.1088,-3.4267) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#53;</text></g></g>}{$R_5$}};
\path (6.01,-3.005) -- (6.6465,-3.005) -- (6.01,-3.8458) -- (6.6465,-3.8458) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (6.3263,-3.4267) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (10.2143,-3.005) -- (10.8809,-3.005) -- (10.2143,-3.8458) -- (10.8809,-3.8458) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (10.5438,-3.4267) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (8.6828,-6.8956) -- (9.4295,-6.8956) -- (8.6828,-7.7365) -- (9.4295,-7.7365) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (9.0518,-7.3174) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#54;</text></g></g>}{$R_6$}};
\path (12.9135,-6.8956) -- (13.6151,-6.8956) -- (12.9135,-7.7365) -- (13.6151,-7.7365) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (13.2694,-7.3174) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="0.6172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$L_2$}};
\path (17.1178,-6.8956) -- (17.8495,-6.8956) -- (17.1178,-7.7365) -- (17.8495,-7.7365) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (17.4869,-7.3174) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="1.2578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$C_2$}};
\path (-0.4877,2.2669) -- (0.4984,2.2669) -- (-0.4877,1.4261) -- (0.4984,1.4261) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,1.8452) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-16.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-5.9297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="5.3359" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$r_{AB}$}};
\path (-5.1137,3.3213) -- (-4.367,3.3213) -- (-5.1137,2.4805) -- (-4.367,2.4805) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.7447,2.8995) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#55;</text></g></g>}{$R_7$}};
\path (0.823,-1.4755) -- (1.2857,-1.4755) -- (0.823,-2.3586) -- (1.2857,-2.3586) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,-2.0033) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#65;</text></g></g>}{A}};
\path (0.3277,3.1638) -- (0.7266,3.1638) -- (0.3277,2.2807) -- (0.7266,2.2807) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0.5272,2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#66;</text></g></g>}{B}};
\path (4.5541,2.2148) -- (4.9353,2.2148) -- (4.5541,1.3318) -- (4.9353,1.3318) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.7447,1.687) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#67;</text></g></g>}{C}};
\path (4.5164,-1.4755) -- (4.973,-1.4755) -- (4.5164,-2.3586) -- (4.973,-2.3586) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.7447,-2.0033) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#68;</text></g></g>}{D}};
\path (-0.4349,-3.1236) -- (0.4351,-3.1236) -- (-0.4349,-4.054) -- (0.4351,-4.054) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-3.5849) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="3.0547" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$A_2$}};
\path (12.244,-3.1236) -- (13.0502,-3.1236) -- (12.244,-4.054) -- (13.0502,-4.054) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-3.5849) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#66;</text><text x="1.6328" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$B_2$}};
\path (6.5082,-7.0143) -- (7.3782,-7.0143) -- (6.5082,-7.9447) -- (7.3782,-7.9447) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (6.9431,-7.4756) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="3.0547" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$A_2$}};
\path (19.1871,-7.0143) -- (19.9933,-7.0143) -- (19.1871,-7.9447) -- (19.9933,-7.9447) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (19.5956,-7.4756) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#66;</text><text x="1.6328" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$B_2$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (-5.2719,-2.2142) -- (-3.6903,-2.2142);
\draw[draw=dcColor2,line width=1.5pt] (-3.9012,-2.3065) -- (-3.6903,-2.2142) -- (-3.9012,-2.1219);
\path (-4.7183,-1.1598) -- (-4.2385,-1.1598) -- (-4.7183,-2.0006) -- (-4.2385,-2.0006) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-4.4811,-1.5816) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: voltage
\draw[draw=dcColor2,line width=1.5pt] (3.1631,-3.6903) -- (4.2175,-3.6903);
\draw[draw=dcColor2,line width=1.5pt] (4.0066,-3.7826) -- (4.2175,-3.6903) -- (4.0066,-3.5981);
\path (3.15,-2.6359) -- (4.2344,-2.6359) -- (3.15,-3.4768) -- (4.2344,-3.4768) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.6903,-3.0577) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="-4.1953" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="7.0703" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$V_{AB}$}};
\draw[draw=dcColor2, line width=1.5pt] (-2.1347,-1.1943) arc[start angle=369, end angle=45, x radius=2.1088cm, y radius=0.7908cm];
\draw[draw=dcColor2, line width=1.5pt] (-2.9562,-0.7711) -- (-2.7264,-0.7588) -- (-2.8915,-0.5984);
\end{circuitikz}

\end{document}
```