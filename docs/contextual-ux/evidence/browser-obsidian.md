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
\draw[draw=dcColor0, line width=1.5pt] (-7.6895,3.472) -- (-7.3167,3.0992) -- (-6.3263,3.0992) -- (-6.3263,4.2175) -- (-5.2719,4.2175);
\draw[draw=dcColor0, line width=1.5pt] (-5.2719,4.2175) -- (-4.4811,4.2175) -- (-4.4811,5.3359) -- (-3.7543,5.3359) -- (-3.3815,4.9631);
\draw[draw=dcColor0, line width=1.5pt] (-2.6359,-0.5272) -- (1.0544,-0.5272) -- (1.0544,-2.6359) -- (6.8535,-2.6359) -- (6.8535,-0.5272) -- (8.9622,-0.5272);
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-9.1806,4.9631) -- (-8.8078,4.5903) (-8.0623,3.8447) -- (-7.6895,3.472);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-8.6401,4.758) -- (-7.8945,4.0125) -- (-8.23,3.677) -- (-8.9756,4.4225) -- cycle;
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (-3.3815,4.9631) -- (-2.7478,4.3294) (-2.5241,4.1057) -- (-1.8904,3.472) (-2.4309,4.6462) -- (-3.0646,4.0125) (-2.2073,4.4225) -- (-2.841,3.7888);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.1631,4.7394) -- (3.3868,3.9938) -- (2.6412,4.2175) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (2.4176,4.9631) -- (2.9022,4.4785) (3.3868,3.9938) -- (3.9087,3.472);
\draw[draw=dcColor0, line width=1.5pt] (3.6478,4.2548) -- (3.1259,3.7329);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (8.2167,4.9631) -- (8.5894,4.5903) (9.335,3.8447) -- (9.7078,3.472);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,4.2175) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.8504,4.5157) -- (8.664,4.3294) (8.664,4.5157) -- (8.8504,4.3294) (9.0927,4.087) -- (9.2418,3.9379);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (-8.8078,0.5911) -- (-8.3978,0.1811) (-9.5534,-0.1544) -- (-9.1433,-0.5645);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-8.3605,0.442) .. controls (-8.0623,0.1438) and (-7.938,-0.3284) .. (-7.9877,-0.9745) .. controls (-8.6339,-1.0242) and (-9.106,-0.9) .. (-9.4043,-0.6017) .. controls (-8.8575,-0.4526) and (-8.5096,-0.1047) .. (-8.3605,0.442) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-8.4723,0.5539) .. controls (-8.6214,0.0071) and (-8.9694,-0.3408) .. (-9.5161,-0.4899);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-7.9131,-1.0491) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (-7.8386,-1.1236) -- (-7.6895,-1.2727);
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (-3.0087,0.5911) -- (-2.7105,0.2929) (-3.7543,-0.1544) -- (-3.4561,-0.4526) (-2.1886,-0.9745) -- (-1.8904,-1.2727);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-2.4868,0.5166) -- (-2.1886,-0.9745) -- (-3.6797,-0.6763) -- cycle;
\path (-2.4428,0.3878) -- (-2.3174,0.2624) -- (-2.8062,0.0243) -- (-2.6809,-0.101) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-45] at (-2.5987,0.1065) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (-3.1138,-0.2832) -- (-2.9884,-0.4086) -- (-3.4773,-0.6467) -- (-3.3519,-0.772) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-45] at (-3.2697,-0.5645) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (2.4176,0.2184) -- (2.9395,-0.3035) (3.275,0.032) -- (2.604,-0.639) (3.1259,-0.1171) -- (4.0951,-0.3408) -- (4.2815,-0.1544) (2.7531,-0.4899) -- (2.9767,-1.4591) -- (2.7904,-1.6455);
\draw[draw=dcColor0, line width=1.5pt] (3.0036,-1.2216) -- (2.9562,-1.3678) -- (2.8495,-1.2572);
\fill[dcColor0] (-5.2719,4.2175) circle (3.375pt);
\path (-8.2185,5.1984) -- (-7.5369,5.1984) -- (-8.2185,4.3576) -- (-7.5369,4.3576) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-7.8759,4.7767) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-2.4063,5.1984) -- (-1.7397,5.1984) -- (-2.4063,4.3576) -- (-1.7397,4.3576) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-2.0768,4.7767) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (3.3533,5.1984) -- (4.0891,5.1984) -- (3.3533,4.3576) -- (4.0891,4.3576) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.7223,4.7767) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (9.1787,5.1984) -- (9.8729,5.1984) -- (9.1787,4.3576) -- (9.8729,4.3576) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (9.5214,4.7767) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-7.9094,0.7892) -- (-7.1649,0.7892) -- (-7.9094,-0.0516) -- (-7.1649,-0.0516) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-7.5404,0.3675) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-2.1498,0.7892) -- (-1.3403,0.7892) -- (-2.1498,-0.0516) -- (-1.3403,-0.0516) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-1.7413,0.3675) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="2.7109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$U_2$}};
\path (3.8729,1.0129) -- (4.6985,1.0129) -- (3.8729,0.1721) -- (4.6985,0.1721) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2815,0.5911) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-5.5033,5.378) -- (-5.0405,5.378) -- (-5.5033,4.4949) -- (-5.0405,4.4949) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.2719,4.8501) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#65;</text></g></g>}{A}};
\path (-8.435,-4.4805) -- (-7.9723,-4.4805) -- (-8.435,-5.3635) -- (-7.9723,-5.3635) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-8.435,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(8.7773,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#65;</text></g></g>}{A}};
\path (-5.7991,-4.547) -- (-5.0001,-4.547) -- (-5.7991,-5.4774) -- (-5.0001,-5.4774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.7991,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(15,0)"><text x="-13" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="4.5547" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (-3.1631,-4.547) -- (-2.2931,-4.547) -- (-3.1631,-5.4774) -- (-2.2931,-5.4774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-3.1631,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(16.5,0)"><text x="-14.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="3.0547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$A^2$}};
\path (-0.5272,-4.547) -- (0.542,-4.547) -- (-0.5272,-5.4774) -- (0.542,-5.4774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.5272,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(20.5,0)"><text x="-18.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="-0.9453" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#49;&\string#48;</text></g></g>}{$A^{10}$}};
\path (2.1088,-4.547) -- (2.7883,-4.547) -- (2.1088,-5.4774) -- (2.7883,-5.4774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (2.1088,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(13,0)"><text x="-11" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="6.5547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;</text></g></g>}{$A'$}};
\path (4.7447,-4.547) -- (5.504,-4.547) -- (4.7447,-5.4774) -- (5.504,-5.4774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.7447,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(14.5,0)"><text x="-12.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="5.0547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;&\string#8242;</text></g></g>}{$A''$}};
\path (7.3807,-4.547) -- (8.2198,-4.547) -- (7.3807,-5.4774) -- (8.2198,-5.4774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.3807,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(16,0)"><text x="-14" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="3.5547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;&\string#8242;&\string#8242;</text></g></g>}{$A'''$}};
\path (10.0166,-4.547) -- (10.6962,-4.547) -- (10.0166,-5.4774) -- (10.6962,-5.4774) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (10.0166,-5.0083) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(13,0)"><text x="-11" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="6.5547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;</text></g></g>}{$A^{\prime}$}};
\path (-8.435,-6.2604) -- (-7.6758,-6.2604) -- (-8.435,-7.1908) -- (-7.6758,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-8.435,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(14.5,0)"><text x="-12.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="5.0547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;&\string#8242;</text></g></g>}{$A^{\prime\prime}$}};
\path (-5.7991,-6.2604) -- (-5.1195,-6.2604) -- (-5.7991,-7.1908) -- (-5.1195,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.7991,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(13,0)"><text x="-11" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="6.5547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;</text></g></g>}{$A^{\prime}$}};
\path (-3.1631,-6.2604) -- (-2.4836,-6.2604) -- (-3.1631,-7.1908) -- (-2.4836,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-3.1631,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(13,0)"><text x="-11" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="6.5547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;</text></g></g>}{$A^{\prime}$}};
\path (-0.5272,-6.2604) -- (0.1524,-6.2604) -- (-0.5272,-7.1908) -- (0.1524,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.5272,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(13,0)"><text x="-11" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#65;</text><text x="6.5547" y="-0.2109" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#8242;</text></g></g>}{$A^{\prime}$}};
\path (2.1088,-6.2604) -- (3.2822,-6.2604) -- (2.1088,-7.1908) -- (3.2822,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (2.1088,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(22.5,0)"><text x="-20.5" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#86;</text><text x="-4.8984" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#65;</text><text x="7.3906" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$V_{AB}$}};
\path (4.7447,-6.2604) -- (5.8079,-6.2604) -- (4.7447,-7.1908) -- (5.8079,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.7447,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(20,0)"><text x="-18" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4688" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#65;</text><text x="5.8203" y="12.1016" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="16.8" font-style="normal" font-weight="400">&\string#67;</text></g></g>}{$r_{AC}$}};
\path (7.3807,-6.2604) -- (8.5405,-6.2604) -- (7.3807,-7.1908) -- (8.5405,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.3807,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(22,0)"><text x="-20" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#916;</text><text x="-0.9297" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#86;</text></g></g>}{$\Delta V$}};
\path (10.0166,-6.2604) -- (11.607,-6.2604) -- (10.0166,-7.1908) -- (11.607,-7.1908) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (10.0166,-6.7217) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(30,0)"><text x="-28" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#53;&\string#48;</text><text x="5.2969" y="8.5" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24" font-style="normal" font-weight="400">&\string#937;</text></g></g>}{$50\,\Omega$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (6.4317,-2.3724) -- (6.4317,-0.7908);
\draw[draw=dcColor2,line width=1.5pt] (6.524,-1.0017) -- (6.4317,-0.7908) -- (6.3395,-1.0017);
\path (5.5619,-1.1598) -- (6.0417,-1.1598) -- (5.5619,-2.0006) -- (6.0417,-2.0006) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.7991,-1.5816) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (6.7612,-1.3707) -- (6.8535,-1.5816) -- (6.9457,-1.3707);
\path (7.2093,-1.1598) -- (7.7542,-1.1598) -- (7.2093,-2.0006) -- (7.7542,-2.0006) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.4861,-1.5816) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-2.3281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$i_2$}};
\end{circuitikz}

\end{document}
```