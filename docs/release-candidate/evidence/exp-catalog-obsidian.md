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
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,0) -- (-0.5272,0) (0.5272,0) -- (1.0544,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,0.2372) -- (0.5272,0.2372) -- (0.5272,-0.2372) -- (-0.5272,-0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (4.2175,1.0544) -- (4.2175,0.5272) (4.2175,-0.5272) -- (4.2175,-1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4548,0.5272) -- (4.4548,-0.5272) -- (3.9803,-0.5272) -- (3.9803,0.5272) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (9.4894,0) -- (8.9622,0) (7.9078,0) -- (7.3807,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-0.2372) -- (7.9078,-0.2372) -- (7.9078,0.2372) -- (8.9622,0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-1.0544) -- (12.6526,-0.5272) (12.6526,0.5272) -- (12.6526,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.4153,-0.5272) -- (12.4153,0.5272) -- (12.8898,0.5272) -- (12.8898,-0.5272) -- cycle;
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-3.4267) -- (-0.1582,-3.4267) (0.1582,-3.4267) -- (1.0544,-3.4267) (-0.1582,-2.9786) -- (-0.1582,-3.8748) (0.1582,-2.9786) -- (0.1582,-3.8748);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-2.3724) -- (4.2175,-3.2686) (4.2175,-3.5849) -- (4.2175,-4.4811) (4.6656,-3.2686) -- (3.7694,-3.2686) (4.6656,-3.5849) -- (3.7694,-3.5849);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-3.4267) -- (8.5932,-3.4267) (8.2769,-3.4267) -- (7.3807,-3.4267) (8.5932,-3.8748) -- (8.5932,-2.9786) (8.2769,-3.8748) -- (8.2769,-2.9786);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-4.4811) -- (12.6526,-3.5849) (12.6526,-3.2686) -- (12.6526,-2.3724) (12.2044,-3.5849) -- (13.1007,-3.5849) (12.2044,-3.2686) -- (13.1007,-3.2686);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-6.8535) -- (-0.1582,-6.8535) (0.2372,-6.8535) -- (1.0544,-6.8535) (-0.1582,-6.4054) -- (-0.1582,-7.3016) (0.2372,-6.4054) .. controls (0.1142,-6.7041) and (0.1142,-7.0028) .. (0.2372,-7.3016) (-0.5008,-6.4844) -- (-0.29,-6.4844) (-0.3954,-6.379) -- (-0.3954,-6.5899);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-5.7991) -- (4.2175,-6.6953) (4.2175,-7.0907) -- (4.2175,-7.9078) (4.6656,-6.6953) -- (3.7694,-6.6953) (4.6656,-7.0907) .. controls (4.3669,-6.9677) and (4.0681,-6.9677) .. (3.7694,-7.0907) (4.5866,-6.3526) -- (4.5866,-6.5635) (4.692,-6.4581) -- (4.4811,-6.4581);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-6.8535) -- (8.5932,-6.8535) (8.1978,-6.8535) -- (7.3807,-6.8535) (8.5932,-7.3016) -- (8.5932,-6.4054) (8.1978,-7.3016) .. controls (8.3208,-7.0028) and (8.3208,-6.7041) .. (8.1978,-6.4054) (8.9359,-7.2225) -- (8.725,-7.2225) (8.8304,-7.3279) -- (8.8304,-7.1171);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-7.9078) -- (12.6526,-7.0116) (12.6526,-6.6162) -- (12.6526,-5.7991) (12.2044,-7.0116) -- (13.1007,-7.0116) (12.2044,-6.6162) .. controls (12.5032,-6.7392) and (12.8019,-6.7392) .. (13.1007,-6.6162) (12.2835,-7.3543) -- (12.2835,-7.1434) (12.1781,-7.2489) -- (12.389,-7.2489);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-10.2802) -- (-0.6326,-10.2802) .. controls (-0.6326,-9.8057) and (-0.3163,-9.8057) .. (-0.3163,-10.2802) .. controls (-0.3163,-9.8057) and (0,-9.8057) .. (0,-10.2802) .. controls (0,-9.8057) and (0.3163,-9.8057) .. (0.3163,-10.2802) .. controls (0.3163,-9.8057) and (0.6326,-9.8057) .. (0.6326,-10.2802) -- (1.0544,-10.2802);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-9.2258) -- (4.2175,-9.6476) .. controls (4.692,-9.6476) and (4.692,-9.9639) .. (4.2175,-9.9639) .. controls (4.692,-9.9639) and (4.692,-10.2802) .. (4.2175,-10.2802) .. controls (4.692,-10.2802) and (4.692,-10.5965) .. (4.2175,-10.5965) .. controls (4.692,-10.5965) and (4.692,-10.9128) .. (4.2175,-10.9128) -- (4.2175,-11.3346);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-10.2802) -- (9.0677,-10.2802) .. controls (9.0677,-10.7547) and (8.7513,-10.7547) .. (8.7513,-10.2802) .. controls (8.7513,-10.7547) and (8.435,-10.7547) .. (8.435,-10.2802) .. controls (8.435,-10.7547) and (8.1187,-10.7547) .. (8.1187,-10.2802) .. controls (8.1187,-10.7547) and (7.8024,-10.7547) .. (7.8024,-10.2802) -- (7.3807,-10.2802);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-11.3346) -- (12.6526,-10.9128) .. controls (12.1781,-10.9128) and (12.1781,-10.5965) .. (12.6526,-10.5965) .. controls (12.1781,-10.5965) and (12.1781,-10.2802) .. (12.6526,-10.2802) .. controls (12.1781,-10.2802) and (12.1781,-9.9639) .. (12.6526,-9.9639) .. controls (12.1781,-9.9639) and (12.1781,-9.6476) .. (12.6526,-9.6476) -- (12.6526,-9.2258);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-13.7069) -- (-0.5272,-13.7069) (0.5272,-13.7069) -- (1.0544,-13.7069);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-13.4697) -- (0.5272,-13.4697) -- (0.5272,-13.9442) -- (-0.5272,-13.9442) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.5535,-14.2868) -- (0.6063,-13.1007);
\draw[draw=dcColor0, line width=1.5pt] (0.4578,-13.1405) -- (0.6063,-13.1007) -- (0.5716,-13.2504);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-12.6526) -- (4.2175,-13.1797) (4.2175,-14.2341) -- (4.2175,-14.7613);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4548,-13.1797) -- (4.4548,-14.2341) -- (3.9803,-14.2341) -- (3.9803,-13.1797) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.6376,-13.1534) -- (4.8238,-14.3132);
\draw[draw=dcColor0, line width=1.5pt] (4.7839,-14.1648) -- (4.8238,-14.3132) -- (4.674,-14.2785);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-13.7069) -- (8.9622,-13.7069) (7.9078,-13.7069) -- (7.3807,-13.7069);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-13.9442) -- (7.9078,-13.9442) -- (7.9078,-13.4697) -- (8.9622,-13.4697) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9886,-13.127) -- (7.8288,-14.3132);
\draw[draw=dcColor0, line width=1.5pt] (7.9772,-14.2733) -- (7.8288,-14.3132) -- (7.8634,-14.1635);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-14.7613) -- (12.6526,-14.2341) (12.6526,-13.1797) -- (12.6526,-12.6526);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.4153,-14.2341) -- (12.4153,-13.1797) -- (12.8898,-13.1797) -- (12.8898,-14.2341) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (13.2325,-14.2605) -- (12.0463,-13.1007);
\draw[draw=dcColor0, line width=1.5pt] (12.0862,-13.2491) -- (12.0463,-13.1007) -- (12.196,-13.1353);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-17.1337) -- (-0.5272,-17.1337) (0.5272,-17.1337) -- (1.0544,-17.1337);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-16.8964) -- (0.5272,-16.8964) -- (0.5272,-17.3709) -- (-0.5272,-17.3709) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0,-16.0793) -- (0,-16.8437);
\draw[draw=dcColor0, line width=1.5pt] (0.0791,-16.7119) -- (0,-16.8437) -- (-0.0791,-16.7119);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-16.0793) -- (4.2175,-16.6065) (4.2175,-17.6609) -- (4.2175,-18.188);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4548,-16.6065) -- (4.4548,-17.6609) -- (3.9803,-17.6609) -- (3.9803,-16.6065) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-17.1337) -- (4.5075,-17.1337);
\draw[draw=dcColor0, line width=1.5pt] (4.6393,-17.2127) -- (4.5075,-17.1337) -- (4.6393,-17.0546);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-17.1337) -- (8.9622,-17.1337) (7.9078,-17.1337) -- (7.3807,-17.1337);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-17.3709) -- (7.9078,-17.3709) -- (7.9078,-16.8964) -- (8.9622,-16.8964) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.435,-18.188) -- (8.435,-17.4236);
\draw[draw=dcColor0, line width=1.5pt] (8.356,-17.5554) -- (8.435,-17.4236) -- (8.5141,-17.5554);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-18.188) -- (12.6526,-17.6609) (12.6526,-16.6065) -- (12.6526,-16.0793);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.4153,-17.6609) -- (12.4153,-16.6065) -- (12.8898,-16.6065) -- (12.8898,-17.6609) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-17.1337) -- (12.3626,-17.1337);
\draw[draw=dcColor0, line width=1.5pt] (12.2308,-17.0546) -- (12.3626,-17.1337) -- (12.2308,-17.2127);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-20.5604) -- (-0.5272,-20.5604) (0.5272,-20.5604) -- (1.0544,-20.5604);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-20.5604) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.29,-20.4286) -- (-0.29,-20.6922) (-0.4218,-20.5604) -- (-0.1582,-20.5604) (0.1845,-20.5604) -- (0.3954,-20.5604);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-19.506) -- (4.2175,-20.0332) (4.2175,-21.0876) -- (4.2175,-21.6148);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-20.5604) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (4.3493,-20.2704) -- (4.0857,-20.2704) (4.2175,-20.1386) -- (4.2175,-20.4022) (4.2175,-20.7449) -- (4.2175,-20.9558);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-20.5604) -- (8.9622,-20.5604) (7.9078,-20.5604) -- (7.3807,-20.5604);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-20.5604) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.725,-20.6922) -- (8.725,-20.4286) (8.8568,-20.5604) -- (8.5932,-20.5604) (8.2505,-20.5604) -- (8.0396,-20.5604);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-21.6148) -- (12.6526,-21.0876) (12.6526,-20.0332) -- (12.6526,-19.506);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-20.5604) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (12.5208,-20.8504) -- (12.7844,-20.8504) (12.6526,-20.9822) -- (12.6526,-20.7186) (12.6526,-20.3759) -- (12.6526,-20.165);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-23.9871) -- (-0.5272,-23.9871) (0.5272,-23.9871) -- (1.0544,-23.9871);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-23.9871) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.3163,-23.9871) -- (0.3163,-23.9871);
\draw[draw=dcColor0, line width=1.5pt] (0.1845,-23.9081) -- (0.3163,-23.9871) -- (0.1845,-24.0662);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-22.9328) -- (4.2175,-23.4599) (4.2175,-24.5143) -- (4.2175,-25.0415);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-23.9871) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-23.6708) -- (4.2175,-24.3034);
\draw[draw=dcColor0, line width=1.5pt] (4.2966,-24.1716) -- (4.2175,-24.3034) -- (4.1384,-24.1716);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-23.9871) -- (8.9622,-23.9871) (7.9078,-23.9871) -- (7.3807,-23.9871);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-23.9871) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.7513,-23.9871) -- (8.1187,-23.9871);
\draw[draw=dcColor0, line width=1.5pt] (8.2505,-24.0662) -- (8.1187,-23.9871) -- (8.2505,-23.9081);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-25.0415) -- (12.6526,-24.5143) (12.6526,-23.4599) -- (12.6526,-22.9328);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-23.9871) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-24.3034) -- (12.6526,-23.6708);
\draw[draw=dcColor0, line width=1.5pt] (12.5735,-23.8026) -- (12.6526,-23.6708) -- (12.7316,-23.8026);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-27.4139) -- (-0.3163,-27.4139) (0.3163,-27.4139) -- (1.0544,-27.4139) (-0.3163,-26.913) -- (-0.3163,-27.9147) (-0.1054,-27.1503) -- (-0.1054,-27.6775) (0.1054,-26.913) -- (0.1054,-27.9147) (0.3163,-27.1503) -- (0.3163,-27.6775);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-26.3595) -- (4.2175,-27.0976) (4.2175,-27.7302) -- (4.2175,-28.4682) (4.7183,-27.0976) -- (3.7167,-27.0976) (4.4811,-27.3084) -- (3.9539,-27.3084) (4.7183,-27.5193) -- (3.7167,-27.5193) (4.4811,-27.7302) -- (3.9539,-27.7302);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-27.4139) -- (8.7513,-27.4139) (8.1187,-27.4139) -- (7.3807,-27.4139) (8.7513,-27.9147) -- (8.7513,-26.913) (8.5405,-27.6775) -- (8.5405,-27.1503) (8.3296,-27.9147) -- (8.3296,-26.913) (8.1187,-27.6775) -- (8.1187,-27.1503);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-28.4682) -- (12.6526,-27.7302) (12.6526,-27.0976) -- (12.6526,-26.3595) (12.1517,-27.7302) -- (13.1534,-27.7302) (12.389,-27.5193) -- (12.9161,-27.5193) (12.1517,-27.3084) -- (13.1534,-27.3084) (12.389,-27.0976) -- (12.9161,-27.0976);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-30.8406) -- (-0.5272,-30.8406) (0.5272,-30.8406) -- (1.0544,-30.8406);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5799,-30.8406) -- (0,-30.2607) -- (0.5799,-30.8406) -- (0,-31.4205) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.29,-30.7088) -- (-0.29,-30.9724) (-0.4218,-30.8406) -- (-0.1582,-30.8406) (0.1845,-30.8406) -- (0.3954,-30.8406);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-29.7862) -- (4.2175,-30.3134) (4.2175,-31.3678) -- (4.2175,-31.895);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-30.2607) -- (4.7974,-30.8406) -- (4.2175,-31.4205) -- (3.6376,-30.8406) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.3493,-30.5506) -- (4.0857,-30.5506) (4.2175,-30.4188) -- (4.2175,-30.6824) (4.2175,-31.0251) -- (4.2175,-31.236);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-30.8406) -- (8.9622,-30.8406) (7.9078,-30.8406) -- (7.3807,-30.8406);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0149,-30.8406) -- (8.435,-31.4205) -- (7.8551,-30.8406) -- (8.435,-30.2607) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.725,-30.9724) -- (8.725,-30.7088) (8.8568,-30.8406) -- (8.5932,-30.8406) (8.2505,-30.8406) -- (8.0396,-30.8406);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-31.895) -- (12.6526,-31.3678) (12.6526,-30.3134) -- (12.6526,-29.7862);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-31.4205) -- (12.0726,-30.8406) -- (12.6526,-30.2607) -- (13.2325,-30.8406) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.5208,-31.1306) -- (12.7844,-31.1306) (12.6526,-31.2623) -- (12.6526,-30.9988) (12.6526,-30.6561) -- (12.6526,-30.4452);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-34.2673) -- (-0.5272,-34.2673) (0.5272,-34.2673) -- (1.0544,-34.2673);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5799,-34.2673) -- (0,-33.6874) -- (0.5799,-34.2673) -- (0,-34.8472) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.3163,-34.2673) -- (0.3163,-34.2673);
\draw[draw=dcColor0, line width=1.5pt] (0.1845,-34.1883) -- (0.3163,-34.2673) -- (0.1845,-34.3464);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-33.213) -- (4.2175,-33.7401) (4.2175,-34.7945) -- (4.2175,-35.3217);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-33.6874) -- (4.7974,-34.2673) -- (4.2175,-34.8472) -- (3.6376,-34.2673) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-33.951) -- (4.2175,-34.5836);
\draw[draw=dcColor0, line width=1.5pt] (4.2966,-34.4518) -- (4.2175,-34.5836) -- (4.1384,-34.4518);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-34.2673) -- (8.9622,-34.2673) (7.9078,-34.2673) -- (7.3807,-34.2673);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0149,-34.2673) -- (8.435,-34.8472) -- (7.8551,-34.2673) -- (8.435,-33.6874) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.7513,-34.2673) -- (8.1187,-34.2673);
\draw[draw=dcColor0, line width=1.5pt] (8.2505,-34.3464) -- (8.1187,-34.2673) -- (8.2505,-34.1883);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-35.3217) -- (12.6526,-34.7945) (12.6526,-33.7401) -- (12.6526,-33.213);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-34.8472) -- (12.0726,-34.2673) -- (12.6526,-33.6874) -- (13.2325,-34.2673) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-34.5836) -- (12.6526,-33.951);
\draw[draw=dcColor0, line width=1.5pt] (12.5735,-34.0828) -- (12.6526,-33.951) -- (12.7316,-34.0828);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-37.325) -- (0.3163,-37.6941) -- (-0.369,-38.0631) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-37.6941) -- (-0.369,-37.6941) (0.3163,-37.6941) -- (1.0544,-37.6941);
\draw[draw=dcColor0, line width=1.5pt] (0.3163,-37.325) -- (0.3163,-38.0631);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5866,-37.325) -- (4.2175,-38.0104) -- (3.8485,-37.325) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-36.6397) -- (4.2175,-37.325) (4.2175,-38.0104) -- (4.2175,-38.7484);
\draw[draw=dcColor0, line width=1.5pt] (4.5866,-38.0104) -- (3.8485,-38.0104);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8041,-38.0631) -- (8.1187,-37.6941) -- (8.8041,-37.325) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-37.6941) -- (8.8041,-37.6941) (8.1187,-37.6941) -- (7.3807,-37.6941);
\draw[draw=dcColor0, line width=1.5pt] (8.1187,-38.0631) -- (8.1187,-37.325);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.2835,-38.0631) -- (12.6526,-37.3778) -- (13.0216,-38.0631) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-38.7484) -- (12.6526,-38.0631) (12.6526,-37.3778) -- (12.6526,-36.6397);
\draw[draw=dcColor0, line width=1.5pt] (12.2835,-37.3778) -- (13.0216,-37.3778);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-40.7518) -- (0.3163,-41.1208) -- (-0.369,-41.4898) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-41.1208) -- (-0.369,-41.1208) (0.3163,-41.1208) -- (1.0544,-41.1208);
\draw[draw=dcColor0, line width=1.5pt] (0.3163,-40.7518) -- (0.3163,-41.4898);
\draw[draw=dcColor0, line width=1.5pt] (0.0264,-40.5672) -- (0.3427,-40.2509) (0.29,-40.6727) -- (0.6063,-40.3564);
\draw[draw=dcColor0, line width=1.5pt] (0.1936,-40.2882) -- (0.3427,-40.2509) -- (0.3054,-40.4);
\draw[draw=dcColor0, line width=1.5pt] (0.4572,-40.3936) -- (0.6063,-40.3564) -- (0.569,-40.5055);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5866,-40.7518) -- (4.2175,-41.4371) -- (3.8485,-40.7518) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-40.0664) -- (4.2175,-40.7518) (4.2175,-41.4371) -- (4.2175,-42.1752);
\draw[draw=dcColor0, line width=1.5pt] (4.5866,-41.4371) -- (3.8485,-41.4371);
\draw[draw=dcColor0, line width=1.5pt] (4.7711,-41.1472) -- (5.0874,-41.4635) (4.6656,-41.4108) -- (4.9819,-41.7271);
\draw[draw=dcColor0, line width=1.5pt] (5.0501,-41.3144) -- (5.0874,-41.4635) -- (4.9383,-41.4262);
\draw[draw=dcColor0, line width=1.5pt] (4.9447,-41.578) -- (4.9819,-41.7271) -- (4.8328,-41.6898);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8041,-41.4898) -- (8.1187,-41.1208) -- (8.8041,-40.7518) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-41.1208) -- (8.8041,-41.1208) (8.1187,-41.1208) -- (7.3807,-41.1208);
\draw[draw=dcColor0, line width=1.5pt] (8.1187,-41.4898) -- (8.1187,-40.7518);
\draw[draw=dcColor0, line width=1.5pt] (8.4087,-41.6743) -- (8.0924,-41.9907) (8.1451,-41.5689) -- (7.8288,-41.8852);
\draw[draw=dcColor0, line width=1.5pt] (8.2415,-41.9534) -- (8.0924,-41.9907) -- (8.1296,-41.8415);
\draw[draw=dcColor0, line width=1.5pt] (7.9779,-41.8479) -- (7.8288,-41.8852) -- (7.866,-41.7361);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.2835,-41.4898) -- (12.6526,-40.8045) -- (13.0216,-41.4898) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-42.1752) -- (12.6526,-41.4898) (12.6526,-40.8045) -- (12.6526,-40.0664);
\draw[draw=dcColor0, line width=1.5pt] (12.2835,-40.8045) -- (13.0216,-40.8045);
\draw[draw=dcColor0, line width=1.5pt] (12.099,-41.0944) -- (11.7827,-40.7781) (12.2044,-40.8308) -- (11.8881,-40.5145);
\draw[draw=dcColor0, line width=1.5pt] (11.82,-40.9272) -- (11.7827,-40.7781) -- (11.9318,-40.8154);
\draw[draw=dcColor0, line width=1.5pt] (11.9254,-40.6636) -- (11.8881,-40.5145) -- (12.0372,-40.5518);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-44.1785) -- (0.3163,-44.5475) -- (-0.369,-44.9166) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-44.5475) -- (-0.369,-44.5475) (0.3163,-44.5475) -- (1.0544,-44.5475);
\draw[draw=dcColor0, line width=1.5pt] (0.1582,-44.0731) -- (0.3163,-44.0731) -- (0.3163,-44.9166) -- (0.4745,-44.9166);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5866,-44.1785) -- (4.2175,-44.8638) -- (3.8485,-44.1785) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-43.4932) -- (4.2175,-44.1785) (4.2175,-44.8638) -- (4.2175,-45.6019);
\draw[draw=dcColor0, line width=1.5pt] (4.692,-44.7057) -- (4.692,-44.8638) -- (3.8485,-44.8638) -- (3.8485,-45.022);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8041,-44.9166) -- (8.1187,-44.5475) -- (8.8041,-44.1785) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-44.5475) -- (8.8041,-44.5475) (8.1187,-44.5475) -- (7.3807,-44.5475);
\draw[draw=dcColor0, line width=1.5pt] (8.2769,-45.022) -- (8.1187,-45.022) -- (8.1187,-44.1785) -- (7.9606,-44.1785);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.2835,-44.9166) -- (12.6526,-44.2312) -- (13.0216,-44.9166) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-45.6019) -- (12.6526,-44.9166) (12.6526,-44.2312) -- (12.6526,-43.4932);
\draw[draw=dcColor0, line width=1.5pt] (12.1781,-44.3894) -- (12.1781,-44.2312) -- (13.0216,-44.2312) -- (13.0216,-44.0731);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-47.9743) -- (-0.4481,-47.9743) (0.4481,-47.9743) -- (1.0544,-47.9743) (-0.3954,-47.9743) -- (0.3427,-47.4734);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-47.9743) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-47.9743) circle (1.875pt);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-46.9199) -- (4.2175,-47.5262) (4.2175,-48.4224) -- (4.2175,-49.0286) (4.2175,-47.5789) -- (4.7183,-48.3169);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-47.5525) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-48.396) circle (1.875pt);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-47.9743) -- (8.8831,-47.9743) (7.9869,-47.9743) -- (7.3807,-47.9743) (8.8304,-47.9743) -- (8.0924,-48.4751);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-47.9743) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-47.9743) circle (1.875pt);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-49.0286) -- (12.6526,-48.4224) (12.6526,-47.5262) -- (12.6526,-46.9199) (12.6526,-48.3697) -- (12.1517,-47.6316);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-48.396) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-47.5525) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-51.401) -- (-0.4481,-51.401) (0.4481,-51.401) -- (1.0544,-51.401) (-0.3954,-51.401) -- (0.3427,-51.401);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-51.401) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-51.401) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-50.3466) -- (4.2175,-50.9529) (4.2175,-51.8491) -- (4.2175,-52.4554) (4.2175,-51.0056) -- (4.2175,-51.7437);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-50.9792) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-51.8227) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-51.401) -- (8.8831,-51.401) (7.9869,-51.401) -- (7.3807,-51.401) (8.8304,-51.401) -- (8.0924,-51.401);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-51.401) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-51.401) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-52.4554) -- (12.6526,-51.8491) (12.6526,-50.9529) -- (12.6526,-50.3466) (12.6526,-51.7964) -- (12.6526,-51.0583);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-51.8227) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-50.9792) circle (1.875pt);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (0,-53.7733) -- (0,-54.8277) (-0.5008,-54.8277) -- (0.5008,-54.8277) (-0.3163,-55.0122) -- (0.3163,-55.0122) (-0.1318,-55.1968) -- (0.1318,-55.1968);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-54.8277) -- (4.2175,-54.8277) (4.2175,-54.3269) -- (4.2175,-55.3286) (4.033,-54.5114) -- (4.033,-55.144) (3.8485,-54.6959) -- (3.8485,-54.9595);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (8.435,-55.8821) -- (8.435,-54.8277) (8.9359,-54.8277) -- (7.9342,-54.8277) (8.7513,-54.6432) -- (8.1187,-54.6432) (8.5668,-54.4587) -- (8.3032,-54.4587);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-54.8277) -- (12.6526,-54.8277) (12.6526,-55.3286) -- (12.6526,-54.3269) (12.8371,-55.144) -- (12.8371,-54.5114) (13.0216,-54.9595) -- (13.0216,-54.6959);
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-58.2545) -- (-0.5272,-58.2545) (0.5272,-58.2545) -- (1.0544,-58.2545);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-58.2545) circle (15pt);
\path (-0.1929,-57.8432) -- (0.1929,-57.8432) -- (-0.1929,-58.5813) -- (0.1929,-58.5813) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-58.2808) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-57.2001) -- (4.2175,-57.7273) (4.2175,-58.7817) -- (4.2175,-59.3088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-58.2545) circle (15pt);
\path (4.6288,-58.0616) -- (4.6288,-58.4473) -- (3.8907,-58.0616) -- (3.8907,-58.4473) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.1912,-58.2545) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-58.2545) -- (8.9622,-58.2545) (7.9078,-58.2545) -- (7.3807,-58.2545);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-58.2545) circle (15pt);
\path (8.6279,-58.6657) -- (8.2422,-58.6657) -- (8.6279,-57.9276) -- (8.2422,-57.9276) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-58.2281) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-59.3088) -- (12.6526,-58.7817) (12.6526,-57.7273) -- (12.6526,-57.2001);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-58.2545) circle (15pt);
\path (12.2413,-58.4473) -- (12.2413,-58.0616) -- (12.9794,-58.4473) -- (12.9794,-58.0616) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6789,-58.2545) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-61.6812) -- (-0.5272,-61.6812) (0.5272,-61.6812) -- (1.0544,-61.6812);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-61.6812) circle (15pt);
\path (-0.1713,-61.2699) -- (0.1713,-61.2699) -- (-0.1713,-62.008) -- (0.1713,-62.008) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-61.7076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-60.6268) -- (4.2175,-61.154) (4.2175,-62.2084) -- (4.2175,-62.7356);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-61.6812) circle (15pt);
\path (4.6288,-61.5099) -- (4.6288,-61.8525) -- (3.8907,-61.5099) -- (3.8907,-61.8525) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.1912,-61.6812) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-61.6812) -- (8.9622,-61.6812) (7.9078,-61.6812) -- (7.3807,-61.6812);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-61.6812) circle (15pt);
\path (8.6064,-62.0924) -- (8.2637,-62.0924) -- (8.6064,-61.3544) -- (8.2637,-61.3544) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-61.6548) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-62.7356) -- (12.6526,-62.2084) (12.6526,-61.154) -- (12.6526,-60.6268);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-61.6812) circle (15pt);
\path (12.2413,-61.8525) -- (12.2413,-61.5099) -- (12.9794,-61.8525) -- (12.9794,-61.5099) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6789,-61.6812) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-64.0535) -- (-0.5272,-64.0535) -- (-0.5272,-64.4753) .. controls (-0.0527,-64.4753) and (-0.0527,-64.7916) .. (-0.5272,-64.7916) .. controls (-0.0527,-64.7916) and (-0.0527,-65.1079) .. (-0.5272,-65.1079) .. controls (-0.0527,-65.1079) and (-0.0527,-65.4242) .. (-0.5272,-65.4242) .. controls (-0.0527,-65.4242) and (-0.0527,-65.7406) .. (-0.5272,-65.7406) -- (-0.5272,-66.1623) -- (-1.0544,-66.1623) (1.0544,-64.0535) -- (0.5272,-64.0535) -- (0.5272,-64.4753) .. controls (0.0527,-64.4753) and (0.0527,-64.7916) .. (0.5272,-64.7916) .. controls (0.0527,-64.7916) and (0.0527,-65.1079) .. (0.5272,-65.1079) .. controls (0.0527,-65.1079) and (0.0527,-65.4242) .. (0.5272,-65.4242) .. controls (0.0527,-65.4242) and (0.0527,-65.7406) .. (0.5272,-65.7406) -- (0.5272,-66.1623) -- (1.0544,-66.1623);
\draw[draw=dcColor0, line width=1.5pt] (-0.0791,-64.4489) -- (-0.0791,-65.7669) (0.0791,-64.4489) -- (0.0791,-65.7669);
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-64.0535) -- (5.2719,-64.5807) -- (4.8501,-64.5807) .. controls (4.8501,-65.0552) and (4.5338,-65.0552) .. (4.5338,-64.5807) .. controls (4.5338,-65.0552) and (4.2175,-65.0552) .. (4.2175,-64.5807) .. controls (4.2175,-65.0552) and (3.9012,-65.0552) .. (3.9012,-64.5807) .. controls (3.9012,-65.0552) and (3.5849,-65.0552) .. (3.5849,-64.5807) -- (3.1631,-64.5807) -- (3.1631,-64.0535) (5.2719,-66.1623) -- (5.2719,-65.6351) -- (4.8501,-65.6351) .. controls (4.8501,-65.1606) and (4.5338,-65.1606) .. (4.5338,-65.6351) .. controls (4.5338,-65.1606) and (4.2175,-65.1606) .. (4.2175,-65.6351) .. controls (4.2175,-65.1606) and (3.9012,-65.1606) .. (3.9012,-65.6351) .. controls (3.9012,-65.1606) and (3.5849,-65.1606) .. (3.5849,-65.6351) -- (3.1631,-65.6351) -- (3.1631,-66.1623);
\draw[draw=dcColor0, line width=1.5pt] (4.8765,-65.0289) -- (3.5585,-65.0289) (4.8765,-65.187) -- (3.5585,-65.187);
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-66.1623) -- (8.9622,-66.1623) -- (8.9622,-65.7406) .. controls (8.4878,-65.7406) and (8.4878,-65.4242) .. (8.9622,-65.4242) .. controls (8.4878,-65.4242) and (8.4878,-65.1079) .. (8.9622,-65.1079) .. controls (8.4878,-65.1079) and (8.4878,-64.7916) .. (8.9622,-64.7916) .. controls (8.4878,-64.7916) and (8.4878,-64.4753) .. (8.9622,-64.4753) -- (8.9622,-64.0535) -- (9.4894,-64.0535) (7.3807,-66.1623) -- (7.9078,-66.1623) -- (7.9078,-65.7406) .. controls (8.3823,-65.7406) and (8.3823,-65.4242) .. (7.9078,-65.4242) .. controls (8.3823,-65.4242) and (8.3823,-65.1079) .. (7.9078,-65.1079) .. controls (8.3823,-65.1079) and (8.3823,-64.7916) .. (7.9078,-64.7916) .. controls (8.3823,-64.7916) and (8.3823,-64.4753) .. (7.9078,-64.4753) -- (7.9078,-64.0535) -- (7.3807,-64.0535);
\draw[draw=dcColor0, line width=1.5pt] (8.5141,-65.7669) -- (8.5141,-64.4489) (8.356,-65.7669) -- (8.356,-64.4489);
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-66.1623) -- (11.5982,-65.6351) -- (12.0199,-65.6351) .. controls (12.0199,-65.1606) and (12.3362,-65.1606) .. (12.3362,-65.6351) .. controls (12.3362,-65.1606) and (12.6526,-65.1606) .. (12.6526,-65.6351) .. controls (12.6526,-65.1606) and (12.9689,-65.1606) .. (12.9689,-65.6351) .. controls (12.9689,-65.1606) and (13.2852,-65.1606) .. (13.2852,-65.6351) -- (13.7069,-65.6351) -- (13.7069,-66.1623) (11.5982,-64.0535) -- (11.5982,-64.5807) -- (12.0199,-64.5807) .. controls (12.0199,-65.0552) and (12.3362,-65.0552) .. (12.3362,-64.5807) .. controls (12.3362,-65.0552) and (12.6526,-65.0552) .. (12.6526,-64.5807) .. controls (12.6526,-65.0552) and (12.9689,-65.0552) .. (12.9689,-64.5807) .. controls (12.9689,-65.0552) and (13.2852,-65.0552) .. (13.2852,-64.5807) -- (13.7069,-64.5807) -- (13.7069,-64.0535);
\draw[draw=dcColor0, line width=1.5pt] (11.9936,-65.187) -- (13.3115,-65.187) (11.9936,-65.0289) -- (13.3115,-65.0289);
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-68.5347) -- (-0.5272,-68.5347) (0.5272,-68.5347) -- (1.0544,-68.5347);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-68.0075) -- (0.6326,-68.0075) -- (0.6326,-69.0619) -- (-0.6326,-69.0619) -- cycle;
\path (-0.5554,-68.3644) -- (0.5554,-68.3644) -- (-0.5554,-68.6411) -- (0.5554,-68.6411) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-68.5347) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-67.4803) -- (4.2175,-68.0075) (4.2175,-69.0619) -- (4.2175,-69.589);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-67.902) -- (4.7447,-69.1673) -- (3.6903,-69.1673) -- (3.6903,-67.902) -- cycle;
\path (4.3878,-67.9793) -- (4.3878,-69.0901) -- (4.1111,-67.9793) -- (4.1111,-69.0901) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.2175,-68.5347) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-68.5347) -- (8.9622,-68.5347) (7.9078,-68.5347) -- (7.3807,-68.5347);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0677,-69.0619) -- (7.8024,-69.0619) -- (7.8024,-68.0075) -- (9.0677,-68.0075) -- cycle;
\path (8.9904,-68.705) -- (7.8796,-68.705) -- (8.9904,-68.4282) -- (7.8796,-68.4282) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-68.5347) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-69.589) -- (12.6526,-69.0619) (12.6526,-68.0075) -- (12.6526,-67.4803);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.1254,-69.1673) -- (12.1254,-67.902) -- (13.1797,-67.902) -- (13.1797,-69.1673) -- cycle;
\path (12.4822,-69.0901) -- (12.4822,-67.9793) -- (12.759,-69.0901) -- (12.759,-67.9793) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6526,-68.5347) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-71.9614) -- (-0.5272,-71.9614) (0.5272,-71.9614) -- (1.0544,-71.9614);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-71.7242) -- (0.5272,-71.7242) -- (0.5272,-72.1986) -- (-0.5272,-72.1986) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.5272,-72.5677) -- (0.5272,-71.3551) -- (0.7908,-71.3551);
\path (0.6485,-71.4789) -- (0.8368,-71.4789) -- (0.6485,-71.8479) -- (0.8368,-71.8479) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0.7381,-71.6978) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-70.907) -- (4.2175,-71.4342) (4.2175,-72.4886) -- (4.2175,-73.0158);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4548,-71.4342) -- (4.4548,-72.4886) -- (3.9803,-72.4886) -- (3.9803,-71.4342) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.6112,-71.4342) -- (4.8238,-72.4886) -- (4.8238,-72.7522);
\path (4.7,-72.6099) -- (4.7,-72.7982) -- (4.331,-72.6099) -- (4.331,-72.7982) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.4811,-72.6995) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-71.9614) -- (8.9622,-71.9614) (7.9078,-71.9614) -- (7.3807,-71.9614);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-72.1986) -- (7.9078,-72.1986) -- (7.9078,-71.7242) -- (8.9622,-71.7242) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-71.3551) -- (7.9078,-72.5677) -- (7.6443,-72.5677);
\path (7.7866,-72.4439) -- (7.5983,-72.4439) -- (7.7866,-72.0749) -- (7.5983,-72.0749) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.697,-72.225) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-73.0158) -- (12.6526,-72.4886) (12.6526,-71.4342) -- (12.6526,-70.907);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.4153,-72.4886) -- (12.4153,-71.4342) -- (12.8898,-71.4342) -- (12.8898,-72.4886) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (13.2588,-72.4886) -- (12.0463,-71.4342) -- (12.0463,-71.1706);
\path (12.1701,-71.3129) -- (12.1701,-71.1246) -- (12.5391,-71.3129) -- (12.5391,-71.1246) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.389,-71.2233) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-75.3881) -- (-0.5272,-75.3881) (0.5272,-75.3881) -- (1.0544,-75.3881);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-75.1509) -- (0.5272,-75.1509) -- (0.5272,-75.6254) -- (-0.5272,-75.6254) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.0264,-74.8346) -- (0.3427,-74.5183) (0.29,-74.94) -- (0.6063,-74.6237);
\draw[draw=dcColor0, line width=1.5pt] (0.1755,-74.7973) -- (0.0264,-74.8346) -- (0.0636,-74.6855);
\draw[draw=dcColor0, line width=1.5pt] (0.4391,-74.9027) -- (0.29,-74.94) -- (0.3272,-74.7909);
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-74.3337) -- (4.2175,-74.8609) (4.2175,-75.9153) -- (4.2175,-76.4425);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4548,-74.8609) -- (4.4548,-75.9153) -- (3.9803,-75.9153) -- (3.9803,-74.8609) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.7711,-75.4145) -- (5.0874,-75.7308) (4.6656,-75.6781) -- (4.9819,-75.9944);
\draw[draw=dcColor0, line width=1.5pt] (4.8083,-75.5636) -- (4.7711,-75.4145) -- (4.9202,-75.4518);
\draw[draw=dcColor0, line width=1.5pt] (4.7029,-75.8272) -- (4.6656,-75.6781) -- (4.8147,-75.7154);
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-75.3881) -- (8.9622,-75.3881) (7.9078,-75.3881) -- (7.3807,-75.3881);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-75.6254) -- (7.9078,-75.6254) -- (7.9078,-75.1509) -- (8.9622,-75.1509) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.4087,-75.9417) -- (8.0924,-76.258) (8.1451,-75.8362) -- (7.8288,-76.1526);
\draw[draw=dcColor0, line width=1.5pt] (8.2596,-75.979) -- (8.4087,-75.9417) -- (8.3714,-76.0908);
\draw[draw=dcColor0, line width=1.5pt] (7.996,-75.8735) -- (8.1451,-75.8362) -- (8.1078,-75.9854);
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-76.4425) -- (12.6526,-75.9153) (12.6526,-74.8609) -- (12.6526,-74.3337);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.4153,-75.9153) -- (12.4153,-74.8609) -- (12.8898,-74.8609) -- (12.8898,-75.9153) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.099,-75.3618) -- (11.7827,-75.0455) (12.2044,-75.0982) -- (11.8881,-74.7819);
\draw[draw=dcColor0, line width=1.5pt] (12.0617,-75.2127) -- (12.099,-75.3618) -- (11.9499,-75.3245);
\draw[draw=dcColor0, line width=1.5pt] (12.1672,-74.9491) -- (12.2044,-75.0982) -- (12.0553,-75.0609);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-78.8149) -- (-0.1582,-78.8149) (0.1582,-78.8149) -- (1.0544,-78.8149) (-0.1582,-78.3667) -- (-0.1582,-79.263) (0.1582,-78.3667) -- (0.1582,-79.263);
\draw[draw=dcColor0, line width=1.5pt] (-0.5535,-79.3948) -- (0.6063,-78.2086);
\draw[draw=dcColor0, line width=1.5pt] (0.4578,-78.2485) -- (0.6063,-78.2086) -- (0.5716,-78.3583);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-77.7605) -- (4.2175,-78.6567) (4.2175,-78.973) -- (4.2175,-79.8692) (4.6656,-78.6567) -- (3.7694,-78.6567) (4.6656,-78.973) -- (3.7694,-78.973);
\draw[draw=dcColor0, line width=1.5pt] (3.6376,-78.2613) -- (4.8238,-79.4211);
\draw[draw=dcColor0, line width=1.5pt] (4.7839,-79.2727) -- (4.8238,-79.4211) -- (4.674,-79.3865);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-78.8149) -- (8.5932,-78.8149) (8.2769,-78.8149) -- (7.3807,-78.8149) (8.5932,-79.263) -- (8.5932,-78.3667) (8.2769,-79.263) -- (8.2769,-78.3667);
\draw[draw=dcColor0, line width=1.5pt] (8.9886,-78.235) -- (7.8288,-79.4211);
\draw[draw=dcColor0, line width=1.5pt] (7.9772,-79.3813) -- (7.8288,-79.4211) -- (7.8634,-79.2714);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-79.8692) -- (12.6526,-78.973) (12.6526,-78.6567) -- (12.6526,-77.7605) (12.2044,-78.973) -- (13.1007,-78.973) (12.2044,-78.6567) -- (13.1007,-78.6567);
\draw[draw=dcColor0, line width=1.5pt] (13.2325,-79.3684) -- (12.0463,-78.2086);
\draw[draw=dcColor0, line width=1.5pt] (12.0862,-78.357) -- (12.0463,-78.2086) -- (12.196,-78.2433);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-82.2416) -- (-0.6326,-82.2416) .. controls (-0.6326,-81.7671) and (-0.3163,-81.7671) .. (-0.3163,-82.2416) .. controls (-0.3163,-81.7671) and (0,-81.7671) .. (0,-82.2416) .. controls (0,-81.7671) and (0.3163,-81.7671) .. (0.3163,-82.2416) .. controls (0.3163,-81.7671) and (0.6326,-81.7671) .. (0.6326,-82.2416) -- (1.0544,-82.2416);
\draw[draw=dcColor0, line width=1.5pt] (-0.5535,-82.8215) -- (0.6063,-81.6353);
\draw[draw=dcColor0, line width=1.5pt] (0.4578,-81.6752) -- (0.6063,-81.6353) -- (0.5716,-81.7851);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-81.1872) -- (4.2175,-81.609) .. controls (4.692,-81.609) and (4.692,-81.9253) .. (4.2175,-81.9253) .. controls (4.692,-81.9253) and (4.692,-82.2416) .. (4.2175,-82.2416) .. controls (4.692,-82.2416) and (4.692,-82.5579) .. (4.2175,-82.5579) .. controls (4.692,-82.5579) and (4.692,-82.8742) .. (4.2175,-82.8742) -- (4.2175,-83.296);
\draw[draw=dcColor0, line width=1.5pt] (3.6376,-81.688) -- (4.8238,-82.8479);
\draw[draw=dcColor0, line width=1.5pt] (4.7839,-82.6994) -- (4.8238,-82.8479) -- (4.674,-82.8132);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-82.2416) -- (9.0677,-82.2416) .. controls (9.0677,-82.7161) and (8.7513,-82.7161) .. (8.7513,-82.2416) .. controls (8.7513,-82.7161) and (8.435,-82.7161) .. (8.435,-82.2416) .. controls (8.435,-82.7161) and (8.1187,-82.7161) .. (8.1187,-82.2416) .. controls (8.1187,-82.7161) and (7.8024,-82.7161) .. (7.8024,-82.2416) -- (7.3807,-82.2416);
\draw[draw=dcColor0, line width=1.5pt] (8.9886,-81.6617) -- (7.8288,-82.8479);
\draw[draw=dcColor0, line width=1.5pt] (7.9772,-82.808) -- (7.8288,-82.8479) -- (7.8634,-82.6981);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-83.296) -- (12.6526,-82.8742) .. controls (12.1781,-82.8742) and (12.1781,-82.5579) .. (12.6526,-82.5579) .. controls (12.1781,-82.5579) and (12.1781,-82.2416) .. (12.6526,-82.2416) .. controls (12.1781,-82.2416) and (12.1781,-81.9253) .. (12.6526,-81.9253) .. controls (12.1781,-81.9253) and (12.1781,-81.609) .. (12.6526,-81.609) -- (12.6526,-81.1872);
\draw[draw=dcColor0, line width=1.5pt] (13.2325,-82.7951) -- (12.0463,-81.6353);
\draw[draw=dcColor0, line width=1.5pt] (12.0862,-81.7838) -- (12.0463,-81.6353) -- (12.196,-81.67);
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-85.6683) -- (-0.5272,-85.6683) (0.5272,-85.6683) -- (1.0544,-85.6683);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-85.6683) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.369,-85.6683) .. controls (-0.2636,-85.2729) and (-0.1054,-85.2729) .. (0,-85.6683) .. controls (0.1054,-86.0637) and (0.2636,-86.0637) .. (0.369,-85.6683);
\path (-0.0771,-85.7851) -- (0.0771,-85.7851) -- (-0.0771,-86.1146) -- (0.0771,-86.1146) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-85.9846) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-84.6139) -- (4.2175,-85.1411) (4.2175,-86.1955) -- (4.2175,-86.7227);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-85.6683) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-85.2993) .. controls (4.6129,-85.4047) and (4.6129,-85.5629) .. (4.2175,-85.6683) .. controls (3.8221,-85.7738) and (3.8221,-85.9319) .. (4.2175,-86.0374);
\path (4.1008,-85.5912) -- (4.1008,-85.7454) -- (3.7713,-85.5912) -- (3.7713,-85.7454) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9012,-85.6683) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-85.6683) -- (8.9622,-85.6683) (7.9078,-85.6683) -- (7.3807,-85.6683);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-85.6683) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.8041,-85.6683) .. controls (8.6986,-86.0637) and (8.5405,-86.0637) .. (8.435,-85.6683) .. controls (8.3296,-85.2729) and (8.1714,-85.2729) .. (8.066,-85.6683);
\path (8.5122,-85.5516) -- (8.3579,-85.5516) -- (8.5122,-85.2221) -- (8.3579,-85.2221) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-85.352) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-86.7227) -- (12.6526,-86.1955) (12.6526,-85.1411) -- (12.6526,-84.6139);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-85.6683) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-86.0374) .. controls (12.2572,-85.9319) and (12.2572,-85.7738) .. (12.6526,-85.6683) .. controls (13.0479,-85.5629) and (13.0479,-85.4047) .. (12.6526,-85.2993);
\path (12.7693,-85.7454) -- (12.7693,-85.5912) -- (13.0988,-85.7454) -- (13.0988,-85.5912) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.9689,-85.6683) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-89.0951) -- (-0.5272,-89.0951) (0.5272,-89.0951) -- (1.0544,-89.0951);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-89.0951) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.369,-89.0951) .. controls (-0.2636,-88.6997) and (-0.1054,-88.6997) .. (0,-89.0951) .. controls (0.1054,-89.4905) and (0.2636,-89.4905) .. (0.369,-89.0951);
\path (-0.0649,-89.2118) -- (0.0649,-89.2118) -- (-0.0649,-89.5413) -- (0.0649,-89.5413) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-89.4114) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-88.0407) -- (4.2175,-88.5679) (4.2175,-89.6222) -- (4.2175,-90.1494);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-89.0951) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-88.726) .. controls (4.6129,-88.8315) and (4.6129,-88.9896) .. (4.2175,-89.0951) .. controls (3.8221,-89.2005) and (3.8221,-89.3587) .. (4.2175,-89.4641);
\path (4.1008,-89.0302) -- (4.1008,-89.1599) -- (3.7713,-89.0302) -- (3.7713,-89.1599) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9012,-89.0951) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-89.0951) -- (8.9622,-89.0951) (7.9078,-89.0951) -- (7.3807,-89.0951);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-89.0951) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.8041,-89.0951) .. controls (8.6986,-89.4905) and (8.5405,-89.4905) .. (8.435,-89.0951) .. controls (8.3296,-88.6997) and (8.1714,-88.6997) .. (8.066,-89.0951);
\path (8.4999,-88.9783) -- (8.3702,-88.9783) -- (8.4999,-88.6488) -- (8.3702,-88.6488) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-88.7787) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-90.1494) -- (12.6526,-89.6222) (12.6526,-88.5679) -- (12.6526,-88.0407);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-89.0951) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-89.4641) .. controls (12.2572,-89.3587) and (12.2572,-89.2005) .. (12.6526,-89.0951) .. controls (13.0479,-88.9896) and (13.0479,-88.8315) .. (12.6526,-88.726);
\path (12.7693,-89.1599) -- (12.7693,-89.0302) -- (13.0988,-89.1599) -- (13.0988,-89.0302) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.9689,-89.0951) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-92.5218) -- (-0.5272,-92.5218) (0.5272,-92.5218) -- (1.0544,-92.5218);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-92.5218) circle (15pt);
\path (-0.1713,-92.1105) -- (0.1713,-92.1105) -- (-0.1713,-92.8486) -- (0.1713,-92.8486) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-92.5482) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-91.4674) -- (4.2175,-91.9946) (4.2175,-93.049) -- (4.2175,-93.5762);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-92.5218) circle (15pt);
\path (4.6288,-92.3505) -- (4.6288,-92.6931) -- (3.8907,-92.3505) -- (3.8907,-92.6931) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.1912,-92.5218) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-92.5218) -- (8.9622,-92.5218) (7.9078,-92.5218) -- (7.3807,-92.5218);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-92.5218) circle (15pt);
\path (8.6064,-92.933) -- (8.2637,-92.933) -- (8.6064,-92.195) -- (8.2637,-92.195) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-92.4954) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-93.5762) -- (12.6526,-93.049) (12.6526,-91.9946) -- (12.6526,-91.4674);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-92.5218) circle (15pt);
\path (12.2413,-92.6931) -- (12.2413,-92.3505) -- (12.9794,-92.6931) -- (12.9794,-92.3505) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6789,-92.5218) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-95.9485) -- (-0.5272,-95.9485) (0.5272,-95.9485) -- (1.0544,-95.9485);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-95.9485) circle (15pt);
\path (-0.1441,-95.5373) -- (0.1441,-95.5373) -- (-0.1441,-96.2753) -- (0.1441,-96.2753) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-95.9749) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-94.8941) -- (4.2175,-95.4213) (4.2175,-96.4757) -- (4.2175,-97.0029);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-95.9485) circle (15pt);
\path (4.6288,-95.8045) -- (4.6288,-96.0926) -- (3.8907,-95.8045) -- (3.8907,-96.0926) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.1912,-95.9485) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-95.9485) -- (8.9622,-95.9485) (7.9078,-95.9485) -- (7.3807,-95.9485);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-95.9485) circle (15pt);
\path (8.5791,-96.3598) -- (8.291,-96.3598) -- (8.5791,-95.6217) -- (8.291,-95.6217) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-95.9222) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-97.0029) -- (12.6526,-96.4757) (12.6526,-95.4213) -- (12.6526,-94.8941);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-95.9485) circle (15pt);
\path (12.2413,-96.0926) -- (12.2413,-95.8045) -- (12.9794,-96.0926) -- (12.9794,-95.8045) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6789,-95.9485) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-99.3753) -- (-0.1054,-99.3753) (0.1054,-99.3753) -- (1.0544,-99.3753) (-0.1054,-98.8744) -- (-0.1054,-99.8761) (0.1054,-99.1117) -- (0.1054,-99.6389);
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-98.3209) -- (4.2175,-99.2698) (4.2175,-99.4807) -- (4.2175,-100.4296) (4.7183,-99.2698) -- (3.7167,-99.2698) (4.4811,-99.4807) -- (3.9539,-99.4807);
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-99.3753) -- (8.5405,-99.3753) (8.3296,-99.3753) -- (7.3807,-99.3753) (8.5405,-99.8761) -- (8.5405,-98.8744) (8.3296,-99.6389) -- (8.3296,-99.1117);
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-100.4296) -- (12.6526,-99.4807) (12.6526,-99.2698) -- (12.6526,-98.3209) (12.1517,-99.4807) -- (13.1534,-99.4807) (12.389,-99.2698) -- (12.9161,-99.2698);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-102.433) -- (0.3163,-102.802) -- (-0.369,-103.171) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-102.802) -- (-0.369,-102.802) (0.3163,-102.802) -- (1.0544,-102.802);
\draw[draw=dcColor0, line width=1.5pt] (0.3163,-102.433) -- (0.3163,-103.171);
\draw[draw=dcColor0, line width=1.5pt] (0.0264,-102.2484) -- (0.3427,-101.9321) (0.29,-102.3539) -- (0.6063,-102.0376);
\draw[draw=dcColor0, line width=1.5pt] (0.1755,-102.2112) -- (0.0264,-102.2484) -- (0.0636,-102.0993);
\draw[draw=dcColor0, line width=1.5pt] (0.4391,-102.3166) -- (0.29,-102.3539) -- (0.3272,-102.2048);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5866,-102.433) -- (4.2175,-103.1183) -- (3.8485,-102.433) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-101.7476) -- (4.2175,-102.433) (4.2175,-103.1183) -- (4.2175,-103.8564);
\draw[draw=dcColor0, line width=1.5pt] (4.5866,-103.1183) -- (3.8485,-103.1183);
\draw[draw=dcColor0, line width=1.5pt] (4.7711,-102.8284) -- (5.0874,-103.1447) (4.6656,-103.0919) -- (4.9819,-103.4083);
\draw[draw=dcColor0, line width=1.5pt] (4.8083,-102.9775) -- (4.7711,-102.8284) -- (4.9202,-102.8656);
\draw[draw=dcColor0, line width=1.5pt] (4.7029,-103.2411) -- (4.6656,-103.0919) -- (4.8147,-103.1292);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8041,-103.171) -- (8.1187,-102.802) -- (8.8041,-102.433) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-102.802) -- (8.8041,-102.802) (8.1187,-102.802) -- (7.3807,-102.802);
\draw[draw=dcColor0, line width=1.5pt] (8.1187,-103.171) -- (8.1187,-102.433);
\draw[draw=dcColor0, line width=1.5pt] (8.4087,-103.3555) -- (8.0924,-103.6719) (8.1451,-103.2501) -- (7.8288,-103.5664);
\draw[draw=dcColor0, line width=1.5pt] (8.2596,-103.3928) -- (8.4087,-103.3555) -- (8.3714,-103.5047);
\draw[draw=dcColor0, line width=1.5pt] (7.996,-103.2874) -- (8.1451,-103.2501) -- (8.1078,-103.3992);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.2835,-103.171) -- (12.6526,-102.4857) -- (13.0216,-103.171) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-103.8564) -- (12.6526,-103.171) (12.6526,-102.4857) -- (12.6526,-101.7476);
\draw[draw=dcColor0, line width=1.5pt] (12.2835,-102.4857) -- (13.0216,-102.4857);
\draw[draw=dcColor0, line width=1.5pt] (12.099,-102.7756) -- (11.7827,-102.4593) (12.2044,-102.512) -- (11.8881,-102.1957);
\draw[draw=dcColor0, line width=1.5pt] (12.0617,-102.6265) -- (12.099,-102.7756) -- (11.9499,-102.7384);
\draw[draw=dcColor0, line width=1.5pt] (12.1672,-102.3629) -- (12.2044,-102.512) -- (12.0553,-102.4748);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-105.8597) -- (0.3163,-106.2287) -- (-0.369,-106.5978) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-106.2287) -- (-0.369,-106.2287) (0.3163,-106.2287) -- (1.0544,-106.2287);
\draw[draw=dcColor0, line width=1.5pt] (0.1582,-105.9651) -- (0.1582,-105.807) -- (0.3163,-105.807) -- (0.3163,-106.6505) -- (0.4745,-106.6505) -- (0.4745,-106.4923);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5866,-105.8597) -- (4.2175,-106.545) -- (3.8485,-105.8597) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-105.1743) -- (4.2175,-105.8597) (4.2175,-106.545) -- (4.2175,-107.2831);
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-106.3869) -- (4.6393,-106.3869) -- (4.6393,-106.545) -- (3.7958,-106.545) -- (3.7958,-106.7032) -- (3.9539,-106.7032);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8041,-106.5978) -- (8.1187,-106.2287) -- (8.8041,-105.8597) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-106.2287) -- (8.8041,-106.2287) (8.1187,-106.2287) -- (7.3807,-106.2287);
\draw[draw=dcColor0, line width=1.5pt] (8.2769,-106.4923) -- (8.2769,-106.6505) -- (8.1187,-106.6505) -- (8.1187,-105.807) -- (7.9606,-105.807) -- (7.9606,-105.9651);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.2835,-106.5978) -- (12.6526,-105.9124) -- (13.0216,-106.5978) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-107.2831) -- (12.6526,-106.5978) (12.6526,-105.9124) -- (12.6526,-105.1743);
\draw[draw=dcColor0, line width=1.5pt] (12.389,-106.0706) -- (12.2308,-106.0706) -- (12.2308,-105.9124) -- (13.0743,-105.9124) -- (13.0743,-105.7543) -- (12.9161,-105.7543);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-109.2864) -- (0.3163,-109.6555) -- (-0.369,-110.0245) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-109.6555) -- (-0.369,-109.6555) (0.4745,-109.6555) -- (1.0544,-109.6555) (0.3163,-109.2864) -- (0.3163,-110.0245) (0.4745,-109.2864) -- (0.4745,-110.0245);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5866,-109.2864) -- (4.2175,-109.9718) -- (3.8485,-109.2864) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-108.6011) -- (4.2175,-109.2864) (4.2175,-110.1299) -- (4.2175,-110.7098) (4.5866,-109.9718) -- (3.8485,-109.9718) (4.5866,-110.1299) -- (3.8485,-110.1299);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8041,-110.0245) -- (8.1187,-109.6555) -- (8.8041,-109.2864) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-109.6555) -- (8.8041,-109.6555) (7.9606,-109.6555) -- (7.3807,-109.6555) (8.1187,-110.0245) -- (8.1187,-109.2864) (7.9606,-110.0245) -- (7.9606,-109.2864);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.2835,-110.0245) -- (12.6526,-109.3391) -- (13.0216,-110.0245) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-110.7098) -- (12.6526,-110.0245) (12.6526,-109.181) -- (12.6526,-108.6011) (12.2835,-109.3391) -- (13.0216,-109.3391) (12.2835,-109.181) -- (13.0216,-109.181);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-113.0822) -- (-0.3163,-113.0822) (-0.3163,-112.6077) -- (-0.3163,-113.5567) (-0.3163,-112.8186) -- (0.5272,-112.2914) -- (0.5272,-112.0278) (-0.3163,-113.3458) -- (0.5272,-113.873) -- (0.5272,-114.1366);
\draw[draw=dcColor0, line width=1.5pt] (0.3782,-113.686) -- (0.4481,-113.8229) -- (0.2944,-113.8201);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-112.0278) -- (4.2175,-112.7659) (4.692,-112.7659) -- (3.743,-112.7659) (4.4811,-112.7659) -- (5.0083,-113.6094) -- (5.2719,-113.6094) (3.9539,-112.7659) -- (3.4267,-113.6094) -- (3.1631,-113.6094);
\draw[draw=dcColor0, line width=1.5pt] (3.6137,-113.4604) -- (3.4768,-113.5303) -- (3.4796,-113.3766);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-113.0822) -- (8.7513,-113.0822) (8.7513,-113.5567) -- (8.7513,-112.6077) (8.7513,-113.3458) -- (7.9078,-113.873) -- (7.9078,-114.1366) (8.7513,-112.8186) -- (7.9078,-112.2914) -- (7.9078,-112.0278);
\draw[draw=dcColor0, line width=1.5pt] (8.0568,-112.4784) -- (7.9869,-112.3415) -- (8.1406,-112.3443);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-114.1366) -- (12.6526,-113.3985) (12.1781,-113.3985) -- (13.127,-113.3985) (12.389,-113.3985) -- (11.8618,-112.555) -- (11.5982,-112.555) (12.9161,-113.3985) -- (13.4433,-112.555) -- (13.7069,-112.555);
\draw[draw=dcColor0, line width=1.5pt] (13.2564,-112.7039) -- (13.3933,-112.6341) -- (13.3905,-112.7878);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-116.5089) -- (-0.3163,-116.5089) (-0.3163,-116.0345) -- (-0.3163,-116.9834) (-0.3163,-116.2453) -- (0.5272,-115.7181) -- (0.5272,-115.4545) (-0.3163,-116.7725) -- (0.5272,-117.2997) -- (0.5272,-117.5633);
\draw[draw=dcColor0, line width=1.5pt] (0.0699,-117.1071) -- (0,-116.9702) -- (0.1537,-116.973);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-115.4545) -- (4.2175,-116.1926) (4.692,-116.1926) -- (3.743,-116.1926) (4.4811,-116.1926) -- (5.0083,-117.0361) -- (5.2719,-117.0361) (3.9539,-116.1926) -- (3.4267,-117.0361) -- (3.1631,-117.0361);
\draw[draw=dcColor0, line width=1.5pt] (3.6193,-116.5788) -- (3.7562,-116.5089) -- (3.7534,-116.6626);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-116.5089) -- (8.7513,-116.5089) (8.7513,-116.9834) -- (8.7513,-116.0345) (8.7513,-116.7725) -- (7.9078,-117.2997) -- (7.9078,-117.5633) (8.7513,-116.2453) -- (7.9078,-115.7181) -- (7.9078,-115.4545);
\draw[draw=dcColor0, line width=1.5pt] (8.3652,-115.9107) -- (8.435,-116.0476) -- (8.2814,-116.0449);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-117.5633) -- (12.6526,-116.8252) (12.1781,-116.8252) -- (13.127,-116.8252) (12.389,-116.8252) -- (11.8618,-115.9817) -- (11.5982,-115.9817) (12.9161,-116.8252) -- (13.4433,-115.9817) -- (13.7069,-115.9817);
\draw[draw=dcColor0, line width=1.5pt] (13.2507,-116.4391) -- (13.1138,-116.5089) -- (13.1166,-116.3552);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-119.9357) -- (-0.4218,-119.9357) (-0.1582,-119.4085) -- (-0.1582,-120.4628) (-0.1582,-119.5666) -- (0.5272,-119.5666) -- (0.5272,-118.8813) (-0.1582,-120.3047) -- (0.5272,-120.3047) -- (0.5272,-120.99);
\draw[draw=dcColor0, line width=1.5pt] (-0.4218,-119.4612) -- (-0.4218,-120.4101);
\draw[draw=dcColor0, line width=1.5pt] (-0.1582,-119.9357) -- (0.2372,-119.9357);
\draw[draw=dcColor0, line width=1.5pt] (0,-120.0147) -- (-0.1318,-119.9357) -- (0,-119.8566);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-118.8813) -- (4.2175,-119.5139) (4.7447,-119.7775) -- (3.6903,-119.7775) (4.5866,-119.7775) -- (4.5866,-120.4628) -- (5.2719,-120.4628) (3.8485,-119.7775) -- (3.8485,-120.4628) -- (3.1631,-120.4628);
\draw[draw=dcColor0, line width=1.5pt] (4.692,-119.5139) -- (3.743,-119.5139);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-119.7775) -- (4.2175,-120.1729);
\draw[draw=dcColor0, line width=1.5pt] (4.1384,-119.9357) -- (4.2175,-119.8039) -- (4.2966,-119.9357);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-119.9357) -- (8.8568,-119.9357) (8.5932,-120.4628) -- (8.5932,-119.4085) (8.5932,-120.3047) -- (7.9078,-120.3047) -- (7.9078,-120.99) (8.5932,-119.5666) -- (7.9078,-119.5666) -- (7.9078,-118.8813);
\draw[draw=dcColor0, line width=1.5pt] (8.8568,-120.4101) -- (8.8568,-119.4612);
\draw[draw=dcColor0, line width=1.5pt] (8.5932,-119.9357) -- (8.1978,-119.9357);
\draw[draw=dcColor0, line width=1.5pt] (8.435,-119.8566) -- (8.5668,-119.9357) -- (8.435,-120.0147);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-120.99) -- (12.6526,-120.3574) (12.1254,-120.0938) -- (13.1797,-120.0938) (12.2835,-120.0938) -- (12.2835,-119.4085) -- (11.5982,-119.4085) (13.0216,-120.0938) -- (13.0216,-119.4085) -- (13.7069,-119.4085);
\draw[draw=dcColor0, line width=1.5pt] (12.1781,-120.3574) -- (13.127,-120.3574);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-120.0938) -- (12.6526,-119.6984);
\draw[draw=dcColor0, line width=1.5pt] (12.7316,-119.9357) -- (12.6526,-120.0675) -- (12.5735,-119.9357);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-123.3624) -- (-0.4218,-123.3624) (-0.1582,-122.8352) -- (-0.1582,-123.8896) (-0.1582,-122.9934) -- (0.5272,-122.9934) -- (0.5272,-122.308) (-0.1582,-123.7314) -- (0.5272,-123.7314) -- (0.5272,-124.4168);
\draw[draw=dcColor0, line width=1.5pt] (-0.4218,-122.8879) -- (-0.4218,-123.8369);
\draw[draw=dcColor0, line width=1.5pt] (-0.1582,-123.3624) -- (0.2372,-123.3624);
\draw[draw=dcColor0, line width=1.5pt] (0.0791,-123.2833) -- (0.2109,-123.3624) -- (0.0791,-123.4415);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5799,-123.3624) circle (2.25pt);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-122.308) -- (4.2175,-122.9406) (4.7447,-123.2042) -- (3.6903,-123.2042) (4.5866,-123.2042) -- (4.5866,-123.8896) -- (5.2719,-123.8896) (3.8485,-123.2042) -- (3.8485,-123.8896) -- (3.1631,-123.8896);
\draw[draw=dcColor0, line width=1.5pt] (4.692,-122.9406) -- (3.743,-122.9406);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-123.2042) -- (4.2175,-123.5996);
\draw[draw=dcColor0, line width=1.5pt] (4.2966,-123.4415) -- (4.2175,-123.5733) -- (4.1384,-123.4415);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-122.7825) circle (2.25pt);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-123.3624) -- (8.8568,-123.3624) (8.5932,-123.8896) -- (8.5932,-122.8352) (8.5932,-123.7314) -- (7.9078,-123.7314) -- (7.9078,-124.4168) (8.5932,-122.9934) -- (7.9078,-122.9934) -- (7.9078,-122.308);
\draw[draw=dcColor0, line width=1.5pt] (8.8568,-123.8369) -- (8.8568,-122.8879);
\draw[draw=dcColor0, line width=1.5pt] (8.5932,-123.3624) -- (8.1978,-123.3624);
\draw[draw=dcColor0, line width=1.5pt] (8.356,-123.4415) -- (8.2242,-123.3624) -- (8.356,-123.2833);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0149,-123.3624) circle (2.25pt);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-124.4168) -- (12.6526,-123.7841) (12.1254,-123.5205) -- (13.1797,-123.5205) (12.2835,-123.5205) -- (12.2835,-122.8352) -- (11.5982,-122.8352) (13.0216,-123.5205) -- (13.0216,-122.8352) -- (13.7069,-122.8352);
\draw[draw=dcColor0, line width=1.5pt] (12.1781,-123.7841) -- (13.127,-123.7841);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-123.5205) -- (12.6526,-123.1252);
\draw[draw=dcColor0, line width=1.5pt] (12.5735,-123.2833) -- (12.6526,-123.1515) -- (12.7316,-123.2833);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-123.9423) circle (2.25pt);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-126.7891) -- (-0.1582,-126.7891) (-0.1582,-126.2619) -- (-0.1582,-127.3163) (-0.1582,-126.4201) -- (0.5272,-126.4201) -- (0.5272,-125.7347) (-0.1582,-127.1582) -- (0.5272,-127.1582) -- (0.5272,-127.8435);
\draw[draw=dcColor0, line width=1.5pt] (-0.3163,-126.71) -- (-0.1845,-126.7891) -- (-0.3163,-126.8682);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-125.7347) -- (4.2175,-126.631) (4.7447,-126.631) -- (3.6903,-126.631) (4.5866,-126.631) -- (4.5866,-127.3163) -- (5.2719,-127.3163) (3.8485,-126.631) -- (3.8485,-127.3163) -- (3.1631,-127.3163);
\draw[draw=dcColor0, line width=1.5pt] (4.2966,-126.4728) -- (4.2175,-126.6046) -- (4.1384,-126.4728);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-126.7891) -- (8.5932,-126.7891) (8.5932,-127.3163) -- (8.5932,-126.2619) (8.5932,-127.1582) -- (7.9078,-127.1582) -- (7.9078,-127.8435) (8.5932,-126.4201) -- (7.9078,-126.4201) -- (7.9078,-125.7347);
\draw[draw=dcColor0, line width=1.5pt] (8.7513,-126.8682) -- (8.6196,-126.7891) -- (8.7513,-126.71);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-127.8435) -- (12.6526,-126.9473) (12.1254,-126.9473) -- (13.1797,-126.9473) (12.2835,-126.9473) -- (12.2835,-126.2619) -- (11.5982,-126.2619) (13.0216,-126.9473) -- (13.0216,-126.2619) -- (13.7069,-126.2619);
\draw[draw=dcColor0, line width=1.5pt] (12.5735,-127.1054) -- (12.6526,-126.9736) -- (12.7316,-127.1054);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-130.2159) -- (-0.1582,-130.2159) (-0.1582,-129.6887) -- (-0.1582,-130.743) (-0.1582,-129.8468) -- (0.5272,-129.8468) -- (0.5272,-129.1615) (-0.1582,-130.5849) -- (0.5272,-130.5849) -- (0.5272,-131.2702);
\draw[draw=dcColor0, line width=1.5pt] (-0.3427,-130.2949) -- (-0.4745,-130.2159) -- (-0.3427,-130.1368);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-129.1615) -- (4.2175,-130.0577) (4.7447,-130.0577) -- (3.6903,-130.0577) (4.5866,-130.0577) -- (4.5866,-130.743) -- (5.2719,-130.743) (3.8485,-130.0577) -- (3.8485,-130.743) -- (3.1631,-130.743);
\draw[draw=dcColor0, line width=1.5pt] (4.1384,-129.8732) -- (4.2175,-129.7414) -- (4.2966,-129.8732);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-130.2159) -- (8.5932,-130.2159) (8.5932,-130.743) -- (8.5932,-129.6887) (8.5932,-130.5849) -- (7.9078,-130.5849) -- (7.9078,-131.2702) (8.5932,-129.8468) -- (7.9078,-129.8468) -- (7.9078,-129.1615);
\draw[draw=dcColor0, line width=1.5pt] (8.7777,-130.1368) -- (8.9095,-130.2159) -- (8.7777,-130.2949);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-131.2702) -- (12.6526,-130.374) (12.1254,-130.374) -- (13.1797,-130.374) (12.2835,-130.374) -- (12.2835,-129.6887) -- (11.5982,-129.6887) (13.0216,-130.374) -- (13.0216,-129.6887) -- (13.7069,-129.6887);
\draw[draw=dcColor0, line width=1.5pt] (12.7316,-130.5585) -- (12.6526,-130.6903) -- (12.5735,-130.5585);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-133.6426) -- (-0.4481,-133.6426) (0.4481,-133.1154) -- (1.0544,-133.1154) (0.4481,-134.1698) -- (1.0544,-134.1698) (-0.3954,-133.6426) -- (0.369,-133.1154);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-133.6426) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-133.1154) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-134.1698) circle (1.875pt);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-132.5882) -- (4.2175,-133.1945) (4.7447,-134.0907) -- (4.7447,-134.697) (3.6903,-134.0907) -- (3.6903,-134.697) (4.2175,-133.2472) -- (4.7447,-134.0116);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-133.2208) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-134.0643) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.6903,-134.0643) circle (1.875pt);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-133.6426) -- (8.8831,-133.6426) (7.9869,-134.1698) -- (7.3807,-134.1698) (7.9869,-133.1154) -- (7.3807,-133.1154) (8.8304,-133.6426) -- (8.066,-134.1698);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-133.6426) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-134.1698) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-133.1154) circle (1.875pt);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-134.697) -- (12.6526,-134.0907) (12.1254,-133.1945) -- (12.1254,-132.5882) (13.1797,-133.1945) -- (13.1797,-132.5882) (12.6526,-134.038) -- (12.1254,-133.2736);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-134.0643) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.1254,-133.2208) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.1797,-133.2208) circle (1.875pt);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-137.0693) -- (-0.4481,-137.0693) (0.4481,-137.0693) -- (1.0544,-137.0693) (-0.3954,-137.0693) -- (0.3427,-136.5685);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-137.0693) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-137.0693) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (0,-136.3313) -- (0,-136.8057) (-0.2109,-136.3313) -- (0.2109,-136.3313);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-136.0149) -- (4.2175,-136.6212) (4.2175,-137.5174) -- (4.2175,-138.1237) (4.2175,-136.6739) -- (4.7183,-137.412);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-136.6476) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-137.4911) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (4.9556,-137.0693) -- (4.4811,-137.0693) (4.9556,-136.8584) -- (4.9556,-137.2802);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-137.0693) -- (8.8831,-137.0693) (7.9869,-137.0693) -- (7.3807,-137.0693) (8.8304,-137.0693) -- (8.0924,-137.5702);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-137.0693) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-137.0693) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (8.435,-137.8074) -- (8.435,-137.3329) (8.6459,-137.8074) -- (8.2242,-137.8074);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-138.1237) -- (12.6526,-137.5174) (12.6526,-136.6212) -- (12.6526,-136.0149) (12.6526,-137.4647) -- (12.1517,-136.7267);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-137.4911) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-136.6476) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (11.9145,-137.0693) -- (12.389,-137.0693) (11.9145,-137.2802) -- (11.9145,-136.8584);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-140.4961) -- (-0.4481,-140.4961) (0.4481,-140.4961) -- (1.0544,-140.4961) (-0.3954,-140.4961) -- (0.3427,-140.4961);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-140.4961) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-140.4961) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (0,-139.758) -- (0,-140.2325) (-0.2109,-139.758) -- (0.2109,-139.758);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-139.4417) -- (4.2175,-140.0479) (4.2175,-140.9442) -- (4.2175,-141.5504) (4.2175,-140.1007) -- (4.2175,-140.8387);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-140.0743) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-140.9178) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (4.9556,-140.4961) -- (4.4811,-140.4961) (4.9556,-140.2852) -- (4.9556,-140.7069);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-140.4961) -- (8.8831,-140.4961) (7.9869,-140.4961) -- (7.3807,-140.4961) (8.8304,-140.4961) -- (8.0924,-140.4961);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-140.4961) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-140.4961) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (8.435,-141.2341) -- (8.435,-140.7597) (8.6459,-141.2341) -- (8.2242,-141.2341);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-141.5504) -- (12.6526,-140.9442) (12.6526,-140.0479) -- (12.6526,-139.4417) (12.6526,-140.8914) -- (12.6526,-140.1534);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-140.9178) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-140.0743) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (11.9145,-140.4961) -- (12.389,-140.4961) (11.9145,-140.7069) -- (11.9145,-140.2852);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-143.3956) -- (-0.4481,-143.3956) (0.4481,-143.3956) -- (1.0544,-143.3956) (-0.3954,-143.3956) -- (0.3427,-142.8948);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-143.3956) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-143.3956) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-144.45) -- (-0.4481,-144.45) (0.4481,-144.45) -- (1.0544,-144.45) (-0.3954,-144.45) -- (0.3427,-143.9491);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-144.45) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-144.45) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (0,-143.2111) -- (0,-144.2655);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-142.8684) -- (4.7447,-143.4747) (4.7447,-144.3709) -- (4.7447,-144.9772) (4.7447,-143.5274) -- (5.2455,-144.2655);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-143.501) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-144.3445) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (3.6903,-142.8684) -- (3.6903,-143.4747) (3.6903,-144.3709) -- (3.6903,-144.9772) (3.6903,-143.5274) -- (4.1912,-144.2655);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.6903,-143.501) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.6903,-144.3445) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (4.9292,-143.9228) -- (3.8748,-143.9228);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-144.45) -- (8.8831,-144.45) (7.9869,-144.45) -- (7.3807,-144.45) (8.8304,-144.45) -- (8.0924,-144.9508);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-144.45) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-144.45) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-143.3956) -- (8.8831,-143.3956) (7.9869,-143.3956) -- (7.3807,-143.3956) (8.8304,-143.3956) -- (8.0924,-143.8964);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-143.3956) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-143.3956) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (8.435,-144.6345) -- (8.435,-143.5801);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-144.9772) -- (12.1254,-144.3709) (12.1254,-143.4747) -- (12.1254,-142.8684) (12.1254,-144.3182) -- (11.6245,-143.5801);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.1254,-144.3445) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.1254,-143.501) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (13.1797,-144.9772) -- (13.1797,-144.3709) (13.1797,-143.4747) -- (13.1797,-142.8684) (13.1797,-144.3182) -- (12.6789,-143.5801);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.1797,-144.3445) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.1797,-143.501) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (11.9408,-143.9228) -- (12.9952,-143.9228);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-146.5587) -- (-0.4481,-146.5587) (0.4481,-146.0315) -- (1.0544,-146.0315) (0.4481,-147.0859) -- (1.0544,-147.0859) (-0.3954,-146.5587) -- (0.369,-146.0315);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-146.5587) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-146.0315) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-147.0859) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-148.1403) -- (-0.4481,-148.1403) (0.4481,-147.6131) -- (1.0544,-147.6131) (0.4481,-148.6675) -- (1.0544,-148.6675) (-0.3954,-148.1403) -- (0.369,-147.6131);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-148.1403) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-147.6131) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-148.6675) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (0,-146.2951) -- (0,-147.8767);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (5.0083,-146.2951) -- (5.0083,-146.9014) (5.5355,-147.7976) -- (5.5355,-148.4039) (4.4811,-147.7976) -- (4.4811,-148.4039) (5.0083,-146.9541) -- (5.5355,-147.7186);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.0083,-146.9278) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.5355,-147.7713) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4811,-147.7713) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (3.4267,-146.2951) -- (3.4267,-146.9014) (3.9539,-147.7976) -- (3.9539,-148.4039) (2.8995,-147.7976) -- (2.8995,-148.4039) (3.4267,-146.9541) -- (3.9539,-147.7186);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.4267,-146.9278) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-147.7713) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (2.8995,-147.7713) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (5.2719,-147.3495) -- (3.6903,-147.3495);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-148.1403) -- (8.8831,-148.1403) (7.9869,-148.6675) -- (7.3807,-148.6675) (7.9869,-147.6131) -- (7.3807,-147.6131) (8.8304,-148.1403) -- (8.066,-148.6675);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-148.1403) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-148.6675) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-147.6131) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-146.5587) -- (8.8831,-146.5587) (7.9869,-147.0859) -- (7.3807,-147.0859) (7.9869,-146.0315) -- (7.3807,-146.0315) (8.8304,-146.5587) -- (8.066,-147.0859);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.8568,-146.5587) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-147.0859) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.0133,-146.0315) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (8.435,-148.4039) -- (8.435,-146.8223);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-148.4039) -- (11.8618,-147.7976) (11.3346,-146.9014) -- (11.3346,-146.2951) (12.389,-146.9014) -- (12.389,-146.2951) (11.8618,-147.7449) -- (11.3346,-146.9805);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-147.7713) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.3346,-146.9278) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.389,-146.9278) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (13.4433,-148.4039) -- (13.4433,-147.7976) (12.9161,-146.9014) -- (12.9161,-146.2951) (13.9705,-146.9014) -- (13.9705,-146.2951) (13.4433,-147.7449) -- (12.9161,-146.9805);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.4433,-147.7713) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.9161,-146.9278) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.9705,-146.9278) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (11.5982,-147.3495) -- (13.1797,-147.3495);
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-150.7763) -- (-0.5272,-150.7763) (0.5272,-150.7763) -- (1.0544,-150.7763);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-150.7763) circle (15pt);
\path (-0.2531,-150.365) -- (0.2531,-150.365) -- (-0.2531,-151.1031) -- (0.2531,-151.1031) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-150.8026) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-149.7219) -- (4.2175,-150.2491) (4.2175,-151.3034) -- (4.2175,-151.8306);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-150.7763) circle (15pt);
\path (4.6288,-150.5232) -- (4.6288,-151.0293) -- (3.8907,-150.5232) -- (3.8907,-151.0293) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.1912,-150.7763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-150.7763) -- (8.9622,-150.7763) (7.9078,-150.7763) -- (7.3807,-150.7763);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-150.7763) circle (15pt);
\path (8.6881,-151.1875) -- (8.1819,-151.1875) -- (8.6881,-150.4494) -- (8.1819,-150.4494) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-150.7499) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-151.8306) -- (12.6526,-151.3034) (12.6526,-150.2491) -- (12.6526,-149.7219);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-150.7763) circle (15pt);
\path (12.2413,-151.0293) -- (12.2413,-150.5232) -- (12.9794,-151.0293) -- (12.9794,-150.5232) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6789,-150.7763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-154.203) -- (-0.5272,-154.203) (0.5272,-154.203) -- (1.0544,-154.203);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-154.203) circle (15pt);
\path (-0.1792,-153.7917) -- (0.1792,-153.7917) -- (-0.1792,-154.5298) -- (0.1792,-154.5298) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-154.2293) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-153.1486) -- (4.2175,-153.6758) (4.2175,-154.7302) -- (4.2175,-155.2574);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-154.203) circle (15pt);
\path (4.6288,-154.0238) -- (4.6288,-154.3822) -- (3.8907,-154.0238) -- (3.8907,-154.3822) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.1912,-154.203) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-154.203) -- (8.9622,-154.203) (7.9078,-154.203) -- (7.3807,-154.203);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-154.203) circle (15pt);
\path (8.6142,-154.6142) -- (8.2559,-154.6142) -- (8.6142,-153.8762) -- (8.2559,-153.8762) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-154.1766) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-155.2574) -- (12.6526,-154.7302) (12.6526,-153.6758) -- (12.6526,-153.1486);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-154.203) circle (15pt);
\path (12.2413,-154.3822) -- (12.2413,-154.0238) -- (12.9794,-154.3822) -- (12.9794,-154.0238) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6789,-154.203) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-156.5753) -- (0,-157.6297) (-0.4481,-157.6297) -- (0,-158.1042) -- (0.4481,-157.6297) -- cycle;
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.2719,-157.6297) -- (4.2175,-157.6297) (4.2175,-157.1816) -- (3.743,-157.6297) -- (4.2175,-158.0778) -- cycle;
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-158.6841) -- (8.435,-157.6297) (8.8831,-157.6297) -- (8.435,-157.1553) -- (7.9869,-157.6297) -- cycle;
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.5982,-157.6297) -- (12.6526,-157.6297) (12.6526,-158.0778) -- (13.127,-157.6297) -- (12.6526,-157.1816) -- cycle;
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (0,-160.0021) -- (0,-161.0565) (-0.5272,-161.0565) -- (0.5272,-161.0565) (-0.4218,-161.0565) -- (-0.659,-161.3728) (0,-161.0565) -- (-0.2372,-161.3728) (0.4218,-161.0565) -- (0.1845,-161.3728);
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-161.0565) -- (4.2175,-161.0565) (4.2175,-160.5293) -- (4.2175,-161.5836) (4.2175,-160.6347) -- (3.9012,-160.3975) (4.2175,-161.0565) -- (3.9012,-160.8192) (4.2175,-161.4782) -- (3.9012,-161.241);
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (8.435,-162.1108) -- (8.435,-161.0565) (8.9622,-161.0565) -- (7.9078,-161.0565) (8.8568,-161.0565) -- (9.094,-160.7401) (8.435,-161.0565) -- (8.6723,-160.7401) (8.0133,-161.0565) -- (8.2505,-160.7401);
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-161.0565) -- (12.6526,-161.0565) (12.6526,-161.5836) -- (12.6526,-160.5293) (12.6526,-161.4782) -- (12.9689,-161.7154) (12.6526,-161.0565) -- (12.9689,-161.2937) (12.6526,-160.6347) -- (12.9689,-160.8719);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-163.4288) -- (-0.5272,-163.4288) -- (-0.5272,-163.8506) .. controls (-0.0527,-163.8506) and (-0.0527,-164.1669) .. (-0.5272,-164.1669) .. controls (-0.0527,-164.1669) and (-0.0527,-164.4832) .. (-0.5272,-164.4832) .. controls (-0.0527,-164.4832) and (-0.0527,-164.7995) .. (-0.5272,-164.7995) .. controls (-0.0527,-164.7995) and (-0.0527,-165.1158) .. (-0.5272,-165.1158) -- (-0.5272,-165.5376) -- (-1.0544,-165.5376) (1.0544,-163.4288) -- (0.5272,-163.4288) -- (0.5272,-163.8506) .. controls (0.0527,-163.8506) and (0.0527,-164.1669) .. (0.5272,-164.1669) .. controls (0.0527,-164.1669) and (0.0527,-164.4832) .. (0.5272,-164.4832) .. controls (0.0527,-164.4832) and (0.0527,-164.7995) .. (0.5272,-164.7995) .. controls (0.0527,-164.7995) and (0.0527,-165.1158) .. (0.5272,-165.1158) -- (0.5272,-165.5376) -- (1.0544,-165.5376);
\draw[draw=dcColor0, line width=1.5pt] (-0.0791,-163.8242) -- (-0.0791,-165.1422) (0.0791,-163.8242) -- (0.0791,-165.1422);
\draw[draw=dcColor0, line width=1.5pt] (0.5272,-164.4832) -- (1.5816,-164.4832);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-163.4288) -- (5.2719,-163.956) -- (4.8501,-163.956) .. controls (4.8501,-164.4305) and (4.5338,-164.4305) .. (4.5338,-163.956) .. controls (4.5338,-164.4305) and (4.2175,-164.4305) .. (4.2175,-163.956) .. controls (4.2175,-164.4305) and (3.9012,-164.4305) .. (3.9012,-163.956) .. controls (3.9012,-164.4305) and (3.5849,-164.4305) .. (3.5849,-163.956) -- (3.1631,-163.956) -- (3.1631,-163.4288) (5.2719,-165.5376) -- (5.2719,-165.0104) -- (4.8501,-165.0104) .. controls (4.8501,-164.5359) and (4.5338,-164.5359) .. (4.5338,-165.0104) .. controls (4.5338,-164.5359) and (4.2175,-164.5359) .. (4.2175,-165.0104) .. controls (4.2175,-164.5359) and (3.9012,-164.5359) .. (3.9012,-165.0104) .. controls (3.9012,-164.5359) and (3.5849,-164.5359) .. (3.5849,-165.0104) -- (3.1631,-165.0104) -- (3.1631,-165.5376);
\draw[draw=dcColor0, line width=1.5pt] (4.8765,-164.4041) -- (3.5585,-164.4041) (4.8765,-164.5623) -- (3.5585,-164.5623);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-165.0104) -- (4.2175,-166.0648);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-165.5376) -- (8.9622,-165.5376) -- (8.9622,-165.1158) .. controls (8.4878,-165.1158) and (8.4878,-164.7995) .. (8.9622,-164.7995) .. controls (8.4878,-164.7995) and (8.4878,-164.4832) .. (8.9622,-164.4832) .. controls (8.4878,-164.4832) and (8.4878,-164.1669) .. (8.9622,-164.1669) .. controls (8.4878,-164.1669) and (8.4878,-163.8506) .. (8.9622,-163.8506) -- (8.9622,-163.4288) -- (9.4894,-163.4288) (7.3807,-165.5376) -- (7.9078,-165.5376) -- (7.9078,-165.1158) .. controls (8.3823,-165.1158) and (8.3823,-164.7995) .. (7.9078,-164.7995) .. controls (8.3823,-164.7995) and (8.3823,-164.4832) .. (7.9078,-164.4832) .. controls (8.3823,-164.4832) and (8.3823,-164.1669) .. (7.9078,-164.1669) .. controls (8.3823,-164.1669) and (8.3823,-163.8506) .. (7.9078,-163.8506) -- (7.9078,-163.4288) -- (7.3807,-163.4288);
\draw[draw=dcColor0, line width=1.5pt] (8.5141,-165.1422) -- (8.5141,-163.8242) (8.356,-165.1422) -- (8.356,-163.8242);
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-164.4832) -- (6.8535,-164.4832);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-165.5376) -- (11.5982,-165.0104) -- (12.0199,-165.0104) .. controls (12.0199,-164.5359) and (12.3362,-164.5359) .. (12.3362,-165.0104) .. controls (12.3362,-164.5359) and (12.6526,-164.5359) .. (12.6526,-165.0104) .. controls (12.6526,-164.5359) and (12.9689,-164.5359) .. (12.9689,-165.0104) .. controls (12.9689,-164.5359) and (13.2852,-164.5359) .. (13.2852,-165.0104) -- (13.7069,-165.0104) -- (13.7069,-165.5376) (11.5982,-163.4288) -- (11.5982,-163.956) -- (12.0199,-163.956) .. controls (12.0199,-164.4305) and (12.3362,-164.4305) .. (12.3362,-163.956) .. controls (12.3362,-164.4305) and (12.6526,-164.4305) .. (12.6526,-163.956) .. controls (12.6526,-164.4305) and (12.9689,-164.4305) .. (12.9689,-163.956) .. controls (12.9689,-164.4305) and (13.2852,-164.4305) .. (13.2852,-163.956) -- (13.7069,-163.956) -- (13.7069,-163.4288);
\draw[draw=dcColor0, line width=1.5pt] (11.9936,-164.5623) -- (13.3115,-164.5623) (11.9936,-164.4041) -- (13.3115,-164.4041);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-163.956) -- (12.6526,-162.9016);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-166.8555) -- (-0.5272,-166.8555) -- (-0.5272,-167.2773) .. controls (-0.0527,-167.2773) and (-0.0527,-167.5936) .. (-0.5272,-167.5936) .. controls (-0.0527,-167.5936) and (-0.0527,-167.9099) .. (-0.5272,-167.9099) .. controls (-0.0527,-167.9099) and (-0.0527,-168.2262) .. (-0.5272,-168.2262) .. controls (-0.0527,-168.2262) and (-0.0527,-168.5425) .. (-0.5272,-168.5425) -- (-0.5272,-168.9643) -- (-1.0544,-168.9643) (1.0544,-166.8555) -- (0.5272,-166.8555) -- (0.5272,-167.2773) .. controls (0.0527,-167.2773) and (0.0527,-167.5936) .. (0.5272,-167.5936) .. controls (0.0527,-167.5936) and (0.0527,-167.9099) .. (0.5272,-167.9099) .. controls (0.0527,-167.9099) and (0.0527,-168.2262) .. (0.5272,-168.2262) .. controls (0.0527,-168.2262) and (0.0527,-168.5425) .. (0.5272,-168.5425) -- (0.5272,-168.9643) -- (1.0544,-168.9643);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (5.2719,-166.8555) -- (5.2719,-167.3827) -- (4.8501,-167.3827) .. controls (4.8501,-167.8572) and (4.5338,-167.8572) .. (4.5338,-167.3827) .. controls (4.5338,-167.8572) and (4.2175,-167.8572) .. (4.2175,-167.3827) .. controls (4.2175,-167.8572) and (3.9012,-167.8572) .. (3.9012,-167.3827) .. controls (3.9012,-167.8572) and (3.5849,-167.8572) .. (3.5849,-167.3827) -- (3.1631,-167.3827) -- (3.1631,-166.8555) (5.2719,-168.9643) -- (5.2719,-168.4371) -- (4.8501,-168.4371) .. controls (4.8501,-167.9626) and (4.5338,-167.9626) .. (4.5338,-168.4371) .. controls (4.5338,-167.9626) and (4.2175,-167.9626) .. (4.2175,-168.4371) .. controls (4.2175,-167.9626) and (3.9012,-167.9626) .. (3.9012,-168.4371) .. controls (3.9012,-167.9626) and (3.5849,-167.9626) .. (3.5849,-168.4371) -- (3.1631,-168.4371) -- (3.1631,-168.9643);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-168.9643) -- (8.9622,-168.9643) -- (8.9622,-168.5425) .. controls (8.4878,-168.5425) and (8.4878,-168.2262) .. (8.9622,-168.2262) .. controls (8.4878,-168.2262) and (8.4878,-167.9099) .. (8.9622,-167.9099) .. controls (8.4878,-167.9099) and (8.4878,-167.5936) .. (8.9622,-167.5936) .. controls (8.4878,-167.5936) and (8.4878,-167.2773) .. (8.9622,-167.2773) -- (8.9622,-166.8555) -- (9.4894,-166.8555) (7.3807,-168.9643) -- (7.9078,-168.9643) -- (7.9078,-168.5425) .. controls (8.3823,-168.5425) and (8.3823,-168.2262) .. (7.9078,-168.2262) .. controls (8.3823,-168.2262) and (8.3823,-167.9099) .. (7.9078,-167.9099) .. controls (8.3823,-167.9099) and (8.3823,-167.5936) .. (7.9078,-167.5936) .. controls (8.3823,-167.5936) and (8.3823,-167.2773) .. (7.9078,-167.2773) -- (7.9078,-166.8555) -- (7.3807,-166.8555);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-168.9643) -- (11.5982,-168.4371) -- (12.0199,-168.4371) .. controls (12.0199,-167.9626) and (12.3362,-167.9626) .. (12.3362,-168.4371) .. controls (12.3362,-167.9626) and (12.6526,-167.9626) .. (12.6526,-168.4371) .. controls (12.6526,-167.9626) and (12.9689,-167.9626) .. (12.9689,-168.4371) .. controls (12.9689,-167.9626) and (13.2852,-167.9626) .. (13.2852,-168.4371) -- (13.7069,-168.4371) -- (13.7069,-168.9643) (11.5982,-166.8555) -- (11.5982,-167.3827) -- (12.0199,-167.3827) .. controls (12.0199,-167.8572) and (12.3362,-167.8572) .. (12.3362,-167.3827) .. controls (12.3362,-167.8572) and (12.6526,-167.8572) .. (12.6526,-167.3827) .. controls (12.6526,-167.8572) and (12.9689,-167.8572) .. (12.9689,-167.3827) .. controls (12.9689,-167.8572) and (13.2852,-167.8572) .. (13.2852,-167.3827) -- (13.7069,-167.3827) -- (13.7069,-166.8555);
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-170.8095) -- (-0.6326,-170.8095) (-1.0544,-171.8638) -- (-0.6326,-171.8638) (0.6326,-171.3367) -- (1.0544,-171.3367);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-170.4932) -- (0.6326,-171.3367) -- (-0.6326,-172.1802) -- cycle;
\path (-0.5104,-170.5531) -- (-0.3331,-170.5531) -- (-0.5104,-171.0671) -- (-0.3331,-171.0671) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-170.8622) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (-0.5104,-171.502) -- (-0.3331,-171.502) -- (-0.5104,-172.016) -- (-0.3331,-172.016) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-171.8111) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-170.2823) -- (4.7447,-170.704) (3.6903,-170.2823) -- (3.6903,-170.704) (4.2175,-171.9693) -- (4.2175,-172.391);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.061,-170.704) -- (4.2175,-171.9693) -- (3.374,-170.704) -- cycle;
\path (5.0011,-170.8262) -- (5.0011,-171.0036) -- (4.4871,-170.8262) -- (4.4871,-171.0036) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.692,-170.9149) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (4.0522,-170.8262) -- (4.0522,-171.0036) -- (3.5381,-170.8262) -- (3.5381,-171.0036) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.743,-170.9149) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-171.8638) -- (9.0677,-171.8638) (9.4894,-170.8095) -- (9.0677,-170.8095) (7.8024,-171.3367) -- (7.3807,-171.3367);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0677,-172.1802) -- (7.8024,-171.3367) -- (9.0677,-170.4932) -- cycle;
\path (8.9454,-172.1202) -- (8.7681,-172.1202) -- (8.9454,-171.6062) -- (8.7681,-171.6062) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.8568,-171.8111) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (8.9454,-171.1713) -- (8.7681,-171.1713) -- (8.9454,-170.6573) -- (8.7681,-170.6573) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.8568,-170.8622) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-172.391) -- (12.1254,-171.9693) (13.1797,-172.391) -- (13.1797,-171.9693) (12.6526,-170.704) -- (12.6526,-170.2823);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.809,-171.9693) -- (12.6526,-170.704) -- (13.4961,-171.9693) -- cycle;
\path (11.869,-171.8471) -- (11.869,-171.6698) -- (12.383,-171.8471) -- (12.383,-171.6698) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.1781,-171.7584) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (12.8179,-171.8471) -- (12.8179,-171.6698) -- (13.3319,-171.8471) -- (13.3319,-171.6698) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (13.127,-171.7584) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-174.2362) -- (-0.6326,-174.2362) (-1.0544,-175.2906) -- (-0.6326,-175.2906) (0.6326,-174.7634) -- (1.0544,-174.7634);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-173.9199) -- (0.6326,-174.7634) -- (-0.6326,-175.6069) -- cycle;
\path (-0.5104,-173.9798) -- (-0.3331,-173.9798) -- (-0.5104,-174.4938) -- (-0.3331,-174.4938) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-174.2889) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (-0.5104,-174.9288) -- (-0.3331,-174.9288) -- (-0.5104,-175.4428) -- (-0.3331,-175.4428) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-175.2379) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (-0.0755,-174.4351) -- (0.0755,-174.4351) -- (-0.0755,-174.9887) -- (0.0755,-174.9887) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-174.7634) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-173.709) -- (4.7447,-174.1308) (3.6903,-173.709) -- (3.6903,-174.1308) (4.2175,-175.396) -- (4.2175,-175.8178);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.061,-174.1308) -- (4.2175,-175.396) -- (3.374,-174.1308) -- cycle;
\path (5.0011,-174.253) -- (5.0011,-174.4303) -- (4.4871,-174.253) -- (4.4871,-174.4303) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.692,-174.3416) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (4.0522,-174.253) -- (4.0522,-174.4303) -- (3.5381,-174.253) -- (3.5381,-174.4303) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.743,-174.3416) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (4.5458,-174.6879) -- (4.5458,-174.8389) -- (3.9922,-174.6879) -- (3.9922,-174.8389) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.2175,-174.7634) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-175.2906) -- (9.0677,-175.2906) (9.4894,-174.2362) -- (9.0677,-174.2362) (7.8024,-174.7634) -- (7.3807,-174.7634);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0677,-175.6069) -- (7.8024,-174.7634) -- (9.0677,-173.9199) -- cycle;
\path (8.9454,-175.547) -- (8.7681,-175.547) -- (8.9454,-175.033) -- (8.7681,-175.033) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.8568,-175.2379) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (8.9454,-174.598) -- (8.7681,-174.598) -- (8.9454,-174.084) -- (8.7681,-174.084) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.8568,-174.2889) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (8.5105,-175.0916) -- (8.3596,-175.0916) -- (8.5105,-174.5381) -- (8.3596,-174.5381) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-174.7634) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-175.8178) -- (12.1254,-175.396) (13.1797,-175.8178) -- (13.1797,-175.396) (12.6526,-174.1308) -- (12.6526,-173.709);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.809,-175.396) -- (12.6526,-174.1308) -- (13.4961,-175.396) -- cycle;
\path (11.869,-175.2738) -- (11.869,-175.0965) -- (12.383,-175.2738) -- (12.383,-175.0965) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.1781,-175.1851) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (12.8179,-175.2738) -- (12.8179,-175.0965) -- (13.3319,-175.2738) -- (13.3319,-175.0965) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (13.127,-175.1851) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (12.3243,-174.8389) -- (12.3243,-174.6879) -- (12.8778,-174.8389) -- (12.8778,-174.6879) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6526,-174.7634) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-177.6629) -- (-0.5272,-177.6629) (-1.0544,-178.7173) -- (-0.5272,-178.7173);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-177.4521) -- (0,-177.4521) .. controls (0.9226,-177.4521) and (0.9226,-178.9282) .. (0,-178.9282) -- (-0.5272,-178.9282) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.6326,-178.1901) -- (1.0544,-178.1901);
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-177.1357) -- (4.7447,-177.6629) (3.6903,-177.1357) -- (3.6903,-177.6629);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.9556,-177.6629) -- (4.9556,-178.1901) .. controls (4.9556,-179.1127) and (3.4795,-179.1127) .. (3.4795,-178.1901) -- (3.4795,-177.6629) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-178.8227) -- (4.2175,-179.2445);
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-178.7173) -- (8.9622,-178.7173) (9.4894,-177.6629) -- (8.9622,-177.6629);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-178.9282) -- (8.435,-178.9282) .. controls (7.5125,-178.9282) and (7.5125,-177.4521) .. (8.435,-177.4521) -- (8.9622,-177.4521) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.8024,-178.1901) -- (7.3807,-178.1901);
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-179.2445) -- (12.1254,-178.7173) (13.1797,-179.2445) -- (13.1797,-178.7173);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9145,-178.7173) -- (11.9145,-178.1901) .. controls (11.9145,-177.2675) and (13.3906,-177.2675) .. (13.3906,-178.1901) -- (13.3906,-178.7173) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-177.5575) -- (12.6526,-177.1357);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-181.0897) -- (-0.4745,-181.0897) (-1.0544,-182.144) -- (-0.4745,-182.144);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-180.8788) .. controls (-0.2109,-180.8788) and (0.2109,-181.1248) .. (0.6326,-181.6169) .. controls (0.2109,-182.1089) and (-0.2109,-182.3549) .. (-0.6326,-182.3549) .. controls (-0.3515,-181.8629) and (-0.3515,-181.3708) .. (-0.6326,-180.8788) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.6326,-181.6169) -- (1.0544,-181.6169);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-180.5625) -- (4.7447,-181.1424) (3.6903,-180.5625) -- (3.6903,-181.1424);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.9556,-180.9842) .. controls (4.9556,-181.406) and (4.7096,-181.8277) .. (4.2175,-182.2495) .. controls (3.7255,-181.8277) and (3.4795,-181.406) .. (3.4795,-180.9842) .. controls (3.9715,-181.2654) and (4.4635,-181.2654) .. (4.9556,-180.9842) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-182.2495) -- (4.2175,-182.6712);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-182.144) -- (8.9095,-182.144) (9.4894,-181.0897) -- (8.9095,-181.0897);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0677,-182.3549) .. controls (8.6459,-182.3549) and (8.2242,-182.1089) .. (7.8024,-181.6169) .. controls (8.2242,-181.1248) and (8.6459,-180.8788) .. (9.0677,-180.8788) .. controls (8.7865,-181.3708) and (8.7865,-181.8629) .. (9.0677,-182.3549) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.8024,-181.6169) -- (7.3807,-181.6169);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-182.6712) -- (12.1254,-182.0913) (13.1797,-182.6712) -- (13.1797,-182.0913);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9145,-182.2495) .. controls (11.9145,-181.8277) and (12.1605,-181.406) .. (12.6526,-180.9842) .. controls (13.1446,-181.406) and (13.3906,-181.8277) .. (13.3906,-182.2495) .. controls (12.8986,-181.9683) and (12.4065,-181.9683) .. (11.9145,-182.2495) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-180.9842) -- (12.6526,-180.5625);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-185.0436) -- (-0.5272,-185.0436);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-184.3846) -- (0.5799,-185.0436) -- (-0.5272,-185.7026) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-185.0436) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-185.0436) -- (1.0544,-185.0436);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-183.9892) -- (4.2175,-184.5164);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.8765,-184.5164) -- (4.2175,-185.6235) -- (3.5585,-184.5164) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-185.7817) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-185.8871) -- (4.2175,-186.098);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-185.0436) -- (8.9622,-185.0436);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-185.7026) -- (7.8551,-185.0436) -- (8.9622,-184.3846) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.697,-185.0436) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.5915,-185.0436) -- (7.3807,-185.0436);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-186.098) -- (12.6526,-185.5708);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9936,-185.5708) -- (12.6526,-184.4637) -- (13.3115,-185.5708) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-184.3055) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-184.2001) -- (12.6526,-183.9892);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-187.9431) -- (-0.5272,-187.9431) (-1.0544,-188.9975) -- (-0.5272,-188.9975);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-187.7323) -- (0,-187.7323) .. controls (0.9226,-187.7323) and (0.9226,-189.2084) .. (0,-189.2084) -- (-0.5272,-189.2084) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-188.4703) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-188.4703) -- (1.0544,-188.4703);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-187.4159) -- (4.7447,-187.9431) (3.6903,-187.4159) -- (3.6903,-187.9431);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.9556,-187.9431) -- (4.9556,-188.4703) .. controls (4.9556,-189.3929) and (3.4795,-189.3929) .. (3.4795,-188.4703) -- (3.4795,-187.9431) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-189.2084) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-189.3138) -- (4.2175,-189.5247);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-188.9975) -- (8.9622,-188.9975) (9.4894,-187.9431) -- (8.9622,-187.9431);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-189.2084) -- (8.435,-189.2084) .. controls (7.5125,-189.2084) and (7.5125,-187.7323) .. (8.435,-187.7323) -- (8.9622,-187.7323) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.697,-188.4703) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.5915,-188.4703) -- (7.3807,-188.4703);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-189.5247) -- (12.1254,-188.9975) (13.1797,-189.5247) -- (13.1797,-188.9975);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9145,-188.9975) -- (11.9145,-188.4703) .. controls (11.9145,-187.5477) and (13.3906,-187.5477) .. (13.3906,-188.4703) -- (13.3906,-188.9975) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-187.7323) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-187.6268) -- (12.6526,-187.4159);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-191.3699) -- (-0.4745,-191.3699) (-1.0544,-192.4242) -- (-0.4745,-192.4242);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-191.159) .. controls (-0.2109,-191.159) and (0.2109,-191.405) .. (0.6326,-191.8971) .. controls (0.2109,-192.3891) and (-0.2109,-192.6351) .. (-0.6326,-192.6351) .. controls (-0.3515,-192.1431) and (-0.3515,-191.651) .. (-0.6326,-191.159) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-191.8971) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-191.8971) -- (1.0544,-191.8971);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-190.8427) -- (4.7447,-191.4226) (3.6903,-190.8427) -- (3.6903,-191.4226);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.9556,-191.2644) .. controls (4.9556,-191.6862) and (4.7096,-192.1079) .. (4.2175,-192.5297) .. controls (3.7255,-192.1079) and (3.4795,-191.6862) .. (3.4795,-191.2644) .. controls (3.9715,-191.5456) and (4.4635,-191.5456) .. (4.9556,-191.2644) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-192.6351) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-192.7406) -- (4.2175,-192.9514);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-192.4242) -- (8.9095,-192.4242) (9.4894,-191.3699) -- (8.9095,-191.3699);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0677,-192.6351) .. controls (8.6459,-192.6351) and (8.2242,-192.3891) .. (7.8024,-191.8971) .. controls (8.2242,-191.405) and (8.6459,-191.159) .. (9.0677,-191.159) .. controls (8.7865,-191.651) and (8.7865,-192.1431) .. (9.0677,-192.6351) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.697,-191.8971) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.5915,-191.8971) -- (7.3807,-191.8971);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-192.9514) -- (12.1254,-192.3715) (13.1797,-192.9514) -- (13.1797,-192.3715);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9145,-192.5297) .. controls (11.9145,-192.1079) and (12.1605,-191.6862) .. (12.6526,-191.2644) .. controls (13.1446,-191.6862) and (13.3906,-192.1079) .. (13.3906,-192.5297) .. controls (12.8986,-192.2485) and (12.4065,-192.2485) .. (11.9145,-192.5297) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-191.159) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-191.0535) -- (12.6526,-190.8427);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-194.7966) -- (-0.4745,-194.7966) (-1.0544,-195.851) -- (-0.4745,-195.851);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-194.5857) .. controls (-0.2109,-194.5857) and (0.2109,-194.8317) .. (0.6326,-195.3238) .. controls (0.2109,-195.8158) and (-0.2109,-196.0619) .. (-0.6326,-196.0619) .. controls (-0.3515,-195.5698) and (-0.3515,-195.0778) .. (-0.6326,-194.5857) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.7908,-194.5857) .. controls (-0.5096,-195.0778) and (-0.5096,-195.5698) .. (-0.7908,-196.0619);
\draw[draw=dcColor0, line width=1.5pt] (0.6326,-195.3238) -- (1.0544,-195.3238);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-194.2694) -- (4.7447,-194.8493) (3.6903,-194.2694) -- (3.6903,-194.8493);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.9556,-194.6912) .. controls (4.9556,-195.1129) and (4.7096,-195.5347) .. (4.2175,-195.9564) .. controls (3.7255,-195.5347) and (3.4795,-195.1129) .. (3.4795,-194.6912) .. controls (3.9715,-194.9723) and (4.4635,-194.9723) .. (4.9556,-194.6912) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.9556,-194.533) .. controls (4.4635,-194.8142) and (3.9715,-194.8142) .. (3.4795,-194.533);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-195.9564) -- (4.2175,-196.3782);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-195.851) -- (8.9095,-195.851) (9.4894,-194.7966) -- (8.9095,-194.7966);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0677,-196.0619) .. controls (8.6459,-196.0619) and (8.2242,-195.8158) .. (7.8024,-195.3238) .. controls (8.2242,-194.8317) and (8.6459,-194.5857) .. (9.0677,-194.5857) .. controls (8.7865,-195.0778) and (8.7865,-195.5698) .. (9.0677,-196.0619) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.2258,-196.0619) .. controls (8.9447,-195.5698) and (8.9447,-195.0778) .. (9.2258,-194.5857);
\draw[draw=dcColor0, line width=1.5pt] (7.8024,-195.3238) -- (7.3807,-195.3238);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-196.3782) -- (12.1254,-195.7983) (13.1797,-196.3782) -- (13.1797,-195.7983);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9145,-195.9564) .. controls (11.9145,-195.5347) and (12.1605,-195.1129) .. (12.6526,-194.6912) .. controls (13.1446,-195.1129) and (13.3906,-195.5347) .. (13.3906,-195.9564) .. controls (12.8986,-195.6752) and (12.4065,-195.6752) .. (11.9145,-195.9564) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.9145,-196.1146) .. controls (12.4065,-195.8334) and (12.8986,-195.8334) .. (13.3906,-196.1146);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-194.6912) -- (12.6526,-194.2694);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-198.2233) -- (-0.4745,-198.2233) (-1.0544,-199.2777) -- (-0.4745,-199.2777);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-198.0125) .. controls (-0.2109,-198.0125) and (0.2109,-198.2585) .. (0.6326,-198.7505) .. controls (0.2109,-199.2426) and (-0.2109,-199.4886) .. (-0.6326,-199.4886) .. controls (-0.3515,-198.9965) and (-0.3515,-198.5045) .. (-0.6326,-198.0125) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.7908,-198.0125) .. controls (-0.5096,-198.5045) and (-0.5096,-198.9965) .. (-0.7908,-199.4886);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-198.7505) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-198.7505) -- (1.0544,-198.7505);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-197.6961) -- (4.7447,-198.276) (3.6903,-197.6961) -- (3.6903,-198.276);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.9556,-198.1179) .. controls (4.9556,-198.5396) and (4.7096,-198.9614) .. (4.2175,-199.3831) .. controls (3.7255,-198.9614) and (3.4795,-198.5396) .. (3.4795,-198.1179) .. controls (3.9715,-198.3991) and (4.4635,-198.3991) .. (4.9556,-198.1179) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.9556,-197.9597) .. controls (4.4635,-198.2409) and (3.9715,-198.2409) .. (3.4795,-197.9597);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-199.4886) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-199.594) -- (4.2175,-199.8049);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-199.2777) -- (8.9095,-199.2777) (9.4894,-198.2233) -- (8.9095,-198.2233);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (9.0677,-199.4886) .. controls (8.6459,-199.4886) and (8.2242,-199.2426) .. (7.8024,-198.7505) .. controls (8.2242,-198.2585) and (8.6459,-198.0125) .. (9.0677,-198.0125) .. controls (8.7865,-198.5045) and (8.7865,-198.9965) .. (9.0677,-199.4886) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.2258,-199.4886) .. controls (8.9447,-198.9965) and (8.9447,-198.5045) .. (9.2258,-198.0125);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.697,-198.7505) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.5915,-198.7505) -- (7.3807,-198.7505);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-199.8049) -- (12.1254,-199.225) (13.1797,-199.8049) -- (13.1797,-199.225);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9145,-199.3831) .. controls (11.9145,-198.9614) and (12.1605,-198.5396) .. (12.6526,-198.1179) .. controls (13.1446,-198.5396) and (13.3906,-198.9614) .. (13.3906,-199.3831) .. controls (12.8986,-199.102) and (12.4065,-199.102) .. (11.9145,-199.3831) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.9145,-199.5413) .. controls (12.4065,-199.2601) and (12.8986,-199.2601) .. (13.3906,-199.5413);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-198.0125) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-197.907) -- (12.6526,-197.6961);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-202.1773) -- (-0.5272,-202.1773);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-201.5183) -- (0.5799,-202.1773) -- (-0.5272,-202.8362) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.5799,-202.1773) -- (1.0544,-202.1773);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-201.1229) -- (4.2175,-201.6501);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.8765,-201.6501) -- (4.2175,-202.7572) -- (3.5585,-201.6501) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-202.7572) -- (4.2175,-203.2316);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-202.1773) -- (8.9622,-202.1773);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-202.8362) -- (7.8551,-202.1773) -- (8.9622,-201.5183) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.8551,-202.1773) -- (7.3807,-202.1773);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-203.2316) -- (12.6526,-202.7044);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.9936,-202.7044) -- (12.6526,-201.5973) -- (13.3115,-202.7044) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-201.5973) -- (12.6526,-201.1229);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-205.604) -- (-0.1318,-205.604);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-205.604) circle (3.75pt);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-204.5496) -- (4.2175,-205.4722);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-205.604) circle (3.75pt);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-205.604) -- (8.5668,-205.604);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-205.604) circle (3.75pt);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-206.6584) -- (12.6526,-205.7358);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-205.604) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (0,-210.0851) -- (0,-209.1625);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-209.0307) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (3.1631,-209.0307) -- (4.0857,-209.0307);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-209.0307) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (8.435,-207.9763) -- (8.435,-208.8989);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-209.0307) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (13.7069,-209.0307) -- (12.7844,-209.0307);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-209.0307) circle (3.75pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4745,-211.6667) -- (0.4745,-211.6667) -- (0.4745,-213.2482) -- (-0.4745,-213.2482) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-211.9303) -- (-0.1318,-211.9303);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-211.9303) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-212.9846) -- (-0.1318,-212.9846);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-212.9846) circle (2.25pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.0083,-211.983) -- (5.0083,-212.9319) -- (3.4267,-212.9319) -- (3.4267,-211.983) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-211.4031) -- (4.7447,-212.3257);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-212.3784) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (3.6903,-211.4031) -- (3.6903,-212.3257);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.6903,-212.3784) circle (2.25pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9095,-213.2482) -- (7.9606,-213.2482) -- (7.9606,-211.6667) -- (8.9095,-211.6667) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-212.9846) -- (8.5668,-212.9846);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5141,-212.9846) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-211.9303) -- (8.5668,-211.9303);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5141,-211.9303) circle (2.25pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-212.9319) -- (11.8618,-211.983) -- (13.4433,-211.983) -- (13.4433,-212.9319) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-213.5118) -- (12.1254,-212.5892);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.1254,-212.5365) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (13.1797,-213.5118) -- (13.1797,-212.5892);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.1797,-212.5365) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4745,-215.0934) -- (0.4745,-215.0934) -- (0.4745,-216.675) -- (-0.4745,-216.675) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-215.357) -- (-0.1318,-215.357);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-215.357) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-215.8842) -- (-0.1318,-215.8842);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-215.8842) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-216.4114) -- (-0.1318,-216.4114);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-216.4114) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.0083,-215.4097) -- (5.0083,-216.3587) -- (3.4267,-216.3587) -- (3.4267,-215.4097) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-214.8298) -- (4.7447,-215.7524);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-215.8051) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-214.8298) -- (4.2175,-215.7524);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-215.8051) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (3.6903,-214.8298) -- (3.6903,-215.7524);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.6903,-215.8051) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9095,-216.675) -- (7.9606,-216.675) -- (7.9606,-215.0934) -- (8.9095,-215.0934) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-216.4114) -- (8.5668,-216.4114);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5141,-216.4114) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-215.8842) -- (8.5668,-215.8842);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5141,-215.8842) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-215.357) -- (8.5668,-215.357);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5141,-215.357) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-216.3587) -- (11.8618,-215.4097) -- (13.4433,-215.4097) -- (13.4433,-216.3587) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.1254,-216.9386) -- (12.1254,-216.016);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.1254,-215.9633) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-216.9386) -- (12.6526,-216.016);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-215.9633) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (13.1797,-216.9386) -- (13.1797,-216.016);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.1797,-215.9633) circle (2.25pt);
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-219.3109) -- (-0.5272,-219.3109);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-218.9946) -- (0.2636,-218.9946) -- (0.5799,-219.3109) -- (0.2636,-219.6272) -- (-0.5272,-219.6272) -- cycle;
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-218.2565) -- (4.2175,-218.7837);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5338,-218.7837) -- (4.5338,-219.5745) -- (4.2175,-219.8908) -- (3.9012,-219.5745) -- (3.9012,-218.7837) -- cycle;
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-219.3109) -- (8.9622,-219.3109);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-219.6272) -- (8.1714,-219.6272) -- (7.8551,-219.3109) -- (8.1714,-218.9946) -- (8.9622,-218.9946) -- cycle;
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-220.3653) -- (12.6526,-219.8381);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.3362,-219.8381) -- (12.3362,-219.0473) -- (12.6526,-218.731) -- (12.9689,-219.0473) -- (12.9689,-219.8381) -- cycle;
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-222.7377) -- (-0.5272,-222.7377) (0.5272,-222.7377) -- (1.0544,-222.7377);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-222.5004) -- (0.5272,-222.5004) -- (0.5272,-222.9749) -- (-0.5272,-222.9749) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.5272,-222.7377) -- (0.5272,-222.7377);
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-221.6833) -- (4.2175,-222.2105) (4.2175,-223.2648) -- (4.2175,-223.792);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4548,-222.2105) -- (4.4548,-223.2648) -- (3.9803,-223.2648) -- (3.9803,-222.2105) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-222.2105) -- (4.2175,-223.2648);
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-222.7377) -- (8.9622,-222.7377) (7.9078,-222.7377) -- (7.3807,-222.7377);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-222.9749) -- (7.9078,-222.9749) -- (7.9078,-222.5004) -- (8.9622,-222.5004) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-222.7377) -- (7.9078,-222.7377);
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-223.792) -- (12.6526,-223.2648) (12.6526,-222.2105) -- (12.6526,-221.6833);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.4153,-223.2648) -- (12.4153,-222.2105) -- (12.8898,-222.2105) -- (12.8898,-223.2648) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-223.2648) -- (12.6526,-222.2105);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-226.1644) -- (-0.5272,-226.1644) (0.5272,-226.1644) -- (1.0544,-226.1644);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-226.1644) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.369,-225.7954) -- (0.369,-226.5334) (-0.369,-226.5334) -- (0.369,-225.7954);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-225.11) -- (4.2175,-225.6372) (4.2175,-226.6916) -- (4.2175,-227.2188);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-226.1644) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (4.5866,-225.7954) -- (3.8485,-226.5334) (3.8485,-225.7954) -- (4.5866,-226.5334);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-226.1644) -- (8.9622,-226.1644) (7.9078,-226.1644) -- (7.3807,-226.1644);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-226.1644) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.8041,-226.5334) -- (8.066,-225.7954) (8.8041,-225.7954) -- (8.066,-226.5334);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-227.2188) -- (12.6526,-226.6916) (12.6526,-225.6372) -- (12.6526,-225.11);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-226.1644) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (12.2835,-226.5334) -- (13.0216,-225.7954) (13.0216,-226.5334) -- (12.2835,-225.7954);
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-229.5911) -- (-0.5272,-229.5911) (0.5272,-229.5911) -- (1.0544,-229.5911);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-229.5911) circle (15pt);
\path (-0.2327,-229.1799) -- (0.2327,-229.1799) -- (-0.2327,-229.9179) -- (0.2327,-229.9179) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-229.6175) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-228.5367) -- (4.2175,-229.0639) (4.2175,-230.1183) -- (4.2175,-230.6455);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-229.5911) circle (15pt);
\path (4.6288,-229.3584) -- (4.6288,-229.8238) -- (3.8907,-229.3584) -- (3.8907,-229.8238) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.1912,-229.5911) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-229.5911) -- (8.9622,-229.5911) (7.9078,-229.5911) -- (7.3807,-229.5911);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-229.5911) circle (15pt);
\path (8.6677,-230.0024) -- (8.2023,-230.0024) -- (8.6677,-229.2643) -- (8.2023,-229.2643) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-229.5648) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-230.6455) -- (12.6526,-230.1183) (12.6526,-229.0639) -- (12.6526,-228.5367);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-229.5911) circle (15pt);
\path (12.2413,-229.8238) -- (12.2413,-229.3584) -- (12.9794,-229.8238) -- (12.9794,-229.3584) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6789,-229.5911) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-233.0178) -- (-0.3163,-233.0178) (0.3163,-233.0178) -- (1.0544,-233.0178);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.3163,-232.8333) -- (0.3163,-232.8333) -- (0.3163,-233.2024) -- (-0.3163,-233.2024) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.3163,-232.8333) -- (-0.5535,-232.4907) -- (0.5535,-232.4907) -- (0.3163,-232.8333) -- cycle;
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-231.9635) -- (4.2175,-232.7015) (4.2175,-233.3342) -- (4.2175,-234.0722);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.402,-232.7015) -- (4.402,-233.3342) -- (4.033,-233.3342) -- (4.033,-232.7015) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.402,-232.7015) -- (4.7447,-232.4643) -- (4.7447,-233.5714) -- (4.402,-233.3342) -- cycle;
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-233.0178) -- (8.7513,-233.0178) (8.1187,-233.0178) -- (7.3807,-233.0178);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.7513,-233.2024) -- (8.1187,-233.2024) -- (8.1187,-232.8333) -- (8.7513,-232.8333) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.7513,-233.2024) -- (8.9886,-233.545) -- (7.8815,-233.545) -- (8.1187,-233.2024) -- cycle;
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-234.0722) -- (12.6526,-233.3342) (12.6526,-232.7015) -- (12.6526,-231.9635);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.468,-233.3342) -- (12.468,-232.7015) -- (12.8371,-232.7015) -- (12.8371,-233.3342) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.468,-233.3342) -- (12.1254,-233.5714) -- (12.1254,-232.4643) -- (12.468,-232.7015) -- cycle;
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-236.4446) -- (-0.5272,-236.4446) (0.5272,-236.4446) -- (1.0544,-236.4446);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-236.1283) -- (0.5272,-236.1283) -- (0.5272,-236.7609) -- (-0.5272,-236.7609) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.2636,-235.9438) .. controls (-0.0879,-235.768) and (0.0879,-235.768) .. (0.2636,-235.9438) (-0.3954,-235.7856) .. controls (-0.1318,-235.522) and (0.1318,-235.522) .. (0.3954,-235.7856);
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-235.3902) -- (4.2175,-235.9174) (4.2175,-236.9718) -- (4.2175,-237.499);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.5338,-235.9174) -- (4.5338,-236.9718) -- (3.9012,-236.9718) -- (3.9012,-235.9174) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.7183,-236.181) .. controls (4.8941,-236.3567) and (4.8941,-236.5324) .. (4.7183,-236.7082) (4.8765,-236.0492) .. controls (5.1401,-236.3128) and (5.1401,-236.5764) .. (4.8765,-236.84);
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-236.4446) -- (8.9622,-236.4446) (7.9078,-236.4446) -- (7.3807,-236.4446);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.9622,-236.7609) -- (7.9078,-236.7609) -- (7.9078,-236.1283) -- (8.9622,-236.1283) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.6986,-236.9454) .. controls (8.5229,-237.1211) and (8.3472,-237.1211) .. (8.1714,-236.9454) (8.8304,-237.1036) .. controls (8.5668,-237.3672) and (8.3032,-237.3672) .. (8.0396,-237.1036);
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-237.499) -- (12.6526,-236.9718) (12.6526,-235.9174) -- (12.6526,-235.3902);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.3362,-236.9718) -- (12.3362,-235.9174) -- (12.9689,-235.9174) -- (12.9689,-236.9718) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.1517,-236.7082) .. controls (11.976,-236.5324) and (11.976,-236.3567) .. (12.1517,-236.181) (11.9936,-236.84) .. controls (11.73,-236.5764) and (11.73,-236.3128) .. (11.9936,-236.0492);
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-239.8713) -- (-0.5272,-239.8713) (0.5272,-239.8713) -- (1.0544,-239.8713);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-239.8713) circle (18pt);
\path (-0.5471,-239.5816) -- (0.5471,-239.5816) -- (-0.5471,-240.0692) -- (0.5471,-240.0692) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-239.8713) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-238.8169) -- (4.2175,-239.3441) (4.2175,-240.3985) -- (4.2175,-240.9257);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-239.8713) circle (18pt);
\path (4.5073,-239.3243) -- (4.5073,-240.4184) -- (4.0196,-239.3243) -- (4.0196,-240.4184) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.2175,-239.8713) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-239.8713) -- (8.9622,-239.8713) (7.9078,-239.8713) -- (7.3807,-239.8713);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-239.8713) circle (18pt);
\path (8.9821,-240.1611) -- (7.888,-240.1611) -- (8.9821,-239.6734) -- (7.888,-239.6734) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.435,-239.8713) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-240.9257) -- (12.6526,-240.3985) (12.6526,-239.3441) -- (12.6526,-238.8169);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-239.8713) circle (18pt);
\path (12.3628,-240.4184) -- (12.3628,-239.3243) -- (12.8505,-240.4184) -- (12.8505,-239.3243) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.6526,-239.8713) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-243.298) -- (-0.6326,-243.298) -- (-0.5272,-243.0608) -- (-0.3163,-243.5353) -- (-0.1054,-243.0608) -- (0.1054,-243.5353) -- (0.3163,-243.0608) -- (0.5272,-243.5353) -- (0.6326,-243.298) -- (1.0544,-243.298);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-242.2437) -- (4.2175,-242.6654) -- (4.4548,-242.7709) -- (3.9803,-242.9817) -- (4.4548,-243.1926) -- (3.9803,-243.4035) -- (4.4548,-243.6144) -- (3.9803,-243.8252) -- (4.2175,-243.9307) -- (4.2175,-244.3524);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (9.4894,-243.298) -- (9.0677,-243.298) -- (8.9622,-243.5353) -- (8.7513,-243.0608) -- (8.5405,-243.5353) -- (8.3296,-243.0608) -- (8.1187,-243.5353) -- (7.9078,-243.0608) -- (7.8024,-243.298) -- (7.3807,-243.298);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-244.3524) -- (12.6526,-243.9307) -- (12.4153,-243.8252) -- (12.8898,-243.6144) -- (12.4153,-243.4035) -- (12.8898,-243.1926) -- (12.4153,-242.9817) -- (12.8898,-242.7709) -- (12.6526,-242.6654) -- (12.6526,-242.2437);
\path (-0.3427,1.2125) -- (0.339,1.2125) -- (-0.3427,0.3717) -- (0.339,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.8748,1.2125) -- (4.5565,1.2125) -- (3.8748,0.3717) -- (4.5565,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (8.0924,1.2125) -- (8.774,1.2125) -- (8.0924,0.3717) -- (8.774,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (12.3099,1.2125) -- (12.9915,1.2125) -- (12.3099,0.3717) -- (12.9915,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3295,-2.2142) -- (0.3371,-2.2142) -- (-0.3295,-3.055) -- (0.3371,-3.055) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (3.888,-2.2142) -- (4.5546,-2.2142) -- (3.888,-3.055) -- (4.5546,-3.055) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (8.1055,-2.2142) -- (8.7721,-2.2142) -- (8.1055,-3.055) -- (8.7721,-3.055) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (12.3231,-2.2142) -- (12.9897,-2.2142) -- (12.3231,-3.055) -- (12.9897,-3.055) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-2.6359) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (-0.3295,-5.6409) -- (0.3371,-5.6409) -- (-0.3295,-6.4818) -- (0.3371,-6.4818) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-6.0627) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (3.888,-5.6409) -- (4.5546,-5.6409) -- (3.888,-6.4818) -- (4.5546,-6.4818) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-6.0627) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (8.1055,-5.6409) -- (8.7721,-5.6409) -- (8.1055,-6.4818) -- (8.7721,-6.4818) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-6.0627) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (12.3231,-5.6409) -- (12.9897,-5.6409) -- (12.3231,-6.4818) -- (12.9897,-6.4818) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-6.0627) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (-0.3163,-9.0677) -- (0.3202,-9.0677) -- (-0.3163,-9.9085) -- (0.3202,-9.9085) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-9.4894) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (3.9012,-9.0677) -- (4.5377,-9.0677) -- (3.9012,-9.9085) -- (4.5377,-9.9085) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-9.4894) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (8.1187,-9.0677) -- (8.7553,-9.0677) -- (8.1187,-9.9085) -- (8.7553,-9.9085) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-9.4894) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (12.3362,-9.0677) -- (12.9728,-9.0677) -- (12.3362,-9.9085) -- (12.9728,-9.9085) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-9.4894) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (-0.3427,-12.4944) -- (0.339,-12.4944) -- (-0.3427,-13.3352) -- (0.339,-13.3352) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-12.9161) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.8748,-12.4944) -- (4.5565,-12.4944) -- (3.8748,-13.3352) -- (4.5565,-13.3352) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-12.9161) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (8.0924,-12.4944) -- (8.774,-12.4944) -- (8.0924,-13.3352) -- (8.774,-13.3352) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-12.9161) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (12.3099,-12.4944) -- (12.9915,-12.4944) -- (12.3099,-13.3352) -- (12.9915,-13.3352) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-12.9161) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3031,-15.9211) -- (0.3159,-15.9211) -- (-0.3031,-16.762) -- (0.3159,-16.762) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-16.3429) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (3.9144,-15.9211) -- (4.5334,-15.9211) -- (3.9144,-16.762) -- (4.5334,-16.762) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-16.3429) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (8.1319,-15.9211) -- (8.7509,-15.9211) -- (8.1319,-16.762) -- (8.7509,-16.762) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-16.3429) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (12.3494,-15.9211) -- (12.9685,-15.9211) -- (12.3494,-16.762) -- (12.9685,-16.762) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-16.3429) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (-0.3427,-19.3479) -- (0.3515,-19.3479) -- (-0.3427,-20.1887) -- (0.3515,-20.1887) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-19.7696) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.8748,-19.3479) -- (4.569,-19.3479) -- (3.8748,-20.1887) -- (4.569,-20.1887) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-19.7696) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (8.0924,-19.3479) -- (8.7866,-19.3479) -- (8.0924,-20.1887) -- (8.7866,-20.1887) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-19.7696) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (12.3099,-19.3479) -- (13.0041,-19.3479) -- (12.3099,-20.1887) -- (13.0041,-20.1887) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-19.7696) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-22.7746) -- (0.3178,-22.7746) -- (-0.3163,-23.6154) -- (0.3178,-23.6154) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-23.1963) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.9012,-22.7746) -- (4.5353,-22.7746) -- (3.9012,-23.6154) -- (4.5353,-23.6154) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-23.1963) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (8.1187,-22.7746) -- (8.7528,-22.7746) -- (8.1187,-23.6154) -- (8.7528,-23.6154) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-23.1963) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (12.3362,-22.7746) -- (12.9703,-22.7746) -- (12.3362,-23.6154) -- (12.9703,-23.6154) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-23.1963) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.3427,-26.2013) -- (0.3367,-26.2013) -- (-0.3427,-27.0422) -- (0.3367,-27.0422) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-26.6231) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (3.8748,-26.2013) -- (4.5542,-26.2013) -- (3.8748,-27.0422) -- (4.5542,-27.0422) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-26.6231) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (8.0924,-26.2013) -- (8.7717,-26.2013) -- (8.0924,-27.0422) -- (8.7717,-27.0422) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-26.6231) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (12.3099,-26.2013) -- (12.9893,-26.2013) -- (12.3099,-27.0422) -- (12.9893,-27.0422) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-26.6231) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (-0.3427,-29.6281) -- (0.3515,-29.6281) -- (-0.3427,-30.4689) -- (0.3515,-30.4689) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-30.0498) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.8748,-29.6281) -- (4.569,-29.6281) -- (3.8748,-30.4689) -- (4.569,-30.4689) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-30.0498) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (8.0924,-29.6281) -- (8.7866,-29.6281) -- (8.0924,-30.4689) -- (8.7866,-30.4689) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-30.0498) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (12.3099,-29.6281) -- (13.0041,-29.6281) -- (12.3099,-30.4689) -- (13.0041,-30.4689) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-30.0498) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-33.0548) -- (0.3178,-33.0548) -- (-0.3163,-33.8956) -- (0.3178,-33.8956) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-33.4765) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.9012,-33.0548) -- (4.5353,-33.0548) -- (3.9012,-33.8956) -- (4.5353,-33.8956) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-33.4765) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (8.1187,-33.0548) -- (8.7528,-33.0548) -- (8.1187,-33.8956) -- (8.7528,-33.8956) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-33.4765) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (12.3362,-33.0548) -- (12.9703,-33.0548) -- (12.3362,-33.8956) -- (12.9703,-33.8956) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-33.4765) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.369,-36.4815) -- (0.3668,-36.4815) -- (-0.369,-37.3224) -- (0.3668,-37.3224) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-36.9033) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.8485,-36.4815) -- (4.5843,-36.4815) -- (3.8485,-37.3224) -- (4.5843,-37.3224) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-36.9033) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (8.066,-36.4815) -- (8.8018,-36.4815) -- (8.066,-37.3224) -- (8.8018,-37.3224) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-36.9033) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (12.2835,-36.4815) -- (13.0193,-36.4815) -- (12.2835,-37.3224) -- (13.0193,-37.3224) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-36.9033) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-39.9083) -- (0.3668,-39.9083) -- (-0.369,-40.7491) -- (0.3668,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.8485,-39.9083) -- (4.5843,-39.9083) -- (3.8485,-40.7491) -- (4.5843,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (8.066,-39.9083) -- (8.8018,-39.9083) -- (8.066,-40.7491) -- (8.8018,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (12.2835,-39.9083) -- (13.0193,-39.9083) -- (12.2835,-40.7491) -- (13.0193,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-43.335) -- (0.3668,-43.335) -- (-0.369,-44.1758) -- (0.3668,-44.1758) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-43.7567) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.8485,-43.335) -- (4.5843,-43.335) -- (3.8485,-44.1758) -- (4.5843,-44.1758) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-43.7567) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (8.066,-43.335) -- (8.8018,-43.335) -- (8.066,-44.1758) -- (8.8018,-44.1758) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-43.7567) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (12.2835,-43.335) -- (13.0193,-43.335) -- (12.2835,-44.1758) -- (13.0193,-44.1758) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-43.7567) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.3559,-46.7617) -- (0.3635,-46.7617) -- (-0.3559,-47.6026) -- (0.3635,-47.6026) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-47.1835) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.8617,-46.7617) -- (4.581,-46.7617) -- (3.8617,-47.6026) -- (4.581,-47.6026) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-47.1835) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (8.0792,-46.7617) -- (8.7985,-46.7617) -- (8.0792,-47.6026) -- (8.7985,-47.6026) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-47.1835) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (12.2967,-46.7617) -- (13.016,-46.7617) -- (12.2967,-47.6026) -- (13.016,-47.6026) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-47.1835) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-50.1885) -- (0.3635,-50.1885) -- (-0.3559,-51.0293) -- (0.3635,-51.0293) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-50.6102) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.8617,-50.1885) -- (4.581,-50.1885) -- (3.8617,-51.0293) -- (4.581,-51.0293) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-50.6102) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (8.0792,-50.1885) -- (8.7985,-50.1885) -- (8.0792,-51.0293) -- (8.7985,-51.0293) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-50.6102) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (12.2967,-50.1885) -- (13.016,-50.1885) -- (12.2967,-51.0293) -- (13.016,-51.0293) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-50.6102) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.369,-57.0419) -- (0.3723,-57.0419) -- (-0.369,-57.8828) -- (0.3723,-57.8828) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-57.4637) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (3.8485,-57.0419) -- (4.5898,-57.0419) -- (3.8485,-57.8828) -- (4.5898,-57.8828) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-57.4637) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (8.066,-57.0419) -- (8.8074,-57.0419) -- (8.066,-57.8828) -- (8.8074,-57.8828) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-57.4637) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (12.2835,-57.0419) -- (13.0249,-57.0419) -- (12.2835,-57.8828) -- (13.0249,-57.8828) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-57.4637) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (-0.3427,-60.4687) -- (0.3515,-60.4687) -- (-0.3427,-61.3095) -- (0.3515,-61.3095) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-60.8904) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.8748,-60.4687) -- (4.569,-60.4687) -- (3.8748,-61.3095) -- (4.569,-61.3095) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-60.8904) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (8.0924,-60.4687) -- (8.7866,-60.4687) -- (8.0924,-61.3095) -- (8.7866,-61.3095) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-60.8904) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (12.3099,-60.4687) -- (13.0041,-60.4687) -- (12.3099,-61.3095) -- (13.0041,-61.3095) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-60.8904) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3559,-63.1046) -- (0.3554,-63.1046) -- (-0.3559,-63.9454) -- (0.3554,-63.9454) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-63.5264) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (3.8617,-63.1046) -- (4.573,-63.1046) -- (3.8617,-63.9454) -- (4.573,-63.9454) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-63.5264) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (8.0792,-63.1046) -- (8.7905,-63.1046) -- (8.0792,-63.9454) -- (8.7905,-63.9454) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-63.5264) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (12.2967,-63.1046) -- (13.008,-63.1046) -- (12.2967,-63.9454) -- (13.008,-63.9454) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-63.5264) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (-0.3559,-67.3221) -- (0.3635,-67.3221) -- (-0.3559,-68.163) -- (0.3635,-68.163) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-67.7439) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (3.8617,-67.3221) -- (4.581,-67.3221) -- (3.8617,-68.163) -- (4.581,-68.163) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-67.7439) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (8.0792,-67.3221) -- (8.7985,-67.3221) -- (8.0792,-68.163) -- (8.7985,-68.163) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-67.7439) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (12.2967,-67.3221) -- (13.016,-67.3221) -- (12.2967,-68.163) -- (13.016,-68.163) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-67.7439) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (-0.3427,-70.2744) -- (0.339,-70.2744) -- (-0.3427,-71.1152) -- (0.339,-71.1152) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-70.6961) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.8748,-70.2744) -- (4.5565,-70.2744) -- (3.8748,-71.1152) -- (4.5565,-71.1152) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-70.6961) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (8.0924,-70.2744) -- (8.774,-70.2744) -- (8.0924,-71.1152) -- (8.774,-71.1152) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-70.6961) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (12.3099,-70.2744) -- (12.9915,-70.2744) -- (12.3099,-71.1152) -- (12.9915,-71.1152) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-70.6961) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3427,-73.7011) -- (0.339,-73.7011) -- (-0.3427,-74.5419) -- (0.339,-74.5419) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-74.1229) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.8748,-73.7011) -- (4.5565,-73.7011) -- (3.8748,-74.5419) -- (4.5565,-74.5419) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-74.1229) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (8.0924,-73.7011) -- (8.774,-73.7011) -- (8.0924,-74.5419) -- (8.774,-74.5419) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-74.1229) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (12.3099,-73.7011) -- (12.9915,-73.7011) -- (12.3099,-74.5419) -- (12.9915,-74.5419) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-74.1229) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3295,-77.1279) -- (0.3371,-77.1279) -- (-0.3295,-77.9687) -- (0.3371,-77.9687) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-77.5496) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (3.888,-77.1279) -- (4.5546,-77.1279) -- (3.888,-77.9687) -- (4.5546,-77.9687) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-77.5496) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (8.1055,-77.1279) -- (8.7721,-77.1279) -- (8.1055,-77.9687) -- (8.7721,-77.9687) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-77.5496) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (12.3231,-77.1279) -- (12.9897,-77.1279) -- (12.3231,-77.9687) -- (12.9897,-77.9687) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-77.5496) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (-0.3163,-80.5546) -- (0.3202,-80.5546) -- (-0.3163,-81.3954) -- (0.3202,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (3.9012,-80.5546) -- (4.5377,-80.5546) -- (3.9012,-81.3954) -- (4.5377,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (8.1187,-80.5546) -- (8.7553,-80.5546) -- (8.1187,-81.3954) -- (8.7553,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (12.3362,-80.5546) -- (12.9728,-80.5546) -- (12.3362,-81.3954) -- (12.9728,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (-0.3427,-83.9813) -- (0.3515,-83.9813) -- (-0.3427,-84.8221) -- (0.3515,-84.8221) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-84.4031) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.8748,-83.9813) -- (4.569,-83.9813) -- (3.8748,-84.8221) -- (4.569,-84.8221) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-84.4031) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (8.0924,-83.9813) -- (8.7866,-83.9813) -- (8.0924,-84.8221) -- (8.7866,-84.8221) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-84.4031) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (12.3099,-83.9813) -- (13.0041,-83.9813) -- (12.3099,-84.8221) -- (13.0041,-84.8221) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-84.4031) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-87.4081) -- (0.3178,-87.4081) -- (-0.3163,-88.2489) -- (0.3178,-88.2489) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-87.8298) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.9012,-87.4081) -- (4.5353,-87.4081) -- (3.9012,-88.2489) -- (4.5353,-88.2489) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-87.8298) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (8.1187,-87.4081) -- (8.7528,-87.4081) -- (8.1187,-88.2489) -- (8.7528,-88.2489) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-87.8298) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (12.3362,-87.4081) -- (12.9703,-87.4081) -- (12.3362,-88.2489) -- (12.9703,-88.2489) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-87.8298) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.3427,-90.8348) -- (0.3515,-90.8348) -- (-0.3427,-91.6756) -- (0.3515,-91.6756) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-91.2565) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.8748,-90.8348) -- (4.569,-90.8348) -- (3.8748,-91.6756) -- (4.569,-91.6756) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-91.2565) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (8.0924,-90.8348) -- (8.7866,-90.8348) -- (8.0924,-91.6756) -- (8.7866,-91.6756) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-91.2565) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (12.3099,-90.8348) -- (13.0041,-90.8348) -- (12.3099,-91.6756) -- (13.0041,-91.6756) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-91.2565) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-94.2615) -- (0.3178,-94.2615) -- (-0.3163,-95.1023) -- (0.3178,-95.1023) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-94.6833) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.9012,-94.2615) -- (4.5353,-94.2615) -- (3.9012,-95.1023) -- (4.5353,-95.1023) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-94.6833) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (8.1187,-94.2615) -- (8.7528,-94.2615) -- (8.1187,-95.1023) -- (8.7528,-95.1023) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-94.6833) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (12.3362,-94.2615) -- (12.9703,-94.2615) -- (12.3362,-95.1023) -- (12.9703,-95.1023) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-94.6833) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.3427,-97.6883) -- (0.3367,-97.6883) -- (-0.3427,-98.5291) -- (0.3367,-98.5291) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-98.11) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (3.8748,-97.6883) -- (4.5542,-97.6883) -- (3.8748,-98.5291) -- (4.5542,-98.5291) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-98.11) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (8.0924,-97.6883) -- (8.7717,-97.6883) -- (8.0924,-98.5291) -- (8.7717,-98.5291) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-98.11) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (12.3099,-97.6883) -- (12.9893,-97.6883) -- (12.3099,-98.5291) -- (12.9893,-98.5291) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-98.11) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (-0.369,-101.115) -- (0.3668,-101.115) -- (-0.369,-101.9558) -- (0.3668,-101.9558) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-101.5367) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.8485,-101.115) -- (4.5843,-101.115) -- (3.8485,-101.9558) -- (4.5843,-101.9558) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-101.5367) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (8.066,-101.115) -- (8.8018,-101.115) -- (8.066,-101.9558) -- (8.8018,-101.9558) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-101.5367) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (12.2835,-101.115) -- (13.0193,-101.115) -- (12.2835,-101.9558) -- (13.0193,-101.9558) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-101.5367) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-104.5417) -- (0.3668,-104.5417) -- (-0.369,-105.3825) -- (0.3668,-105.3825) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-104.9635) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.8485,-104.5417) -- (4.5843,-104.5417) -- (3.8485,-105.3825) -- (4.5843,-105.3825) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-104.9635) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (8.066,-104.5417) -- (8.8018,-104.5417) -- (8.066,-105.3825) -- (8.8018,-105.3825) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-104.9635) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (12.2835,-104.5417) -- (13.0193,-104.5417) -- (12.2835,-105.3825) -- (13.0193,-105.3825) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-104.9635) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-107.9685) -- (0.3668,-107.9685) -- (-0.369,-108.8093) -- (0.3668,-108.8093) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-108.3902) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.8485,-107.9685) -- (4.5843,-107.9685) -- (3.8485,-108.8093) -- (4.5843,-108.8093) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-108.3902) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (8.066,-107.9685) -- (8.8018,-107.9685) -- (8.066,-108.8093) -- (8.8018,-108.8093) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-108.3902) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (12.2835,-107.9685) -- (13.0193,-107.9685) -- (12.2835,-108.8093) -- (13.0193,-108.8093) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-108.3902) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.4086,-111.0789) -- (0.417,-111.0789) -- (-0.4086,-111.9197) -- (0.417,-111.9197) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-111.5006) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.8089,-111.0789) -- (4.6345,-111.0789) -- (3.8089,-111.9197) -- (4.6345,-111.9197) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-111.5006) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (8.0265,-111.0789) -- (8.8521,-111.0789) -- (8.0265,-111.9197) -- (8.8521,-111.9197) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-111.5006) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (12.244,-111.0789) -- (13.0696,-111.0789) -- (12.244,-111.9197) -- (13.0696,-111.9197) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-111.5006) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-114.5056) -- (0.417,-114.5056) -- (-0.4086,-115.3464) -- (0.417,-115.3464) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-114.9274) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.8089,-114.5056) -- (4.6345,-114.5056) -- (3.8089,-115.3464) -- (4.6345,-115.3464) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-114.9274) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (8.0265,-114.5056) -- (8.8521,-114.5056) -- (8.0265,-115.3464) -- (8.8521,-115.3464) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-114.9274) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (12.244,-114.5056) -- (13.0696,-114.5056) -- (12.244,-115.3464) -- (13.0696,-115.3464) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-114.9274) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-117.9323) -- (0.417,-117.9323) -- (-0.4086,-118.7732) -- (0.417,-118.7732) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-118.3541) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.8089,-117.9323) -- (4.6345,-117.9323) -- (3.8089,-118.7732) -- (4.6345,-118.7732) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-118.3541) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (8.0265,-117.9323) -- (8.8521,-117.9323) -- (8.0265,-118.7732) -- (8.8521,-118.7732) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-118.3541) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (12.244,-117.9323) -- (13.0696,-117.9323) -- (12.244,-118.7732) -- (13.0696,-118.7732) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-118.3541) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-121.3591) -- (0.417,-121.3591) -- (-0.4086,-122.1999) -- (0.417,-122.1999) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-121.7808) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.8089,-121.3591) -- (4.6345,-121.3591) -- (3.8089,-122.1999) -- (4.6345,-122.1999) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-121.7808) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (8.0265,-121.3591) -- (8.8521,-121.3591) -- (8.0265,-122.1999) -- (8.8521,-122.1999) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-121.7808) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (12.244,-121.3591) -- (13.0696,-121.3591) -- (12.244,-122.1999) -- (13.0696,-122.1999) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-121.7808) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-124.7858) -- (0.417,-124.7858) -- (-0.4086,-125.6266) -- (0.417,-125.6266) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-125.2076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.8089,-124.7858) -- (4.6345,-124.7858) -- (3.8089,-125.6266) -- (4.6345,-125.6266) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-125.2076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (8.0265,-124.7858) -- (8.8521,-124.7858) -- (8.0265,-125.6266) -- (8.8521,-125.6266) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-125.2076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (12.244,-124.7858) -- (13.0696,-124.7858) -- (12.244,-125.6266) -- (13.0696,-125.6266) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-125.2076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-128.2125) -- (0.417,-128.2125) -- (-0.4086,-129.0534) -- (0.417,-129.0534) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-128.6343) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.8089,-128.2125) -- (4.6345,-128.2125) -- (3.8089,-129.0534) -- (4.6345,-129.0534) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-128.6343) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (8.0265,-128.2125) -- (8.8521,-128.2125) -- (8.0265,-129.0534) -- (8.8521,-129.0534) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-128.6343) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (12.244,-128.2125) -- (13.0696,-128.2125) -- (12.244,-129.0534) -- (13.0696,-129.0534) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-128.6343) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.3559,-131.9556) -- (0.3635,-131.9556) -- (-0.3559,-132.7964) -- (0.3635,-132.7964) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-132.3773) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.8617,-131.9556) -- (4.581,-131.9556) -- (3.8617,-132.7964) -- (4.581,-132.7964) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-132.3773) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (8.0792,-131.9556) -- (8.7985,-131.9556) -- (8.0792,-132.7964) -- (8.7985,-132.7964) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-132.3773) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (12.2967,-131.9556) -- (13.016,-131.9556) -- (12.2967,-132.7964) -- (13.016,-132.7964) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-132.3773) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-135.3823) -- (0.3635,-135.3823) -- (-0.3559,-136.2231) -- (0.3635,-136.2231) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-135.8041) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.8617,-135.3823) -- (4.581,-135.3823) -- (3.8617,-136.2231) -- (4.581,-136.2231) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-135.8041) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (8.0792,-135.3823) -- (8.7985,-135.3823) -- (8.0792,-136.2231) -- (8.7985,-136.2231) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-135.8041) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (12.2967,-135.3823) -- (13.016,-135.3823) -- (12.2967,-136.2231) -- (13.016,-136.2231) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-135.8041) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-138.809) -- (0.3635,-138.809) -- (-0.3559,-139.6499) -- (0.3635,-139.6499) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-139.2308) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.8617,-138.809) -- (4.581,-138.809) -- (3.8617,-139.6499) -- (4.581,-139.6499) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-139.2308) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (8.0792,-138.809) -- (8.7985,-138.809) -- (8.0792,-139.6499) -- (8.7985,-139.6499) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-139.2308) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (12.2967,-138.809) -- (13.016,-138.809) -- (12.2967,-139.6499) -- (13.016,-139.6499) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-139.2308) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-142.2358) -- (0.3635,-142.2358) -- (-0.3559,-143.0766) -- (0.3635,-143.0766) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-142.6575) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.8617,-142.2358) -- (4.581,-142.2358) -- (3.8617,-143.0766) -- (4.581,-143.0766) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-142.6575) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (8.0792,-142.2358) -- (8.7985,-142.2358) -- (8.0792,-143.0766) -- (8.7985,-143.0766) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-142.6575) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (12.2967,-142.2358) -- (13.016,-142.2358) -- (12.2967,-143.0766) -- (13.016,-143.0766) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-142.6575) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-145.0826) -- (0.3635,-145.0826) -- (-0.3559,-145.9234) -- (0.3635,-145.9234) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-145.5044) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.8617,-145.0826) -- (4.581,-145.0826) -- (3.8617,-145.9234) -- (4.581,-145.9234) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-145.5044) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (8.0792,-145.0826) -- (8.7985,-145.0826) -- (8.0792,-145.9234) -- (8.7985,-145.9234) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-145.5044) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (12.2967,-145.0826) -- (13.016,-145.0826) -- (12.2967,-145.9234) -- (13.016,-145.9234) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-145.5044) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.4349,-149.0892) -- (0.4391,-149.0892) -- (-0.4349,-149.9301) -- (0.4391,-149.9301) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-149.511) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (3.7826,-149.0892) -- (4.6566,-149.0892) -- (3.7826,-149.9301) -- (4.6566,-149.9301) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-149.511) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (8.0001,-149.0892) -- (8.8741,-149.0892) -- (8.0001,-149.9301) -- (8.8741,-149.9301) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-149.511) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (12.2176,-149.0892) -- (13.0916,-149.0892) -- (12.2176,-149.9301) -- (13.0916,-149.9301) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-149.511) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (-0.3559,-152.516) -- (0.3554,-152.516) -- (-0.3559,-153.3568) -- (0.3554,-153.3568) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-152.9377) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (3.8617,-152.516) -- (4.573,-152.516) -- (3.8617,-153.3568) -- (4.573,-153.3568) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-152.9377) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (8.0792,-152.516) -- (8.7905,-152.516) -- (8.0792,-153.3568) -- (8.7905,-153.3568) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-152.9377) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (12.2967,-152.516) -- (13.008,-152.516) -- (12.2967,-153.3568) -- (13.008,-153.3568) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-152.9377) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (-0.3559,-162.4799) -- (0.3554,-162.4799) -- (-0.3559,-163.3207) -- (0.3554,-163.3207) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-162.9016) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (3.8617,-162.4799) -- (4.573,-162.4799) -- (3.8617,-163.3207) -- (4.573,-163.3207) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-162.9016) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (8.0792,-162.4799) -- (8.7905,-162.4799) -- (8.0792,-163.3207) -- (8.7905,-163.3207) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-162.9016) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (12.2967,-162.4799) -- (13.008,-162.4799) -- (12.2967,-163.3207) -- (13.008,-163.3207) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-162.9016) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (-0.3163,-165.9066) -- (0.3202,-165.9066) -- (-0.3163,-166.7474) -- (0.3202,-166.7474) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-166.3284) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (3.9012,-165.9066) -- (4.5377,-165.9066) -- (3.9012,-166.7474) -- (4.5377,-166.7474) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-166.3284) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (8.1187,-165.9066) -- (8.7553,-165.9066) -- (8.1187,-166.7474) -- (8.7553,-166.7474) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-166.3284) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (12.3362,-165.9066) -- (12.9728,-165.9066) -- (12.3362,-166.7474) -- (12.9728,-166.7474) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-166.3284) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (-0.369,-169.6496) -- (0.3754,-169.6496) -- (-0.369,-170.4905) -- (0.3754,-170.4905) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-170.0714) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-169.6496) -- (4.5929,-169.6496) -- (3.8485,-170.4905) -- (4.5929,-170.4905) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-170.0714) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-169.6496) -- (8.8105,-169.6496) -- (8.066,-170.4905) -- (8.8105,-170.4905) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-170.0714) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-169.6496) -- (13.028,-169.6496) -- (12.2835,-170.4905) -- (13.028,-170.4905) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-170.0714) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-173.0764) -- (0.3754,-173.0764) -- (-0.369,-173.9172) -- (0.3754,-173.9172) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-173.4981) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-173.0764) -- (4.5929,-173.0764) -- (3.8485,-173.9172) -- (4.5929,-173.9172) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-173.4981) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-173.0764) -- (8.8105,-173.0764) -- (8.066,-173.9172) -- (8.8105,-173.9172) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-173.4981) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-173.0764) -- (13.028,-173.0764) -- (12.2835,-173.9172) -- (13.028,-173.9172) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-173.4981) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-176.5031) -- (0.3754,-176.5031) -- (-0.369,-177.3439) -- (0.3754,-177.3439) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-176.9249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-176.5031) -- (4.5929,-176.5031) -- (3.8485,-177.3439) -- (4.5929,-177.3439) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-176.9249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-176.5031) -- (8.8105,-176.5031) -- (8.066,-177.3439) -- (8.8105,-177.3439) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-176.9249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-176.5031) -- (13.028,-176.5031) -- (12.2835,-177.3439) -- (13.028,-177.3439) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-176.9249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-179.9298) -- (0.3754,-179.9298) -- (-0.369,-180.7707) -- (0.3754,-180.7707) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-180.3516) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-179.9298) -- (4.5929,-179.9298) -- (3.8485,-180.7707) -- (4.5929,-180.7707) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-180.3516) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-179.9298) -- (8.8105,-179.9298) -- (8.066,-180.7707) -- (8.8105,-180.7707) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-180.3516) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-179.9298) -- (13.028,-179.9298) -- (12.2835,-180.7707) -- (13.028,-180.7707) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-180.3516) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-183.3566) -- (0.3754,-183.3566) -- (-0.369,-184.1974) -- (0.3754,-184.1974) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-183.7783) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-183.3566) -- (4.5929,-183.3566) -- (3.8485,-184.1974) -- (4.5929,-184.1974) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-183.7783) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-183.3566) -- (8.8105,-183.3566) -- (8.066,-184.1974) -- (8.8105,-184.1974) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-183.7783) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-183.3566) -- (13.028,-183.3566) -- (12.2835,-184.1974) -- (13.028,-184.1974) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-183.7783) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-186.7833) -- (0.3754,-186.7833) -- (-0.369,-187.6241) -- (0.3754,-187.6241) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-187.2051) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-186.7833) -- (4.5929,-186.7833) -- (3.8485,-187.6241) -- (4.5929,-187.6241) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-187.2051) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-186.7833) -- (8.8105,-186.7833) -- (8.066,-187.6241) -- (8.8105,-187.6241) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-187.2051) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-186.7833) -- (13.028,-186.7833) -- (12.2835,-187.6241) -- (13.028,-187.6241) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-187.2051) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-190.21) -- (0.3754,-190.21) -- (-0.369,-191.0509) -- (0.3754,-191.0509) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-190.6318) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-190.21) -- (4.5929,-190.21) -- (3.8485,-191.0509) -- (4.5929,-191.0509) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-190.6318) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-190.21) -- (8.8105,-190.21) -- (8.066,-191.0509) -- (8.8105,-191.0509) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-190.6318) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-190.21) -- (13.028,-190.21) -- (12.2835,-191.0509) -- (13.028,-191.0509) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-190.6318) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-193.6368) -- (0.3754,-193.6368) -- (-0.369,-194.4776) -- (0.3754,-194.4776) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-194.0585) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-193.6368) -- (4.5929,-193.6368) -- (3.8485,-194.4776) -- (4.5929,-194.4776) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-194.0585) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-193.6368) -- (8.8105,-193.6368) -- (8.066,-194.4776) -- (8.8105,-194.4776) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-194.0585) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-193.6368) -- (13.028,-193.6368) -- (12.2835,-194.4776) -- (13.028,-194.4776) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-194.0585) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-197.0635) -- (0.3754,-197.0635) -- (-0.369,-197.9043) -- (0.3754,-197.9043) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-197.4853) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-197.0635) -- (4.5929,-197.0635) -- (3.8485,-197.9043) -- (4.5929,-197.9043) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-197.4853) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-197.0635) -- (8.8105,-197.0635) -- (8.066,-197.9043) -- (8.8105,-197.9043) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-197.4853) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-197.0635) -- (13.028,-197.0635) -- (12.2835,-197.9043) -- (13.028,-197.9043) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-197.4853) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-200.4902) -- (0.3754,-200.4902) -- (-0.369,-201.3311) -- (0.3754,-201.3311) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-200.912) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.8485,-200.4902) -- (4.5929,-200.4902) -- (3.8485,-201.3311) -- (4.5929,-201.3311) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-200.912) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (8.066,-200.4902) -- (8.8105,-200.4902) -- (8.066,-201.3311) -- (8.8105,-201.3311) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-200.912) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (12.2835,-200.4902) -- (13.028,-200.4902) -- (12.2835,-201.3311) -- (13.028,-201.3311) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-200.912) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.5404,-207.3437) -- (0.5533,-207.3437) -- (-0.5404,-208.1845) -- (0.5533,-208.1845) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-207.7655) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (3.6771,-207.3437) -- (4.7709,-207.3437) -- (3.6771,-208.1845) -- (4.7709,-208.1845) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-207.7655) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (7.8947,-207.3437) -- (8.9884,-207.3437) -- (7.8947,-208.1845) -- (8.9884,-208.1845) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-207.7655) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (12.1122,-207.3437) -- (13.2059,-207.3437) -- (12.1122,-208.1845) -- (13.2059,-208.1845) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-207.7655) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (-0.3559,-210.7704) -- (0.347,-210.7704) -- (-0.3559,-211.6113) -- (0.347,-211.6113) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-211.1922) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (3.8617,-210.7704) -- (4.5645,-210.7704) -- (3.8617,-211.6113) -- (4.5645,-211.6113) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-211.1922) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (8.0792,-210.7704) -- (8.782,-210.7704) -- (8.0792,-211.6113) -- (8.782,-211.6113) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-211.1922) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (12.2967,-210.7704) -- (12.9996,-210.7704) -- (12.2967,-211.6113) -- (12.9996,-211.6113) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-211.1922) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (-0.3559,-214.1972) -- (0.347,-214.1972) -- (-0.3559,-215.038) -- (0.347,-215.038) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-214.6189) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (3.8617,-214.1972) -- (4.5645,-214.1972) -- (3.8617,-215.038) -- (4.5645,-215.038) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-214.6189) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (8.0792,-214.1972) -- (8.782,-214.1972) -- (8.0792,-215.038) -- (8.782,-215.038) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-214.6189) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (12.2967,-214.1972) -- (12.9996,-214.1972) -- (12.2967,-215.038) -- (12.9996,-215.038) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-214.6189) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (-0.3295,-221.0506) -- (0.3398,-221.0506) -- (-0.3295,-221.8915) -- (0.3398,-221.8915) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-221.4724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (3.888,-221.0506) -- (4.5573,-221.0506) -- (3.888,-221.8915) -- (4.5573,-221.8915) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-221.4724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (8.1055,-221.0506) -- (8.7748,-221.0506) -- (8.1055,-221.8915) -- (8.7748,-221.8915) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-221.4724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (12.3231,-221.0506) -- (12.9923,-221.0506) -- (12.3231,-221.8915) -- (12.9923,-221.8915) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-221.4724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (-0.3822,-224.4774) -- (0.3804,-224.4774) -- (-0.3822,-225.3182) -- (0.3804,-225.3182) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-224.8991) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (3.8353,-224.4774) -- (4.5979,-224.4774) -- (3.8353,-225.3182) -- (4.5979,-225.3182) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-224.8991) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (8.0528,-224.4774) -- (8.8154,-224.4774) -- (8.0528,-225.3182) -- (8.8154,-225.3182) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-224.8991) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (12.2703,-224.4774) -- (13.0329,-224.4774) -- (12.2703,-225.3182) -- (13.0329,-225.3182) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-224.8991) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (-0.4086,-227.9041) -- (0.4205,-227.9041) -- (-0.4086,-228.7449) -- (0.4205,-228.7449) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-228.3259) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (3.8089,-227.9041) -- (4.638,-227.9041) -- (3.8089,-228.7449) -- (4.638,-228.7449) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-228.3259) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (8.0265,-227.9041) -- (8.8556,-227.9041) -- (8.0265,-228.7449) -- (8.8556,-228.7449) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-228.3259) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (12.244,-227.9041) -- (13.0731,-227.9041) -- (12.244,-228.7449) -- (13.0731,-228.7449) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-228.3259) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (-0.514,-231.3308) -- (0.5247,-231.3308) -- (-0.514,-232.1717) -- (0.5247,-232.1717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-231.7526) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (3.7035,-231.3308) -- (4.7422,-231.3308) -- (3.7035,-232.1717) -- (4.7422,-232.1717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-231.7526) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (7.921,-231.3308) -- (8.9598,-231.3308) -- (7.921,-232.1717) -- (8.9598,-232.1717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-231.7526) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (12.1385,-231.3308) -- (13.1773,-231.3308) -- (12.1385,-232.1717) -- (13.1773,-232.1717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-231.7526) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (-0.5535,-234.7576) -- (0.5606,-234.7576) -- (-0.5535,-235.5984) -- (0.5606,-235.5984) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-235.1793) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (3.664,-234.7576) -- (4.7781,-234.7576) -- (3.664,-235.5984) -- (4.7781,-235.5984) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-235.1793) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (7.8815,-234.7576) -- (8.9956,-234.7576) -- (7.8815,-235.5984) -- (8.9956,-235.5984) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-235.1793) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (12.099,-234.7576) -- (13.2131,-234.7576) -- (12.099,-235.5984) -- (13.2131,-235.5984) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-235.1793) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (-0.3559,-238.1843) -- (0.3635,-238.1843) -- (-0.3559,-239.0251) -- (0.3635,-239.0251) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-238.6061) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (3.8617,-238.1843) -- (4.581,-238.1843) -- (3.8617,-239.0251) -- (4.581,-239.0251) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-238.6061) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (8.0792,-238.1843) -- (8.7985,-238.1843) -- (8.0792,-239.0251) -- (8.7985,-239.0251) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-238.6061) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (12.2967,-238.1843) -- (13.016,-238.1843) -- (12.2967,-239.0251) -- (13.016,-239.0251) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-238.6061) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (-0.3427,-241.611) -- (0.339,-241.611) -- (-0.3427,-242.4519) -- (0.339,-242.4519) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-242.0328) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.8748,-241.611) -- (4.5565,-241.611) -- (3.8748,-242.4519) -- (4.5565,-242.4519) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (4.2175,-242.0328) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (8.0924,-241.611) -- (8.774,-241.611) -- (8.0924,-242.4519) -- (8.774,-242.4519) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (8.435,-242.0328) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (12.3099,-241.611) -- (12.9915,-241.611) -- (12.3099,-242.4519) -- (12.9915,-242.4519) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (12.6526,-242.0328) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\end{circuitikz}

\end{document}
```