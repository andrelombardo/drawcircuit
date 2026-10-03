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
\draw[draw=dcColor0, line width=1.5pt] (-6.8535,1.0544) -- (-8.435,1.0544);
\draw[draw=dcColor0, line width=1.5pt] (-5.2719,2.1088) -- (-5.2719,4.2175);
\draw[draw=dcColor0, line width=1.5pt] (-5.2719,0) -- (-5.2719,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (2.6359,1.5816) -- (0.5272,1.5816);
\draw[draw=dcColor0, line width=1.5pt] (2.6359,0.5272) -- (0.5272,0.5272);
\draw[draw=dcColor0, line width=1.5pt] (4.7447,1.0544) -- (6.8535,1.0544);
\draw[draw=dcColor0, line width=1.5pt] (-2.1088,-3.1631) -- (0.5272,-3.1631);
\draw[draw=dcColor0, line width=1.5pt] (0.5272,-3.1631) -- (3.1631,-3.1631);
\draw[draw=dcColor0, line width=1.5pt] (0.5272,-1.5816) -- (0.5272,-3.1631);
\draw[draw=dcColor0, line width=1.5pt] (0.5272,-3.1631) -- (0.5272,-5.2719);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-3.8485) -- (11.071,-3.8485);
\draw[draw=dcColor0, line width=1.5pt] (14.2341,-2.7941) -- (14.2341,-0.6853);
\draw[draw=dcColor0, line width=1.5pt] (14.2341,-4.9029) -- (14.2341,-7.0116);
\draw[draw=dcColor0, line width=1.5pt] (22.142,-3.3213) -- (20.0332,-3.3213);
\draw[draw=dcColor0, line width=1.5pt] (22.142,-4.3757) -- (20.0332,-4.3757);
\draw[draw=dcColor0, line width=1.5pt] (24.2507,-3.8485) -- (26.3595,-3.8485);
\draw[draw=dcColor0, line width=1.5pt] (17.3973,-8.066) -- (22.6692,-8.066);
\draw[draw=dcColor0, line width=1.5pt] (20.0332,-6.4844) -- (20.0332,-10.1748);
% Unconnected wire crossing: horizontal bridge
\draw[draw=white,line width=4.5pt] (19.8487,-8.066) -- (20.2177,-8.066);
\draw[draw=dcColor0,line width=1.5pt] (20.0332,-7.8815) -- (20.0332,-8.2505);
\draw[draw=white,line width=4.5pt] (19.8487,-8.066) .. controls (19.9225,-7.8815) and (20.1439,-7.8815) .. (20.2177,-8.066);
\draw[draw=dcColor0,line width=1.5pt] (19.8487,-8.066) .. controls (19.9225,-7.8815) and (20.1439,-7.8815) .. (20.2177,-8.066);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (-6.8535,1.0544) -- (-6.1154,1.0544) (-6.1154,1.5289) -- (-6.1154,0.5799) (-6.1154,1.318) -- (-5.2719,1.8452) -- (-5.2719,2.1088) (-6.1154,0.7908) -- (-5.2719,0.2636) -- (-5.2719,0);
\draw[draw=dcColor0, line width=1.5pt] (-5.4208,0.4506) -- (-5.351,0.3137) -- (-5.5047,0.3165);
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (2.6359,1.5816) -- (3.0577,1.5816) (2.6359,0.5272) -- (3.0577,0.5272) (4.323,1.0544) -- (4.7447,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.0577,1.8979) -- (4.323,1.0544) -- (3.0577,0.2109) -- cycle;
\path (3.1799,1.838) -- (3.3572,1.838) -- (3.1799,1.3239) -- (3.3572,1.3239) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.2686,1.5289) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (3.1799,0.889) -- (3.3572,0.889) -- (3.1799,0.375) -- (3.3572,0.375) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.2686,0.5799) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-3.8485) -- (13.3906,-3.8485) (13.3906,-3.374) -- (13.3906,-4.323) (13.3906,-3.5849) -- (14.2341,-3.0577) -- (14.2341,-2.7941) (13.3906,-4.1121) -- (14.2341,-4.6393) -- (14.2341,-4.9029);
\draw[draw=dcColor0, line width=1.5pt] (14.0852,-4.4523) -- (14.155,-4.5892) -- (14.0014,-4.5864);
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (22.142,-3.3213) -- (22.5637,-3.3213) (22.142,-4.3757) -- (22.5637,-4.3757) (23.829,-3.8485) -- (24.2507,-3.8485);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (22.5637,-3.005) -- (23.829,-3.8485) -- (22.5637,-4.692) -- cycle;
\path (22.6859,-3.0649) -- (22.8632,-3.0649) -- (22.6859,-3.5789) -- (22.8632,-3.5789) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (22.7746,-3.374) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (22.6859,-4.0138) -- (22.8632,-4.0138) -- (22.6859,-4.5279) -- (22.8632,-4.5279) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (22.7746,-4.323) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\fill[dcColor0] (0.5272,-3.1631) circle (3.375pt);
\path (-6.2077,3.0577) -- (-5.3821,3.0577) -- (-6.2077,2.2169) -- (-5.3821,2.2169) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-5.7991,2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.3213,2.7414) -- (4.0657,2.7414) -- (3.3213,1.9006) -- (4.0657,1.9006) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.6903,2.3196) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (13.2588,-1.8452) -- (14.1495,-1.8452) -- (13.2588,-2.686) -- (14.1495,-2.686) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (13.7069,-2.2669) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-15" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="4.2891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$Q_2$}};
\path (22.7878,-2.1615) -- (23.5973,-2.1615) -- (22.7878,-3.0023) -- (23.5973,-3.0023) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (23.1963,-2.5832) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="2.7109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$U_2$}};
\path (0.2958,-2.0027) -- (0.7586,-2.0027) -- (0.2958,-2.8857) -- (0.7586,-2.8857) -- cycle;
\node[text=dcColor2, font=\fontsize{18}{23.4}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0.5272,-2.5305) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#DF4949" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="24">&\string#65;</text></g></g>}{A}};
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (-6.8535,0.6326) -- (-8.435,0.6326);
\draw[draw=dcColor2,line width=1.5pt] (-8.2242,0.7249) -- (-8.435,0.6326) -- (-8.2242,0.5404);
\path (-7.8815,0.4218) -- (-7.4017,0.4218) -- (-7.8815,-0.4191) -- (-7.4017,-0.4191) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-7.6443,0) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: voltage
\draw[draw=dcColor2,line width=1.5pt] (-2.6359,3.6903) -- (1.5816,3.6903);
\draw[draw=dcColor2,line width=1.5pt] (1.3707,3.5981) -- (1.5816,3.6903) -- (1.3707,3.7826);
\path (-1.0676,4.7447) -- (0.0169,4.7447) -- (-1.0676,3.9039) -- (0.0169,3.9039) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.5272,4.323) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="-4.1953" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="7.0703" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$V_{AB}$}};
\draw[draw=dcColor2, line width=1.5pt] (3.1307,-2.8333) arc[start angle=369, end angle=45, x radius=2.6359cm, y radius=2.1088cm];
\draw[draw=dcColor2, line width=1.5pt] (2.1688,-1.6123) -- (2.3911,-1.672) -- (2.2841,-1.4682);
% Electrical annotation: current
\draw[draw=dcColor2,line width=1.5pt] (12.6526,-4.2702) -- (11.071,-4.2702);
\draw[draw=dcColor2,line width=1.5pt] (11.2819,-4.178) -- (11.071,-4.2702) -- (11.2819,-4.3625);
\path (11.6245,-4.4811) -- (12.1044,-4.4811) -- (11.6245,-5.3219) -- (12.1044,-5.3219) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-4.9029) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
% Electrical annotation: voltage
\draw[draw=dcColor2,line width=1.5pt] (16.8701,-1.2125) -- (21.0876,-1.2125);
\draw[draw=dcColor2,line width=1.5pt] (20.8767,-1.3048) -- (21.0876,-1.2125) -- (20.8767,-1.1203);
\path (18.4385,-0.1582) -- (19.5229,-0.1582) -- (18.4385,-0.999) -- (19.5229,-0.999) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (18.9788,-0.5799) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="-4.1953" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="7.0703" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$V_{AB}$}};
\draw[draw=dcColor2, line width=1.5pt] (22.6367,-7.7361) arc[start angle=369, end angle=45, x radius=2.6359cm, y radius=2.1088cm];
\draw[draw=dcColor2, line width=1.5pt] (21.6748,-6.5152) -- (21.8971,-6.5749) -- (21.7901,-6.3711);
\end{circuitikz}

\end{document}
```