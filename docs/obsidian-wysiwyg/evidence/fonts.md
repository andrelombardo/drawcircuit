```tikz
\usepackage{circuitikz}
\usepackage{amsmath}
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
\definecolor{dcColor0}{HTML}{2463CB}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\path (0.8423,-0.5783) -- (1.2665,-0.5783) -- (0.8423,-1.3822) -- (1.2665,-1.3822) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,-1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#65;</text></g></g>}{A}};
\path (5.089,-0.5783) -- (5.4548,-0.5783) -- (5.089,-1.3822) -- (5.4548,-1.3822) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.2719,-1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#66;</text></g></g>}{B}};
\path (9.3147,-0.5783) -- (9.6641,-0.5783) -- (9.3147,-1.3822) -- (9.6641,-1.3822) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (9.4894,-1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#67;</text></g></g>}{C}};
\path (13.4976,-0.5783) -- (13.9163,-0.5783) -- (13.4976,-1.3822) -- (13.9163,-1.3822) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (13.7069,-1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#68;</text></g></g>}{D}};
\path (17.5818,-0.6326) -- (18.2634,-0.6326) -- (17.5818,-1.4735) -- (18.2634,-1.4735) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (17.9244,-1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (21.7729,-0.6326) -- (22.5196,-0.6326) -- (21.7729,-1.4735) -- (22.5196,-1.4735) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (22.142,-1.0544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#50;</text></g></g>}{$R_2$}};
\path (0.6853,-3.2686) -- (1.4321,-3.2686) -- (0.6853,-4.1094) -- (1.4321,-4.1094) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,-3.6903) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#51;</text></g></g>}{$R_3$}};
\path (4.9029,-3.2686) -- (5.6496,-3.2686) -- (4.9029,-4.1094) -- (5.6496,-4.1094) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.2719,-3.6903) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="1.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#52;</text></g></g>}{$R_4$}};
\path (9.0018,-3.2686) -- (9.9878,-3.2686) -- (9.0018,-4.1094) -- (9.9878,-4.1094) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (9.4894,-3.6903) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-16.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-5.9297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="5.3359" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$r_{AB}$}};
\path (13.2193,-3.2686) -- (14.2026,-3.2686) -- (13.2193,-4.1094) -- (14.2026,-4.1094) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (13.7069,-3.6903) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-16.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-5.9297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="5.3359" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#67;</text></g></g>}{$r_{AC}$}};
\path (17.4368,-3.2686) -- (18.3993,-3.2686) -- (17.4368,-4.1094) -- (18.3993,-4.1094) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (17.9244,-3.6903) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-16.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-5.9297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text><text x="4.5469" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#67;</text></g></g>}{$r_{BC}$}};
\path (21.6411,-3.2686) -- (22.6552,-3.2686) -- (21.6411,-4.1094) -- (22.6552,-4.1094) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (22.142,-3.6903) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="4.8359" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#68;</text></g></g>}{$r_{AD}$}};
\path (0.5535,-5.9045) -- (1.5468,-5.9045) -- (0.5535,-6.7454) -- (1.5468,-6.7454) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,-6.3263) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text><text x="4.0469" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#68;</text></g></g>}{$r_{BD}$}};
\path (4.7711,-5.9045) -- (5.7616,-5.9045) -- (4.7711,-6.7454) -- (5.7616,-6.7454) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.2719,-6.3263) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-6.4297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#67;</text><text x="3.9453" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#68;</text></g></g>}{$r_{CD}$}};
\path (9.1731,-5.9045) -- (9.8072,-5.9045) -- (9.1731,-6.7454) -- (9.8072,-6.7454) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (9.4894,-6.3263) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (13.3906,-5.9045) -- (14.0272,-5.9045) -- (13.3906,-6.7454) -- (14.0272,-6.7454) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (13.7069,-6.3263) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (17.6872,-5.9045) -- (18.167,-5.9045) -- (17.6872,-6.7454) -- (18.167,-6.7454) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (17.9244,-6.3263) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#105;</text><text x="-0.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$i_1$}};
\path (21.0881,-5.8502) -- (23.1958,-5.8502) -- (21.0881,-6.6541) -- (23.1958,-6.6541) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (22.142,-6.3263) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#109;&\string#97;&\string#103;&\string#108;&\string#105;&\string#97;&\string#32;&\string#49;</text></g></g>}{maglia 1}};
\path (0.369,-8.5405) -- (1.7391,-8.5405) -- (0.369,-9.3813) -- (1.7391,-9.3813) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (1.0544,-8.9622) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-24" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#53;&\string#48;&\string#937;</text></g></g>}{$50 \Omega$}};
\path (4.916,-8.5009) -- (5.6214,-8.5009) -- (4.916,-9.4311) -- (5.6214,-9.4311) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (5.2719,-8.9622) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-8.8672" y="14.0938" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#82;</text><text x="0.8125" y="15.7969" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="11" font-style="normal" font-weight="400">&\string#50;</text><text x="-7.9844" y="-2.5156" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#82;</text><text x="1.6953" y="-0.8125" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="11" font-style="normal" font-weight="400">&\string#49;</text><rect x="-8.8672" y="0.4453" width="17.4922" height="0.5"/></g></g>}{$\frac{R_1}{R_2}$}};
\path (8.7513,-8.5405) -- (10.2203,-8.5405) -- (8.7513,-9.3951) -- (10.2203,-9.3951) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (9.4894,-8.9622) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-7.6797" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="2.8906" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="14.1563" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text><svg x="-26" y="-9.3281" width="51.7266" height="23.7578" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></g></g>}{$\sqrt{r_{AB}}$}};
\path (13.0743,-8.5405) -- (14.349,-8.5405) -- (13.0743,-9.3813) -- (14.349,-9.3813) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (13.7069,-8.9622) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-22" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;&\string#38;&\string#66;</text></g></g>}{$\text{A\&B}$}};
\path (2.0577,-12.1254) -- (2.0577,-12.5496) -- (1.2537,-12.1254) -- (1.2537,-12.5496) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcStartAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (1.5816,-12.1254) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(8.0469,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#65;</text></g></g>}{A}};
\path (5.3773,-13.1007) -- (5.3773,-12.1147) -- (6.2182,-13.1007) -- (6.2182,-12.1147) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcEndAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (5.7991,-12.1254) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(-18.5,0)"><text x="-16.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#114;</text><text x="-5.9297" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#65;</text><text x="5.3359" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#66;</text></g></g>}{$r_{AB}$}};
\path (10.4927,-11.3761) -- (10.4927,-12.8747) -- (9.6888,-11.3761) -- (9.6888,-12.8747) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (10.0166,-12.1254) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#112;&\string#114;&\string#105;&\string#109;&\string#97;</text></g></g>}{prima}};
\path (9.7098,-11.0534) -- (9.7098,-13.1973) -- (8.9059,-11.0534) -- (8.9059,-13.1973) -- cycle;
\node[text=dcColor0, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (9.2337,-12.1254) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22">&\string#115;&\string#101;&\string#99;&\string#111;&\string#110;&\string#100;&\string#97;</text></g></g>}{seconda}};
\end{circuitikz}

\end{document}
```