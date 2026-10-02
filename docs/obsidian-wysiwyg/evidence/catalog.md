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
\draw[draw=dcColor0, line width=1.5pt] (3.9539,1.0544) -- (3.9539,0.5272) (3.9539,-0.5272) -- (3.9539,-1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1912,0.5272) -- (4.1912,-0.5272) -- (3.7167,-0.5272) -- (3.7167,0.5272) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (8.9622,0) -- (8.435,0) (7.3807,0) -- (6.8535,0);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-0.2372) -- (7.3807,-0.2372) -- (7.3807,0.2372) -- (8.435,0.2372) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-1.0544) -- (11.8618,-0.5272) (11.8618,0.5272) -- (11.8618,1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6245,-0.5272) -- (11.6245,0.5272) -- (12.099,0.5272) -- (12.099,-0.5272) -- cycle;
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-3.1631) -- (-0.1582,-3.1631) (0.1582,-3.1631) -- (1.0544,-3.1631) (-0.1582,-2.715) -- (-0.1582,-3.6112) (0.1582,-2.715) -- (0.1582,-3.6112);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-2.1088) -- (3.9539,-3.005) (3.9539,-3.3213) -- (3.9539,-4.2175) (4.402,-3.005) -- (3.5058,-3.005) (4.402,-3.3213) -- (3.5058,-3.3213);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-3.1631) -- (8.066,-3.1631) (7.7497,-3.1631) -- (6.8535,-3.1631) (8.066,-3.6112) -- (8.066,-2.715) (7.7497,-3.6112) -- (7.7497,-2.715);
% Component: capacitor
% Condensatore
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-4.2175) -- (11.8618,-3.3213) (11.8618,-3.005) -- (11.8618,-2.1088) (11.4137,-3.3213) -- (12.3099,-3.3213) (11.4137,-3.005) -- (12.3099,-3.005);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-6.3263) -- (-0.1582,-6.3263) (0.2372,-6.3263) -- (1.0544,-6.3263) (-0.1582,-5.8782) -- (-0.1582,-6.7744) (0.2372,-5.8782) .. controls (0.1142,-6.1769) and (0.1142,-6.4756) .. (0.2372,-6.7744) (-0.5008,-5.9572) -- (-0.29,-5.9572) (-0.3954,-5.8518) -- (-0.3954,-6.0627);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-5.2719) -- (3.9539,-6.1681) (3.9539,-6.5635) -- (3.9539,-7.3807) (4.402,-6.1681) -- (3.5058,-6.1681) (4.402,-6.5635) .. controls (4.1033,-6.4405) and (3.8046,-6.4405) .. (3.5058,-6.5635) (4.323,-5.8254) -- (4.323,-6.0363) (4.4284,-5.9309) -- (4.2175,-5.9309);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-6.3263) -- (8.066,-6.3263) (7.6706,-6.3263) -- (6.8535,-6.3263) (8.066,-6.7744) -- (8.066,-5.8782) (7.6706,-6.7744) .. controls (7.7936,-6.4756) and (7.7936,-6.1769) .. (7.6706,-5.8782) (8.4087,-6.6953) -- (8.1978,-6.6953) (8.3032,-6.8007) -- (8.3032,-6.5899);
% Component: polarizedCapacitor
% Condensatore polarizzato
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-7.3807) -- (11.8618,-6.4844) (11.8618,-6.089) -- (11.8618,-5.2719) (11.4137,-6.4844) -- (12.3099,-6.4844) (11.4137,-6.089) .. controls (11.7124,-6.2121) and (12.0111,-6.2121) .. (12.3099,-6.089) (11.4927,-6.8271) -- (11.4927,-6.6162) (11.3873,-6.7217) -- (11.5982,-6.7217);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-9.4894) -- (-0.6326,-9.4894) .. controls (-0.6326,-9.0149) and (-0.3163,-9.0149) .. (-0.3163,-9.4894) .. controls (-0.3163,-9.0149) and (0,-9.0149) .. (0,-9.4894) .. controls (0,-9.0149) and (0.3163,-9.0149) .. (0.3163,-9.4894) .. controls (0.3163,-9.0149) and (0.6326,-9.0149) .. (0.6326,-9.4894) -- (1.0544,-9.4894);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-8.435) -- (3.9539,-8.8568) .. controls (4.4284,-8.8568) and (4.4284,-9.1731) .. (3.9539,-9.1731) .. controls (4.4284,-9.1731) and (4.4284,-9.4894) .. (3.9539,-9.4894) .. controls (4.4284,-9.4894) and (4.4284,-9.8057) .. (3.9539,-9.8057) .. controls (4.4284,-9.8057) and (4.4284,-10.122) .. (3.9539,-10.122) -- (3.9539,-10.5438);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-9.4894) -- (8.5405,-9.4894) .. controls (8.5405,-9.9639) and (8.2242,-9.9639) .. (8.2242,-9.4894) .. controls (8.2242,-9.9639) and (7.9078,-9.9639) .. (7.9078,-9.4894) .. controls (7.9078,-9.9639) and (7.5915,-9.9639) .. (7.5915,-9.4894) .. controls (7.5915,-9.9639) and (7.2752,-9.9639) .. (7.2752,-9.4894) -- (6.8535,-9.4894);
% Component: inductor
% Induttore
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-10.5438) -- (11.8618,-10.122) .. controls (11.3873,-10.122) and (11.3873,-9.8057) .. (11.8618,-9.8057) .. controls (11.3873,-9.8057) and (11.3873,-9.4894) .. (11.8618,-9.4894) .. controls (11.3873,-9.4894) and (11.3873,-9.1731) .. (11.8618,-9.1731) .. controls (11.3873,-9.1731) and (11.3873,-8.8568) .. (11.8618,-8.8568) -- (11.8618,-8.435);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-12.6526) -- (-0.5272,-12.6526) (0.5272,-12.6526) -- (1.0544,-12.6526);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-12.4153) -- (0.5272,-12.4153) -- (0.5272,-12.8898) -- (-0.5272,-12.8898) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.5535,-13.2325) -- (0.6063,-12.0463);
\draw[draw=dcColor0, line width=1.5pt] (0.4578,-12.0862) -- (0.6063,-12.0463) -- (0.5716,-12.196);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-11.5982) -- (3.9539,-12.1254) (3.9539,-13.1797) -- (3.9539,-13.7069);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1912,-12.1254) -- (4.1912,-13.1797) -- (3.7167,-13.1797) -- (3.7167,-12.1254) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.374,-12.099) -- (4.5602,-13.2588);
\draw[draw=dcColor0, line width=1.5pt] (4.5203,-13.1104) -- (4.5602,-13.2588) -- (4.4105,-13.2242);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-12.6526) -- (8.435,-12.6526) (7.3807,-12.6526) -- (6.8535,-12.6526);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-12.8898) -- (7.3807,-12.8898) -- (7.3807,-12.4153) -- (8.435,-12.4153) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.4614,-12.0726) -- (7.3016,-13.2588);
\draw[draw=dcColor0, line width=1.5pt] (7.45,-13.2189) -- (7.3016,-13.2588) -- (7.3362,-13.1091);
% Component: variableResistor
% Resistenza variabile
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-13.7069) -- (11.8618,-13.1797) (11.8618,-12.1254) -- (11.8618,-11.5982);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6245,-13.1797) -- (11.6245,-12.1254) -- (12.099,-12.1254) -- (12.099,-13.1797) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.4417,-13.2061) -- (11.2555,-12.0463);
\draw[draw=dcColor0, line width=1.5pt] (11.2954,-12.1947) -- (11.2555,-12.0463) -- (11.4052,-12.081);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-15.8157) -- (-0.5272,-15.8157) (0.5272,-15.8157) -- (1.0544,-15.8157);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-15.5785) -- (0.5272,-15.5785) -- (0.5272,-16.0529) -- (-0.5272,-16.0529) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0,-14.7613) -- (0,-15.5257);
\draw[draw=dcColor0, line width=1.5pt] (0.0791,-15.3939) -- (0,-15.5257) -- (-0.0791,-15.3939);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-14.7613) -- (3.9539,-15.2885) (3.9539,-16.3429) -- (3.9539,-16.8701);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1912,-15.2885) -- (4.1912,-16.3429) -- (3.7167,-16.3429) -- (3.7167,-15.2885) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (5.0083,-15.8157) -- (4.2439,-15.8157);
\draw[draw=dcColor0, line width=1.5pt] (4.3757,-15.8948) -- (4.2439,-15.8157) -- (4.3757,-15.7366);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-15.8157) -- (8.435,-15.8157) (7.3807,-15.8157) -- (6.8535,-15.8157);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-16.0529) -- (7.3807,-16.0529) -- (7.3807,-15.5785) -- (8.435,-15.5785) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-16.8701) -- (7.9078,-16.1056);
\draw[draw=dcColor0, line width=1.5pt] (7.8288,-16.2374) -- (7.9078,-16.1056) -- (7.9869,-16.2374);
% Component: potentiometer
% Potenziometro
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-16.8701) -- (11.8618,-16.3429) (11.8618,-15.2885) -- (11.8618,-14.7613);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6245,-16.3429) -- (11.6245,-15.2885) -- (12.099,-15.2885) -- (12.099,-16.3429) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (10.8074,-15.8157) -- (11.5718,-15.8157);
\draw[draw=dcColor0, line width=1.5pt] (11.44,-15.7366) -- (11.5718,-15.8157) -- (11.44,-15.8948);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-18.9788) -- (-0.5272,-18.9788) (0.5272,-18.9788) -- (1.0544,-18.9788);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-18.9788) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.29,-18.847) -- (-0.29,-19.1106) (-0.4218,-18.9788) -- (-0.1582,-18.9788) (0.1845,-18.9788) -- (0.3954,-18.9788);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-17.9244) -- (3.9539,-18.4516) (3.9539,-19.506) -- (3.9539,-20.0332);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-18.9788) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (4.0857,-18.6889) -- (3.8221,-18.6889) (3.9539,-18.5571) -- (3.9539,-18.8207) (3.9539,-19.1633) -- (3.9539,-19.3742);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-18.9788) -- (8.435,-18.9788) (7.3807,-18.9788) -- (6.8535,-18.9788);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-18.9788) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.1978,-19.1106) -- (8.1978,-18.847) (8.3296,-18.9788) -- (8.066,-18.9788) (7.7233,-18.9788) -- (7.5125,-18.9788);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-20.0332) -- (11.8618,-19.506) (11.8618,-18.4516) -- (11.8618,-17.9244);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-18.9788) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (11.73,-19.2688) -- (11.9936,-19.2688) (11.8618,-19.4006) -- (11.8618,-19.137) (11.8618,-18.7943) -- (11.8618,-18.5834);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-22.142) -- (-0.5272,-22.142) (0.5272,-22.142) -- (1.0544,-22.142);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-22.142) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.3163,-22.142) -- (0.3163,-22.142);
\draw[draw=dcColor0, line width=1.5pt] (0.1845,-22.0629) -- (0.3163,-22.142) -- (0.1845,-22.221);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-21.0876) -- (3.9539,-21.6148) (3.9539,-22.6692) -- (3.9539,-23.1963);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-22.142) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-21.8257) -- (3.9539,-22.4583);
\draw[draw=dcColor0, line width=1.5pt] (4.033,-22.3265) -- (3.9539,-22.4583) -- (3.8748,-22.3265);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-22.142) -- (8.435,-22.142) (7.3807,-22.142) -- (6.8535,-22.142);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-22.142) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.2242,-22.142) -- (7.5915,-22.142);
\draw[draw=dcColor0, line width=1.5pt] (7.7233,-22.221) -- (7.5915,-22.142) -- (7.7233,-22.0629);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-23.1963) -- (11.8618,-22.6692) (11.8618,-21.6148) -- (11.8618,-21.0876);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-22.142) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-22.4583) -- (11.8618,-21.8257);
\draw[draw=dcColor0, line width=1.5pt] (11.7827,-21.9575) -- (11.8618,-21.8257) -- (11.9408,-21.9575);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-25.3051) -- (-0.3163,-25.3051) (0.3163,-25.3051) -- (1.0544,-25.3051) (-0.3163,-24.8043) -- (-0.3163,-25.8059) (-0.1054,-25.0415) -- (-0.1054,-25.5687) (0.1054,-24.8043) -- (0.1054,-25.8059) (0.3163,-25.0415) -- (0.3163,-25.5687);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-24.2507) -- (3.9539,-24.9888) (3.9539,-25.6214) -- (3.9539,-26.3595) (4.4548,-24.9888) -- (3.4531,-24.9888) (4.2175,-25.1997) -- (3.6903,-25.1997) (4.4548,-25.4105) -- (3.4531,-25.4105) (4.2175,-25.6214) -- (3.6903,-25.6214);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-25.3051) -- (8.2242,-25.3051) (7.5915,-25.3051) -- (6.8535,-25.3051) (8.2242,-25.8059) -- (8.2242,-24.8043) (8.0133,-25.5687) -- (8.0133,-25.0415) (7.8024,-25.8059) -- (7.8024,-24.8043) (7.5915,-25.5687) -- (7.5915,-25.0415);
% Component: battery
% Batteria multicella
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-26.3595) -- (11.8618,-25.6214) (11.8618,-24.9888) -- (11.8618,-24.2507) (11.3609,-25.6214) -- (12.3626,-25.6214) (11.5982,-25.4105) -- (12.1254,-25.4105) (11.3609,-25.1997) -- (12.3626,-25.1997) (11.5982,-24.9888) -- (12.1254,-24.9888);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-28.4682) -- (-0.5272,-28.4682) (0.5272,-28.4682) -- (1.0544,-28.4682);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5799,-28.4682) -- (0,-27.8883) -- (0.5799,-28.4682) -- (0,-29.0482) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.29,-28.3364) -- (-0.29,-28.6) (-0.4218,-28.4682) -- (-0.1582,-28.4682) (0.1845,-28.4682) -- (0.3954,-28.4682);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-27.4139) -- (3.9539,-27.9411) (3.9539,-28.9954) -- (3.9539,-29.5226);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-27.8883) -- (4.5338,-28.4682) -- (3.9539,-29.0482) -- (3.374,-28.4682) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.0857,-28.1783) -- (3.8221,-28.1783) (3.9539,-28.0465) -- (3.9539,-28.3101) (3.9539,-28.6528) -- (3.9539,-28.8636);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-28.4682) -- (8.435,-28.4682) (7.3807,-28.4682) -- (6.8535,-28.4682);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.4878,-28.4682) -- (7.9078,-29.0482) -- (7.3279,-28.4682) -- (7.9078,-27.8883) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.1978,-28.6) -- (8.1978,-28.3364) (8.3296,-28.4682) -- (8.066,-28.4682) (7.7233,-28.4682) -- (7.5125,-28.4682);
% Component: dependentVoltage
% Tensione dipendente
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-29.5226) -- (11.8618,-28.9954) (11.8618,-27.9411) -- (11.8618,-27.4139);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-29.0482) -- (11.2819,-28.4682) -- (11.8618,-27.8883) -- (12.4417,-28.4682) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.73,-28.7582) -- (11.9936,-28.7582) (11.8618,-28.89) -- (11.8618,-28.6264) (11.8618,-28.2837) -- (11.8618,-28.0729);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-31.6314) -- (-0.5272,-31.6314) (0.5272,-31.6314) -- (1.0544,-31.6314);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5799,-31.6314) -- (0,-31.0515) -- (0.5799,-31.6314) -- (0,-32.2113) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.3163,-31.6314) -- (0.3163,-31.6314);
\draw[draw=dcColor0, line width=1.5pt] (0.1845,-31.5523) -- (0.3163,-31.6314) -- (0.1845,-31.7105);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-30.577) -- (3.9539,-31.1042) (3.9539,-32.1586) -- (3.9539,-32.6858);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-31.0515) -- (4.5338,-31.6314) -- (3.9539,-32.2113) -- (3.374,-31.6314) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-31.3151) -- (3.9539,-31.9477);
\draw[draw=dcColor0, line width=1.5pt] (4.033,-31.8159) -- (3.9539,-31.9477) -- (3.8748,-31.8159);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-31.6314) -- (8.435,-31.6314) (7.3807,-31.6314) -- (6.8535,-31.6314);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.4878,-31.6314) -- (7.9078,-32.2113) -- (7.3279,-31.6314) -- (7.9078,-31.0515) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.2242,-31.6314) -- (7.5915,-31.6314);
\draw[draw=dcColor0, line width=1.5pt] (7.7233,-31.7105) -- (7.5915,-31.6314) -- (7.7233,-31.5523);
% Component: dependentCurrent
% Corrente dipendente
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-32.6858) -- (11.8618,-32.1586) (11.8618,-31.1042) -- (11.8618,-30.577);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-32.2113) -- (11.2819,-31.6314) -- (11.8618,-31.0515) -- (12.4417,-31.6314) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-31.9477) -- (11.8618,-31.3151);
\draw[draw=dcColor0, line width=1.5pt] (11.7827,-31.4469) -- (11.8618,-31.3151) -- (11.9408,-31.4469);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-34.4255) -- (0.3163,-34.7945) -- (-0.369,-35.1636) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-34.7945) -- (-0.369,-34.7945) (0.3163,-34.7945) -- (1.0544,-34.7945);
\draw[draw=dcColor0, line width=1.5pt] (0.3163,-34.4255) -- (0.3163,-35.1636);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.323,-34.4255) -- (3.9539,-35.1108) -- (3.5849,-34.4255) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-33.7401) -- (3.9539,-34.4255) (3.9539,-35.1108) -- (3.9539,-35.8489);
\draw[draw=dcColor0, line width=1.5pt] (4.323,-35.1108) -- (3.5849,-35.1108);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2769,-35.1636) -- (7.5915,-34.7945) -- (8.2769,-34.4255) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-34.7945) -- (8.2769,-34.7945) (7.5915,-34.7945) -- (6.8535,-34.7945);
\draw[draw=dcColor0, line width=1.5pt] (7.5915,-35.1636) -- (7.5915,-34.4255);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.4927,-35.1636) -- (11.8618,-34.4782) -- (12.2308,-35.1636) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-35.8489) -- (11.8618,-35.1636) (11.8618,-34.4782) -- (11.8618,-33.7401);
\draw[draw=dcColor0, line width=1.5pt] (11.4927,-34.4782) -- (12.2308,-34.4782);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-37.5886) -- (0.3163,-37.9577) -- (-0.369,-38.3267) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-37.9577) -- (-0.369,-37.9577) (0.3163,-37.9577) -- (1.0544,-37.9577);
\draw[draw=dcColor0, line width=1.5pt] (0.3163,-37.5886) -- (0.3163,-38.3267);
\draw[draw=dcColor0, line width=1.5pt] (0.0264,-37.4041) -- (0.3427,-37.0878) (0.29,-37.5095) -- (0.6063,-37.1932);
\draw[draw=dcColor0, line width=1.5pt] (0.1936,-37.1251) -- (0.3427,-37.0878) -- (0.3054,-37.2369);
\draw[draw=dcColor0, line width=1.5pt] (0.4572,-37.2305) -- (0.6063,-37.1932) -- (0.569,-37.3423);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.323,-37.5886) -- (3.9539,-38.274) -- (3.5849,-37.5886) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-36.9033) -- (3.9539,-37.5886) (3.9539,-38.274) -- (3.9539,-39.012);
\draw[draw=dcColor0, line width=1.5pt] (4.323,-38.274) -- (3.5849,-38.274);
\draw[draw=dcColor0, line width=1.5pt] (4.5075,-37.984) -- (4.8238,-38.3003) (4.402,-38.2476) -- (4.7183,-38.5639);
\draw[draw=dcColor0, line width=1.5pt] (4.7865,-38.1512) -- (4.8238,-38.3003) -- (4.6747,-38.2631);
\draw[draw=dcColor0, line width=1.5pt] (4.6811,-38.4148) -- (4.7183,-38.5639) -- (4.5692,-38.5266);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2769,-38.3267) -- (7.5915,-37.9577) -- (8.2769,-37.5886) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-37.9577) -- (8.2769,-37.9577) (7.5915,-37.9577) -- (6.8535,-37.9577);
\draw[draw=dcColor0, line width=1.5pt] (7.5915,-38.3267) -- (7.5915,-37.5886);
\draw[draw=dcColor0, line width=1.5pt] (7.8815,-38.5112) -- (7.5652,-38.8275) (7.6179,-38.4058) -- (7.3016,-38.7221);
\draw[draw=dcColor0, line width=1.5pt] (7.7143,-38.7902) -- (7.5652,-38.8275) -- (7.6025,-38.6784);
\draw[draw=dcColor0, line width=1.5pt] (7.4507,-38.6848) -- (7.3016,-38.7221) -- (7.3389,-38.573);
% Component: led
% LED
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.4927,-38.3267) -- (11.8618,-37.6413) -- (12.2308,-38.3267) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-39.012) -- (11.8618,-38.3267) (11.8618,-37.6413) -- (11.8618,-36.9033);
\draw[draw=dcColor0, line width=1.5pt] (11.4927,-37.6413) -- (12.2308,-37.6413);
\draw[draw=dcColor0, line width=1.5pt] (11.3082,-37.9313) -- (10.9919,-37.615) (11.4137,-37.6677) -- (11.0973,-37.3514);
\draw[draw=dcColor0, line width=1.5pt] (11.0292,-37.7641) -- (10.9919,-37.615) -- (11.141,-37.6523);
\draw[draw=dcColor0, line width=1.5pt] (11.1346,-37.5005) -- (11.0973,-37.3514) -- (11.2465,-37.3887);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-40.7518) -- (0.3163,-41.1208) -- (-0.369,-41.4898) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-41.1208) -- (-0.369,-41.1208) (0.3163,-41.1208) -- (1.0544,-41.1208);
\draw[draw=dcColor0, line width=1.5pt] (0.1582,-40.6463) -- (0.3163,-40.6463) -- (0.3163,-41.4898) -- (0.4745,-41.4898);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.323,-40.7518) -- (3.9539,-41.4371) -- (3.5849,-40.7518) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-40.0664) -- (3.9539,-40.7518) (3.9539,-41.4371) -- (3.9539,-42.1752);
\draw[draw=dcColor0, line width=1.5pt] (4.4284,-41.279) -- (4.4284,-41.4371) -- (3.5849,-41.4371) -- (3.5849,-41.5953);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2769,-41.4898) -- (7.5915,-41.1208) -- (8.2769,-40.7518) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-41.1208) -- (8.2769,-41.1208) (7.5915,-41.1208) -- (6.8535,-41.1208);
\draw[draw=dcColor0, line width=1.5pt] (7.7497,-41.5953) -- (7.5915,-41.5953) -- (7.5915,-40.7518) -- (7.4334,-40.7518);
% Component: zener
% Diodo Zener
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.4927,-41.4898) -- (11.8618,-40.8045) -- (12.2308,-41.4898) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-42.1752) -- (11.8618,-41.4898) (11.8618,-40.8045) -- (11.8618,-40.0664);
\draw[draw=dcColor0, line width=1.5pt] (11.3873,-40.9626) -- (11.3873,-40.8045) -- (12.2308,-40.8045) -- (12.2308,-40.6463);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-44.2839) -- (-0.4481,-44.2839) (0.4481,-44.2839) -- (1.0544,-44.2839) (-0.3954,-44.2839) -- (0.3427,-43.7831);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-44.2839) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-44.2839) circle (1.875pt);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-43.2296) -- (3.9539,-43.8358) (3.9539,-44.732) -- (3.9539,-45.3383) (3.9539,-43.8885) -- (4.4548,-44.6266);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-43.8622) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-44.7057) circle (1.875pt);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-44.2839) -- (8.356,-44.2839) (7.4597,-44.2839) -- (6.8535,-44.2839) (8.3032,-44.2839) -- (7.5652,-44.7848);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-44.2839) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-44.2839) circle (1.875pt);
% Component: openSwitch
% Interruttore aperto
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-45.3383) -- (11.8618,-44.732) (11.8618,-43.8358) -- (11.8618,-43.2296) (11.8618,-44.6793) -- (11.3609,-43.9413);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-44.7057) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-43.8622) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-47.4471) -- (-0.4481,-47.4471) (0.4481,-47.4471) -- (1.0544,-47.4471) (-0.3954,-47.4471) -- (0.3427,-47.4471);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-47.4471) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-47.4471) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-46.3927) -- (3.9539,-46.999) (3.9539,-47.8952) -- (3.9539,-48.5015) (3.9539,-47.0517) -- (3.9539,-47.7897);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-47.0253) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-47.8688) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-47.4471) -- (8.356,-47.4471) (7.4597,-47.4471) -- (6.8535,-47.4471) (8.3032,-47.4471) -- (7.5652,-47.4471);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-47.4471) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-47.4471) circle (1.875pt);
% Component: closedSwitch
% Interruttore chiuso
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-48.5015) -- (11.8618,-47.8952) (11.8618,-46.999) -- (11.8618,-46.3927) (11.8618,-47.8425) -- (11.8618,-47.1044);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-47.8688) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-47.0253) circle (1.875pt);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (0,-49.5558) -- (0,-50.6102) (-0.5008,-50.6102) -- (0.5008,-50.6102) (-0.3163,-50.7947) -- (0.3163,-50.7947) (-0.1318,-50.9792) -- (0.1318,-50.9792);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (5.0083,-50.6102) -- (3.9539,-50.6102) (3.9539,-50.1094) -- (3.9539,-51.111) (3.7694,-50.2939) -- (3.7694,-50.9265) (3.5849,-50.4784) -- (3.5849,-50.742);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-51.6646) -- (7.9078,-50.6102) (8.4087,-50.6102) -- (7.407,-50.6102) (8.2242,-50.4257) -- (7.5915,-50.4257) (8.0396,-50.2412) -- (7.776,-50.2412);
% Component: ground
% Massa / terra
\draw[draw=dcColor0, line width=1.5pt] (10.8074,-50.6102) -- (11.8618,-50.6102) (11.8618,-51.111) -- (11.8618,-50.1094) (12.0463,-50.9265) -- (12.0463,-50.2939) (12.2308,-50.742) -- (12.2308,-50.4784);
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-53.7733) -- (-0.5272,-53.7733) (0.5272,-53.7733) -- (1.0544,-53.7733);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-53.7733) circle (15pt);
\path (-0.1929,-53.3621) -- (0.1929,-53.3621) -- (-0.1929,-54.1002) -- (0.1929,-54.1002) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-53.7997) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-52.719) -- (3.9539,-53.2462) (3.9539,-54.3005) -- (3.9539,-54.8277);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-53.7733) circle (15pt);
\path (4.3652,-53.5805) -- (4.3652,-53.9662) -- (3.6271,-53.5805) -- (3.6271,-53.9662) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9276,-53.7733) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-53.7733) -- (8.435,-53.7733) (7.3807,-53.7733) -- (6.8535,-53.7733);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-53.7733) circle (15pt);
\path (8.1007,-54.1846) -- (7.715,-54.1846) -- (8.1007,-53.4465) -- (7.715,-53.4465) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-53.747) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: ammeter
% Amperometro
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-54.8277) -- (11.8618,-54.3005) (11.8618,-53.2462) -- (11.8618,-52.719);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-53.7733) circle (15pt);
\path (11.4505,-53.9662) -- (11.4505,-53.5805) -- (12.1886,-53.9662) -- (12.1886,-53.5805) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8881,-53.7733) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#65;</text></g></g>}{A}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-56.9365) -- (-0.5272,-56.9365) (0.5272,-56.9365) -- (1.0544,-56.9365);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-56.9365) circle (15pt);
\path (-0.1713,-56.5252) -- (0.1713,-56.5252) -- (-0.1713,-57.2633) -- (0.1713,-57.2633) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-56.9628) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-55.8821) -- (3.9539,-56.4093) (3.9539,-57.4637) -- (3.9539,-57.9909);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-56.9365) circle (15pt);
\path (4.3652,-56.7652) -- (4.3652,-57.1078) -- (3.6271,-56.7652) -- (3.6271,-57.1078) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9276,-56.9365) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-56.9365) -- (8.435,-56.9365) (7.3807,-56.9365) -- (6.8535,-56.9365);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-56.9365) circle (15pt);
\path (8.0792,-57.3477) -- (7.7365,-57.3477) -- (8.0792,-56.6097) -- (7.7365,-56.6097) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-56.9101) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: voltmeter
% Voltmetro
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-57.9909) -- (11.8618,-57.4637) (11.8618,-56.4093) -- (11.8618,-55.8821);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-56.9365) circle (15pt);
\path (11.4505,-57.1078) -- (11.4505,-56.7652) -- (12.1886,-57.1078) -- (12.1886,-56.7652) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8881,-56.9365) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-59.0452) -- (-0.5272,-59.0452) -- (-0.5272,-59.467) .. controls (-0.0527,-59.467) and (-0.0527,-59.7833) .. (-0.5272,-59.7833) .. controls (-0.0527,-59.7833) and (-0.0527,-60.0996) .. (-0.5272,-60.0996) .. controls (-0.0527,-60.0996) and (-0.0527,-60.4159) .. (-0.5272,-60.4159) .. controls (-0.0527,-60.4159) and (-0.0527,-60.7323) .. (-0.5272,-60.7323) -- (-0.5272,-61.154) -- (-1.0544,-61.154) (1.0544,-59.0452) -- (0.5272,-59.0452) -- (0.5272,-59.467) .. controls (0.0527,-59.467) and (0.0527,-59.7833) .. (0.5272,-59.7833) .. controls (0.0527,-59.7833) and (0.0527,-60.0996) .. (0.5272,-60.0996) .. controls (0.0527,-60.0996) and (0.0527,-60.4159) .. (0.5272,-60.4159) .. controls (0.0527,-60.4159) and (0.0527,-60.7323) .. (0.5272,-60.7323) -- (0.5272,-61.154) -- (1.0544,-61.154);
\draw[draw=dcColor0, line width=1.5pt] (-0.0791,-59.4406) -- (-0.0791,-60.7586) (0.0791,-59.4406) -- (0.0791,-60.7586);
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (5.0083,-59.0452) -- (5.0083,-59.5724) -- (4.5866,-59.5724) .. controls (4.5866,-60.0469) and (4.2702,-60.0469) .. (4.2702,-59.5724) .. controls (4.2702,-60.0469) and (3.9539,-60.0469) .. (3.9539,-59.5724) .. controls (3.9539,-60.0469) and (3.6376,-60.0469) .. (3.6376,-59.5724) .. controls (3.6376,-60.0469) and (3.3213,-60.0469) .. (3.3213,-59.5724) -- (2.8995,-59.5724) -- (2.8995,-59.0452) (5.0083,-61.154) -- (5.0083,-60.6268) -- (4.5866,-60.6268) .. controls (4.5866,-60.1523) and (4.2702,-60.1523) .. (4.2702,-60.6268) .. controls (4.2702,-60.1523) and (3.9539,-60.1523) .. (3.9539,-60.6268) .. controls (3.9539,-60.1523) and (3.6376,-60.1523) .. (3.6376,-60.6268) .. controls (3.6376,-60.1523) and (3.3213,-60.1523) .. (3.3213,-60.6268) -- (2.8995,-60.6268) -- (2.8995,-61.154);
\draw[draw=dcColor0, line width=1.5pt] (4.6129,-60.0205) -- (3.2949,-60.0205) (4.6129,-60.1787) -- (3.2949,-60.1787);
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-61.154) -- (8.435,-61.154) -- (8.435,-60.7323) .. controls (7.9606,-60.7323) and (7.9606,-60.4159) .. (8.435,-60.4159) .. controls (7.9606,-60.4159) and (7.9606,-60.0996) .. (8.435,-60.0996) .. controls (7.9606,-60.0996) and (7.9606,-59.7833) .. (8.435,-59.7833) .. controls (7.9606,-59.7833) and (7.9606,-59.467) .. (8.435,-59.467) -- (8.435,-59.0452) -- (8.9622,-59.0452) (6.8535,-61.154) -- (7.3807,-61.154) -- (7.3807,-60.7323) .. controls (7.8551,-60.7323) and (7.8551,-60.4159) .. (7.3807,-60.4159) .. controls (7.8551,-60.4159) and (7.8551,-60.0996) .. (7.3807,-60.0996) .. controls (7.8551,-60.0996) and (7.8551,-59.7833) .. (7.3807,-59.7833) .. controls (7.8551,-59.7833) and (7.8551,-59.467) .. (7.3807,-59.467) -- (7.3807,-59.0452) -- (6.8535,-59.0452);
\draw[draw=dcColor0, line width=1.5pt] (7.9869,-60.7586) -- (7.9869,-59.4406) (7.8288,-60.7586) -- (7.8288,-59.4406);
% Component: transformer
% Transformer: explicit four-terminal TikZ symbol; retains legacy terminal geometry.
\draw[draw=dcColor0, line width=1.5pt] (10.8074,-61.154) -- (10.8074,-60.6268) -- (11.2291,-60.6268) .. controls (11.2291,-60.1523) and (11.5455,-60.1523) .. (11.5455,-60.6268) .. controls (11.5455,-60.1523) and (11.8618,-60.1523) .. (11.8618,-60.6268) .. controls (11.8618,-60.1523) and (12.1781,-60.1523) .. (12.1781,-60.6268) .. controls (12.1781,-60.1523) and (12.4944,-60.1523) .. (12.4944,-60.6268) -- (12.9161,-60.6268) -- (12.9161,-61.154) (10.8074,-59.0452) -- (10.8074,-59.5724) -- (11.2291,-59.5724) .. controls (11.2291,-60.0469) and (11.5455,-60.0469) .. (11.5455,-59.5724) .. controls (11.5455,-60.0469) and (11.8618,-60.0469) .. (11.8618,-59.5724) .. controls (11.8618,-60.0469) and (12.1781,-60.0469) .. (12.1781,-59.5724) .. controls (12.1781,-60.0469) and (12.4944,-60.0469) .. (12.4944,-59.5724) -- (12.9161,-59.5724) -- (12.9161,-59.0452);
\draw[draw=dcColor0, line width=1.5pt] (11.2028,-60.1787) -- (12.5208,-60.1787) (11.2028,-60.0205) -- (12.5208,-60.0205);
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-63.2628) -- (-0.5272,-63.2628) (0.5272,-63.2628) -- (1.0544,-63.2628);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-62.7356) -- (0.6326,-62.7356) -- (0.6326,-63.79) -- (-0.6326,-63.79) -- cycle;
\path (-0.5554,-63.0925) -- (0.5554,-63.0925) -- (-0.5554,-63.3692) -- (0.5554,-63.3692) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-63.2628) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-62.2084) -- (3.9539,-62.7356) (3.9539,-63.79) -- (3.9539,-64.3171);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4811,-62.6301) -- (4.4811,-63.8954) -- (3.4267,-63.8954) -- (3.4267,-62.6301) -- cycle;
\path (4.1242,-62.7074) -- (4.1242,-63.8182) -- (3.8475,-62.7074) -- (3.8475,-63.8182) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9539,-63.2628) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-63.2628) -- (8.435,-63.2628) (7.3807,-63.2628) -- (6.8535,-63.2628);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5405,-63.79) -- (7.2752,-63.79) -- (7.2752,-62.7356) -- (8.5405,-62.7356) -- cycle;
\path (8.4632,-63.4331) -- (7.3524,-63.4331) -- (8.4632,-63.1563) -- (7.3524,-63.1563) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-63.2628) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: blackBox
% Blocco rettangolare
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-64.3171) -- (11.8618,-63.79) (11.8618,-62.7356) -- (11.8618,-62.2084);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.3346,-63.8954) -- (11.3346,-62.6301) -- (12.389,-62.6301) -- (12.389,-63.8954) -- cycle;
\path (11.6915,-63.8182) -- (11.6915,-62.7074) -- (11.9682,-63.8182) -- (11.9682,-62.7074) -- cycle;
\node[text=dcColor0, font=\fontsize{5.6667}{7.3667}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8618,-63.2628) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="7.5556">&\string#66;&\string#76;&\string#65;&\string#67;&\string#75;&\string#32;&\string#66;&\string#79;&\string#88;</text></g></g>}{BLACK BOX}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-66.4259) -- (-0.5272,-66.4259) (0.5272,-66.4259) -- (1.0544,-66.4259);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-66.1887) -- (0.5272,-66.1887) -- (0.5272,-66.6631) -- (-0.5272,-66.6631) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.5272,-67.0322) -- (0.5272,-65.8196) -- (0.7908,-65.8196);
\path (0.6485,-65.9434) -- (0.8368,-65.9434) -- (0.6485,-66.3124) -- (0.8368,-66.3124) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0.7381,-66.1623) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-65.3715) -- (3.9539,-65.8987) (3.9539,-66.9531) -- (3.9539,-67.4803);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1912,-65.8987) -- (4.1912,-66.9531) -- (3.7167,-66.9531) -- (3.7167,-65.8987) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.3477,-65.8987) -- (4.5602,-66.9531) -- (4.5602,-67.2167);
\path (4.4364,-67.0744) -- (4.4364,-67.2627) -- (4.0674,-67.0744) -- (4.0674,-67.2627) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.2175,-67.164) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-66.4259) -- (8.435,-66.4259) (7.3807,-66.4259) -- (6.8535,-66.4259);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-66.6631) -- (7.3807,-66.6631) -- (7.3807,-66.1887) -- (8.435,-66.1887) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.435,-65.8196) -- (7.3807,-67.0322) -- (7.1171,-67.0322);
\path (7.2594,-66.9084) -- (7.0711,-66.9084) -- (7.2594,-66.5394) -- (7.0711,-66.5394) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.1698,-66.6895) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: thermistor
% Termistore
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-67.4803) -- (11.8618,-66.9531) (11.8618,-65.8987) -- (11.8618,-65.3715);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6245,-66.9531) -- (11.6245,-65.8987) -- (12.099,-65.8987) -- (12.099,-66.9531) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (12.468,-66.9531) -- (11.2555,-65.8987) -- (11.2555,-65.6351);
\path (11.3793,-65.7774) -- (11.3793,-65.5891) -- (11.7483,-65.7774) -- (11.7483,-65.5891) -- cycle;
\node[text=dcColor0, font=\fontsize{7.5}{9.75}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.5982,-65.6878) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="10">&\string#84;</text></g></g>}{T}};
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-69.589) -- (-0.5272,-69.589) (0.5272,-69.589) -- (1.0544,-69.589);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-69.3518) -- (0.5272,-69.3518) -- (0.5272,-69.8263) -- (-0.5272,-69.8263) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.0264,-69.0355) -- (0.3427,-68.7192) (0.29,-69.1409) -- (0.6063,-68.8246);
\draw[draw=dcColor0, line width=1.5pt] (0.1755,-68.9982) -- (0.0264,-69.0355) -- (0.0636,-68.8864);
\draw[draw=dcColor0, line width=1.5pt] (0.4391,-69.1037) -- (0.29,-69.1409) -- (0.3272,-68.9918);
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-68.5347) -- (3.9539,-69.0619) (3.9539,-70.1162) -- (3.9539,-70.6434);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1912,-69.0619) -- (4.1912,-70.1162) -- (3.7167,-70.1162) -- (3.7167,-69.0619) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.5075,-69.6154) -- (4.8238,-69.9317) (4.402,-69.879) -- (4.7183,-70.1953);
\draw[draw=dcColor0, line width=1.5pt] (4.5447,-69.7645) -- (4.5075,-69.6154) -- (4.6566,-69.6527);
\draw[draw=dcColor0, line width=1.5pt] (4.4393,-70.0281) -- (4.402,-69.879) -- (4.5511,-69.9163);
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-69.589) -- (8.435,-69.589) (7.3807,-69.589) -- (6.8535,-69.589);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-69.8263) -- (7.3807,-69.8263) -- (7.3807,-69.3518) -- (8.435,-69.3518) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.8815,-70.1426) -- (7.5652,-70.4589) (7.6179,-70.0372) -- (7.3016,-70.3535);
\draw[draw=dcColor0, line width=1.5pt] (7.7324,-70.1799) -- (7.8815,-70.1426) -- (7.8442,-70.2917);
\draw[draw=dcColor0, line width=1.5pt] (7.4688,-70.0744) -- (7.6179,-70.0372) -- (7.5806,-70.1863);
% Component: photoresistor
% Fotoresistenza / LDR
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-70.6434) -- (11.8618,-70.1162) (11.8618,-69.0619) -- (11.8618,-68.5347);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6245,-70.1162) -- (11.6245,-69.0619) -- (12.099,-69.0619) -- (12.099,-70.1162) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.3082,-69.5627) -- (10.9919,-69.2464) (11.4137,-69.2991) -- (11.0973,-68.9828);
\draw[draw=dcColor0, line width=1.5pt] (11.2709,-69.4136) -- (11.3082,-69.5627) -- (11.1591,-69.5254);
\draw[draw=dcColor0, line width=1.5pt] (11.3764,-69.15) -- (11.4137,-69.2991) -- (11.2645,-69.2618);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-72.7522) -- (-0.1582,-72.7522) (0.1582,-72.7522) -- (1.0544,-72.7522) (-0.1582,-72.3041) -- (-0.1582,-73.2003) (0.1582,-72.3041) -- (0.1582,-73.2003);
\draw[draw=dcColor0, line width=1.5pt] (-0.5535,-73.3321) -- (0.6063,-72.1459);
\draw[draw=dcColor0, line width=1.5pt] (0.4578,-72.1858) -- (0.6063,-72.1459) -- (0.5716,-72.2957);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-71.6978) -- (3.9539,-72.594) (3.9539,-72.9103) -- (3.9539,-73.8066) (4.402,-72.594) -- (3.5058,-72.594) (4.402,-72.9103) -- (3.5058,-72.9103);
\draw[draw=dcColor0, line width=1.5pt] (3.374,-72.1986) -- (4.5602,-73.3584);
\draw[draw=dcColor0, line width=1.5pt] (4.5203,-73.21) -- (4.5602,-73.3584) -- (4.4105,-73.3238);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-72.7522) -- (8.066,-72.7522) (7.7497,-72.7522) -- (6.8535,-72.7522) (8.066,-73.2003) -- (8.066,-72.3041) (7.7497,-73.2003) -- (7.7497,-72.3041);
\draw[draw=dcColor0, line width=1.5pt] (8.4614,-72.1723) -- (7.3016,-73.3584);
\draw[draw=dcColor0, line width=1.5pt] (7.45,-73.3186) -- (7.3016,-73.3584) -- (7.3362,-73.2087);
% Component: variableCapacitor
% Condensatore variabile
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-73.8066) -- (11.8618,-72.9103) (11.8618,-72.594) -- (11.8618,-71.6978) (11.4137,-72.9103) -- (12.3099,-72.9103) (11.4137,-72.594) -- (12.3099,-72.594);
\draw[draw=dcColor0, line width=1.5pt] (12.4417,-73.3057) -- (11.2555,-72.1459);
\draw[draw=dcColor0, line width=1.5pt] (11.2954,-72.2943) -- (11.2555,-72.1459) -- (11.4052,-72.1806);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-75.9153) -- (-0.6326,-75.9153) .. controls (-0.6326,-75.4408) and (-0.3163,-75.4408) .. (-0.3163,-75.9153) .. controls (-0.3163,-75.4408) and (0,-75.4408) .. (0,-75.9153) .. controls (0,-75.4408) and (0.3163,-75.4408) .. (0.3163,-75.9153) .. controls (0.3163,-75.4408) and (0.6326,-75.4408) .. (0.6326,-75.9153) -- (1.0544,-75.9153);
\draw[draw=dcColor0, line width=1.5pt] (-0.5535,-76.4952) -- (0.6063,-75.309);
\draw[draw=dcColor0, line width=1.5pt] (0.4578,-75.3489) -- (0.6063,-75.309) -- (0.5716,-75.4588);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-74.8609) -- (3.9539,-75.2827) .. controls (4.4284,-75.2827) and (4.4284,-75.599) .. (3.9539,-75.599) .. controls (4.4284,-75.599) and (4.4284,-75.9153) .. (3.9539,-75.9153) .. controls (4.4284,-75.9153) and (4.4284,-76.2316) .. (3.9539,-76.2316) .. controls (4.4284,-76.2316) and (4.4284,-76.5479) .. (3.9539,-76.5479) -- (3.9539,-76.9697);
\draw[draw=dcColor0, line width=1.5pt] (3.374,-75.3618) -- (4.5602,-76.5216);
\draw[draw=dcColor0, line width=1.5pt] (4.5203,-76.3731) -- (4.5602,-76.5216) -- (4.4105,-76.4869);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-75.9153) -- (8.5405,-75.9153) .. controls (8.5405,-76.3898) and (8.2242,-76.3898) .. (8.2242,-75.9153) .. controls (8.2242,-76.3898) and (7.9078,-76.3898) .. (7.9078,-75.9153) .. controls (7.9078,-76.3898) and (7.5915,-76.3898) .. (7.5915,-75.9153) .. controls (7.5915,-76.3898) and (7.2752,-76.3898) .. (7.2752,-75.9153) -- (6.8535,-75.9153);
\draw[draw=dcColor0, line width=1.5pt] (8.4614,-75.3354) -- (7.3016,-76.5216);
\draw[draw=dcColor0, line width=1.5pt] (7.45,-76.4817) -- (7.3016,-76.5216) -- (7.3362,-76.3718);
% Component: variableInductor
% Induttore variabile
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-76.9697) -- (11.8618,-76.5479) .. controls (11.3873,-76.5479) and (11.3873,-76.2316) .. (11.8618,-76.2316) .. controls (11.3873,-76.2316) and (11.3873,-75.9153) .. (11.8618,-75.9153) .. controls (11.3873,-75.9153) and (11.3873,-75.599) .. (11.8618,-75.599) .. controls (11.3873,-75.599) and (11.3873,-75.2827) .. (11.8618,-75.2827) -- (11.8618,-74.8609);
\draw[draw=dcColor0, line width=1.5pt] (12.4417,-76.4689) -- (11.2555,-75.309);
\draw[draw=dcColor0, line width=1.5pt] (11.2954,-75.4575) -- (11.2555,-75.309) -- (11.4052,-75.3437);
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-79.0785) -- (-0.5272,-79.0785) (0.5272,-79.0785) -- (1.0544,-79.0785);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-79.0785) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.369,-79.0785) .. controls (-0.2636,-78.6831) and (-0.1054,-78.6831) .. (0,-79.0785) .. controls (0.1054,-79.4738) and (0.2636,-79.4738) .. (0.369,-79.0785);
\path (-0.0771,-79.1952) -- (0.0771,-79.1952) -- (-0.0771,-79.5247) -- (0.0771,-79.5247) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-79.3948) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-78.0241) -- (3.9539,-78.5513) (3.9539,-79.6056) -- (3.9539,-80.1328);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-79.0785) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-78.7094) .. controls (4.3493,-78.8149) and (4.3493,-78.973) .. (3.9539,-79.0785) .. controls (3.5585,-79.1839) and (3.5585,-79.3421) .. (3.9539,-79.4475);
\path (3.8372,-79.0013) -- (3.8372,-79.1556) -- (3.5077,-79.0013) -- (3.5077,-79.1556) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.6376,-79.0785) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-79.0785) -- (8.435,-79.0785) (7.3807,-79.0785) -- (6.8535,-79.0785);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-79.0785) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.2769,-79.0785) .. controls (8.1714,-79.4738) and (8.0133,-79.4738) .. (7.9078,-79.0785) .. controls (7.8024,-78.6831) and (7.6443,-78.6831) .. (7.5388,-79.0785);
\path (7.985,-78.9617) -- (7.8307,-78.9617) -- (7.985,-78.6322) -- (7.8307,-78.6322) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-78.7621) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acVoltageSource
% Generatore di tensione AC
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-80.1328) -- (11.8618,-79.6056) (11.8618,-78.5513) -- (11.8618,-78.0241);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-79.0785) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-79.4475) .. controls (11.4664,-79.3421) and (11.4664,-79.1839) .. (11.8618,-79.0785) .. controls (12.2572,-78.973) and (12.2572,-78.8149) .. (11.8618,-78.7094);
\path (11.9785,-79.1556) -- (11.9785,-79.0013) -- (12.308,-79.1556) -- (12.308,-79.0013) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.1781,-79.0785) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#86;</text></g></g>}{V}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-82.2416) -- (-0.5272,-82.2416) (0.5272,-82.2416) -- (1.0544,-82.2416);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-82.2416) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.369,-82.2416) .. controls (-0.2636,-81.8462) and (-0.1054,-81.8462) .. (0,-82.2416) .. controls (0.1054,-82.637) and (0.2636,-82.637) .. (0.369,-82.2416);
\path (-0.0649,-82.3584) -- (0.0649,-82.3584) -- (-0.0649,-82.6879) -- (0.0649,-82.6879) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-82.5579) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-81.1872) -- (3.9539,-81.7144) (3.9539,-82.7688) -- (3.9539,-83.296);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-82.2416) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-81.8726) .. controls (4.3493,-81.978) and (4.3493,-82.1362) .. (3.9539,-82.2416) .. controls (3.5585,-82.347) and (3.5585,-82.5052) .. (3.9539,-82.6106);
\path (3.8372,-82.1767) -- (3.8372,-82.3065) -- (3.5077,-82.1767) -- (3.5077,-82.3065) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.6376,-82.2416) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-82.2416) -- (8.435,-82.2416) (7.3807,-82.2416) -- (6.8535,-82.2416);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-82.2416) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.2769,-82.2416) .. controls (8.1714,-82.637) and (8.0133,-82.637) .. (7.9078,-82.2416) .. controls (7.8024,-81.8462) and (7.6443,-81.8462) .. (7.5388,-82.2416);
\path (7.9727,-82.1248) -- (7.843,-82.1248) -- (7.9727,-81.7953) -- (7.843,-81.7953) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-81.9253) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: acCurrentSource
% Generatore di corrente AC
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-83.296) -- (11.8618,-82.7688) (11.8618,-81.7144) -- (11.8618,-81.1872);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-82.2416) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-82.6106) .. controls (11.4664,-82.5052) and (11.4664,-82.347) .. (11.8618,-82.2416) .. controls (12.2572,-82.1362) and (12.2572,-81.978) .. (11.8618,-81.8726);
\path (11.9785,-82.3065) -- (11.9785,-82.1767) -- (12.308,-82.3065) -- (12.308,-82.1767) -- cycle;
\node[text=dcColor0, font=\fontsize{6.75}{8.775}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.1781,-82.2416) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="9">&\string#73;</text></g></g>}{I}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-85.4047) -- (-0.5272,-85.4047) (0.5272,-85.4047) -- (1.0544,-85.4047);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-85.4047) circle (15pt);
\path (-0.1713,-84.9935) -- (0.1713,-84.9935) -- (-0.1713,-85.7315) -- (0.1713,-85.7315) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-85.4311) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-84.3504) -- (3.9539,-84.8775) (3.9539,-85.9319) -- (3.9539,-86.4591);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-85.4047) circle (15pt);
\path (4.3652,-85.2334) -- (4.3652,-85.5761) -- (3.6271,-85.2334) -- (3.6271,-85.5761) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9276,-85.4047) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-85.4047) -- (8.435,-85.4047) (7.3807,-85.4047) -- (6.8535,-85.4047);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-85.4047) circle (15pt);
\path (8.0792,-85.816) -- (7.7365,-85.816) -- (8.0792,-85.0779) -- (7.7365,-85.0779) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-85.3784) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericVoltageSource
% Tensione generica
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-86.4591) -- (11.8618,-85.9319) (11.8618,-84.8775) -- (11.8618,-84.3504);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-85.4047) circle (15pt);
\path (11.4505,-85.5761) -- (11.4505,-85.2334) -- (12.1886,-85.5761) -- (12.1886,-85.2334) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8881,-85.4047) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#86;</text></g></g>}{V}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-88.5679) -- (-0.5272,-88.5679) (0.5272,-88.5679) -- (1.0544,-88.5679);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-88.5679) circle (15pt);
\path (-0.1441,-88.1566) -- (0.1441,-88.1566) -- (-0.1441,-88.8947) -- (0.1441,-88.8947) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-88.5942) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-87.5135) -- (3.9539,-88.0407) (3.9539,-89.0951) -- (3.9539,-89.6222);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-88.5679) circle (15pt);
\path (4.3652,-88.4238) -- (4.3652,-88.7119) -- (3.6271,-88.4238) -- (3.6271,-88.7119) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9276,-88.5679) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-88.5679) -- (8.435,-88.5679) (7.3807,-88.5679) -- (6.8535,-88.5679);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-88.5679) circle (15pt);
\path (8.0519,-88.9791) -- (7.7638,-88.9791) -- (8.0519,-88.2411) -- (7.7638,-88.2411) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-88.5415) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: genericCurrentSource
% Corrente generica
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-89.6222) -- (11.8618,-89.0951) (11.8618,-88.0407) -- (11.8618,-87.5135);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-88.5679) circle (15pt);
\path (11.4505,-88.7119) -- (11.4505,-88.4238) -- (12.1886,-88.7119) -- (12.1886,-88.4238) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8881,-88.5679) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#73;</text></g></g>}{I}};
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-91.731) -- (-0.1054,-91.731) (0.1054,-91.731) -- (1.0544,-91.731) (-0.1054,-91.2302) -- (-0.1054,-92.2318) (0.1054,-91.4674) -- (0.1054,-91.9946);
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-90.6766) -- (3.9539,-91.6256) (3.9539,-91.8364) -- (3.9539,-92.7854) (4.4548,-91.6256) -- (3.4531,-91.6256) (4.2175,-91.8364) -- (3.6903,-91.8364);
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-91.731) -- (8.0133,-91.731) (7.8024,-91.731) -- (6.8535,-91.731) (8.0133,-92.2318) -- (8.0133,-91.2302) (7.8024,-91.9946) -- (7.8024,-91.4674);
% Component: singleCellBattery
% Batteria a cella singola
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-92.7854) -- (11.8618,-91.8364) (11.8618,-91.6256) -- (11.8618,-90.6766) (11.3609,-91.8364) -- (12.3626,-91.8364) (11.5982,-91.6256) -- (12.1254,-91.6256);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-94.5251) -- (0.3163,-94.8941) -- (-0.369,-95.2632) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-94.8941) -- (-0.369,-94.8941) (0.3163,-94.8941) -- (1.0544,-94.8941);
\draw[draw=dcColor0, line width=1.5pt] (0.3163,-94.5251) -- (0.3163,-95.2632);
\draw[draw=dcColor0, line width=1.5pt] (0.0264,-94.3406) -- (0.3427,-94.0243) (0.29,-94.446) -- (0.6063,-94.1297);
\draw[draw=dcColor0, line width=1.5pt] (0.1755,-94.3033) -- (0.0264,-94.3406) -- (0.0636,-94.1915);
\draw[draw=dcColor0, line width=1.5pt] (0.4391,-94.4088) -- (0.29,-94.446) -- (0.3272,-94.2969);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.323,-94.5251) -- (3.9539,-95.2105) -- (3.5849,-94.5251) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-93.8398) -- (3.9539,-94.5251) (3.9539,-95.2105) -- (3.9539,-95.9485);
\draw[draw=dcColor0, line width=1.5pt] (4.323,-95.2105) -- (3.5849,-95.2105);
\draw[draw=dcColor0, line width=1.5pt] (4.5075,-94.9205) -- (4.8238,-95.2368) (4.402,-95.1841) -- (4.7183,-95.5004);
\draw[draw=dcColor0, line width=1.5pt] (4.5447,-95.0696) -- (4.5075,-94.9205) -- (4.6566,-94.9578);
\draw[draw=dcColor0, line width=1.5pt] (4.4393,-95.3332) -- (4.402,-95.1841) -- (4.5511,-95.2214);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2769,-95.2632) -- (7.5915,-94.8941) -- (8.2769,-94.5251) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-94.8941) -- (8.2769,-94.8941) (7.5915,-94.8941) -- (6.8535,-94.8941);
\draw[draw=dcColor0, line width=1.5pt] (7.5915,-95.2632) -- (7.5915,-94.5251);
\draw[draw=dcColor0, line width=1.5pt] (7.8815,-95.4477) -- (7.5652,-95.764) (7.6179,-95.3423) -- (7.3016,-95.6586);
\draw[draw=dcColor0, line width=1.5pt] (7.7324,-95.485) -- (7.8815,-95.4477) -- (7.8442,-95.5968);
\draw[draw=dcColor0, line width=1.5pt] (7.4688,-95.3795) -- (7.6179,-95.3423) -- (7.5806,-95.4914);
% Component: photodiode
% Fotodiodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.4927,-95.2632) -- (11.8618,-94.5778) -- (12.2308,-95.2632) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-95.9485) -- (11.8618,-95.2632) (11.8618,-94.5778) -- (11.8618,-93.8398);
\draw[draw=dcColor0, line width=1.5pt] (11.4927,-94.5778) -- (12.2308,-94.5778);
\draw[draw=dcColor0, line width=1.5pt] (11.3082,-94.8678) -- (10.9919,-94.5515) (11.4137,-94.6042) -- (11.0973,-94.2879);
\draw[draw=dcColor0, line width=1.5pt] (11.2709,-94.7187) -- (11.3082,-94.8678) -- (11.1591,-94.8305);
\draw[draw=dcColor0, line width=1.5pt] (11.3764,-94.4551) -- (11.4137,-94.6042) -- (11.2645,-94.5669);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-97.6883) -- (0.3163,-98.0573) -- (-0.369,-98.4263) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-98.0573) -- (-0.369,-98.0573) (0.3163,-98.0573) -- (1.0544,-98.0573);
\draw[draw=dcColor0, line width=1.5pt] (0.1582,-97.7937) -- (0.1582,-97.6355) -- (0.3163,-97.6355) -- (0.3163,-98.479) -- (0.4745,-98.479) -- (0.4745,-98.3209);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.323,-97.6883) -- (3.9539,-98.3736) -- (3.5849,-97.6883) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-97.0029) -- (3.9539,-97.6883) (3.9539,-98.3736) -- (3.9539,-99.1117);
\draw[draw=dcColor0, line width=1.5pt] (4.2175,-98.2154) -- (4.3757,-98.2154) -- (4.3757,-98.3736) -- (3.5322,-98.3736) -- (3.5322,-98.5318) -- (3.6903,-98.5318);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2769,-98.4263) -- (7.5915,-98.0573) -- (8.2769,-97.6883) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-98.0573) -- (8.2769,-98.0573) (7.5915,-98.0573) -- (6.8535,-98.0573);
\draw[draw=dcColor0, line width=1.5pt] (7.7497,-98.3209) -- (7.7497,-98.479) -- (7.5915,-98.479) -- (7.5915,-97.6355) -- (7.4334,-97.6355) -- (7.4334,-97.7937);
% Component: schottky
% Diodo Schottky
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.4927,-98.4263) -- (11.8618,-97.741) -- (12.2308,-98.4263) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-99.1117) -- (11.8618,-98.4263) (11.8618,-97.741) -- (11.8618,-97.0029);
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-97.8991) -- (11.44,-97.8991) -- (11.44,-97.741) -- (12.2835,-97.741) -- (12.2835,-97.5828) -- (12.1254,-97.5828);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.369,-100.8514) -- (0.3163,-101.2204) -- (-0.369,-101.5895) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-101.2204) -- (-0.369,-101.2204) (0.4745,-101.2204) -- (1.0544,-101.2204) (0.3163,-100.8514) -- (0.3163,-101.5895) (0.4745,-100.8514) -- (0.4745,-101.5895);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.323,-100.8514) -- (3.9539,-101.5367) -- (3.5849,-100.8514) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-100.166) -- (3.9539,-100.8514) (3.9539,-101.6949) -- (3.9539,-102.2748) (4.323,-101.5367) -- (3.5849,-101.5367) (4.323,-101.6949) -- (3.5849,-101.6949);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2769,-101.5895) -- (7.5915,-101.2204) -- (8.2769,-100.8514) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-101.2204) -- (8.2769,-101.2204) (7.4334,-101.2204) -- (6.8535,-101.2204) (7.5915,-101.5895) -- (7.5915,-100.8514) (7.4334,-101.5895) -- (7.4334,-100.8514);
% Component: varactor
% Diodo varicap
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.4927,-101.5895) -- (11.8618,-100.9041) -- (12.2308,-101.5895) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-102.2748) -- (11.8618,-101.5895) (11.8618,-100.746) -- (11.8618,-100.166) (11.4927,-100.9041) -- (12.2308,-100.9041) (11.4927,-100.746) -- (12.2308,-100.746);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-104.3836) -- (-0.3163,-104.3836) (-0.3163,-103.9091) -- (-0.3163,-104.858) (-0.3163,-104.12) -- (0.5272,-103.5928) -- (0.5272,-103.3292) (-0.3163,-104.6472) -- (0.5272,-105.1743) -- (0.5272,-105.4379);
\draw[draw=dcColor0, line width=1.5pt] (0.3782,-104.9874) -- (0.4481,-105.1243) -- (0.2944,-105.1215);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-103.3292) -- (3.9539,-104.0672) (4.4284,-104.0672) -- (3.4795,-104.0672) (4.2175,-104.0672) -- (4.7447,-104.9108) -- (5.0083,-104.9108) (3.6903,-104.0672) -- (3.1631,-104.9108) -- (2.8995,-104.9108);
\draw[draw=dcColor0, line width=1.5pt] (3.3501,-104.7618) -- (3.2132,-104.8317) -- (3.216,-104.678);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-104.3836) -- (8.2242,-104.3836) (8.2242,-104.858) -- (8.2242,-103.9091) (8.2242,-104.6472) -- (7.3807,-105.1743) -- (7.3807,-105.4379) (8.2242,-104.12) -- (7.3807,-103.5928) -- (7.3807,-103.3292);
\draw[draw=dcColor0, line width=1.5pt] (7.5296,-103.7798) -- (7.4597,-103.6429) -- (7.6134,-103.6456);
% Component: npn
% Transistor NPN
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-105.4379) -- (11.8618,-104.6999) (11.3873,-104.6999) -- (12.3362,-104.6999) (11.5982,-104.6999) -- (11.071,-103.8564) -- (10.8074,-103.8564) (12.1254,-104.6999) -- (12.6526,-103.8564) -- (12.9161,-103.8564);
\draw[draw=dcColor0, line width=1.5pt] (12.4656,-104.0053) -- (12.6025,-103.9355) -- (12.5997,-104.0891);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-107.5467) -- (-0.3163,-107.5467) (-0.3163,-107.0722) -- (-0.3163,-108.0212) (-0.3163,-107.2831) -- (0.5272,-106.7559) -- (0.5272,-106.4923) (-0.3163,-107.8103) -- (0.5272,-108.3375) -- (0.5272,-108.6011);
\draw[draw=dcColor0, line width=1.5pt] (0.0699,-108.1449) -- (0,-108.008) -- (0.1537,-108.0108);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-106.4923) -- (3.9539,-107.2304) (4.4284,-107.2304) -- (3.4795,-107.2304) (4.2175,-107.2304) -- (4.7447,-108.0739) -- (5.0083,-108.0739) (3.6903,-107.2304) -- (3.1631,-108.0739) -- (2.8995,-108.0739);
\draw[draw=dcColor0, line width=1.5pt] (3.3557,-107.6166) -- (3.4926,-107.5467) -- (3.4899,-107.7004);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-107.5467) -- (8.2242,-107.5467) (8.2242,-108.0212) -- (8.2242,-107.0722) (8.2242,-107.8103) -- (7.3807,-108.3375) -- (7.3807,-108.6011) (8.2242,-107.2831) -- (7.3807,-106.7559) -- (7.3807,-106.4923);
\draw[draw=dcColor0, line width=1.5pt] (7.838,-106.9485) -- (7.9078,-107.0854) -- (7.7542,-107.0826);
% Component: pnp
% Transistor PNP
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-108.6011) -- (11.8618,-107.863) (11.3873,-107.863) -- (12.3362,-107.863) (11.5982,-107.863) -- (11.071,-107.0195) -- (10.8074,-107.0195) (12.1254,-107.863) -- (12.6526,-107.0195) -- (12.9161,-107.0195);
\draw[draw=dcColor0, line width=1.5pt] (12.46,-107.4768) -- (12.3231,-107.5467) -- (12.3258,-107.393);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-110.7098) -- (-0.4218,-110.7098) (-0.1582,-110.1826) -- (-0.1582,-111.237) (-0.1582,-110.3408) -- (0.5272,-110.3408) -- (0.5272,-109.6555) (-0.1582,-111.0789) -- (0.5272,-111.0789) -- (0.5272,-111.7642);
\draw[draw=dcColor0, line width=1.5pt] (-0.4218,-110.2354) -- (-0.4218,-111.1843);
\draw[draw=dcColor0, line width=1.5pt] (-0.1582,-110.7098) -- (0.2372,-110.7098);
\draw[draw=dcColor0, line width=1.5pt] (0,-110.7889) -- (-0.1318,-110.7098) -- (0,-110.6308);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-109.6555) -- (3.9539,-110.2881) (4.4811,-110.5517) -- (3.4267,-110.5517) (4.323,-110.5517) -- (4.323,-111.237) -- (5.0083,-111.237) (3.5849,-110.5517) -- (3.5849,-111.237) -- (2.8995,-111.237);
\draw[draw=dcColor0, line width=1.5pt] (4.4284,-110.2881) -- (3.4795,-110.2881);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-110.5517) -- (3.9539,-110.9471);
\draw[draw=dcColor0, line width=1.5pt] (3.8748,-110.7098) -- (3.9539,-110.578) -- (4.033,-110.7098);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-110.7098) -- (8.3296,-110.7098) (8.066,-111.237) -- (8.066,-110.1826) (8.066,-111.0789) -- (7.3807,-111.0789) -- (7.3807,-111.7642) (8.066,-110.3408) -- (7.3807,-110.3408) -- (7.3807,-109.6555);
\draw[draw=dcColor0, line width=1.5pt] (8.3296,-111.1843) -- (8.3296,-110.2354);
\draw[draw=dcColor0, line width=1.5pt] (8.066,-110.7098) -- (7.6706,-110.7098);
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-110.6308) -- (8.0396,-110.7098) -- (7.9078,-110.7889);
% Component: nmos
% MOSFET NMOS
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-111.7642) -- (11.8618,-111.1316) (11.3346,-110.868) -- (12.389,-110.868) (11.4927,-110.868) -- (11.4927,-110.1826) -- (10.8074,-110.1826) (12.2308,-110.868) -- (12.2308,-110.1826) -- (12.9161,-110.1826);
\draw[draw=dcColor0, line width=1.5pt] (11.3873,-111.1316) -- (12.3362,-111.1316);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-110.868) -- (11.8618,-110.4726);
\draw[draw=dcColor0, line width=1.5pt] (11.9408,-110.7098) -- (11.8618,-110.8416) -- (11.7827,-110.7098);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-113.873) -- (-0.4218,-113.873) (-0.1582,-113.3458) -- (-0.1582,-114.4002) (-0.1582,-113.5039) -- (0.5272,-113.5039) -- (0.5272,-112.8186) (-0.1582,-114.242) -- (0.5272,-114.242) -- (0.5272,-114.9274);
\draw[draw=dcColor0, line width=1.5pt] (-0.4218,-113.3985) -- (-0.4218,-114.3474);
\draw[draw=dcColor0, line width=1.5pt] (-0.1582,-113.873) -- (0.2372,-113.873);
\draw[draw=dcColor0, line width=1.5pt] (0.0791,-113.7939) -- (0.2109,-113.873) -- (0.0791,-113.9521);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5799,-113.873) circle (2.25pt);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-112.8186) -- (3.9539,-113.4512) (4.4811,-113.7148) -- (3.4267,-113.7148) (4.323,-113.7148) -- (4.323,-114.4002) -- (5.0083,-114.4002) (3.5849,-113.7148) -- (3.5849,-114.4002) -- (2.8995,-114.4002);
\draw[draw=dcColor0, line width=1.5pt] (4.4284,-113.4512) -- (3.4795,-113.4512);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-113.7148) -- (3.9539,-114.1102);
\draw[draw=dcColor0, line width=1.5pt] (4.033,-113.9521) -- (3.9539,-114.0839) -- (3.8748,-113.9521);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-113.2931) circle (2.25pt);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-113.873) -- (8.3296,-113.873) (8.066,-114.4002) -- (8.066,-113.3458) (8.066,-114.242) -- (7.3807,-114.242) -- (7.3807,-114.9274) (8.066,-113.5039) -- (7.3807,-113.5039) -- (7.3807,-112.8186);
\draw[draw=dcColor0, line width=1.5pt] (8.3296,-114.3474) -- (8.3296,-113.3985);
\draw[draw=dcColor0, line width=1.5pt] (8.066,-113.873) -- (7.6706,-113.873);
\draw[draw=dcColor0, line width=1.5pt] (7.8288,-113.9521) -- (7.697,-113.873) -- (7.8288,-113.7939);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.4878,-113.873) circle (2.25pt);
% Component: pmos
% MOSFET PMOS
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-114.9274) -- (11.8618,-114.2947) (11.3346,-114.0311) -- (12.389,-114.0311) (11.4927,-114.0311) -- (11.4927,-113.3458) -- (10.8074,-113.3458) (12.2308,-114.0311) -- (12.2308,-113.3458) -- (12.9161,-113.3458);
\draw[draw=dcColor0, line width=1.5pt] (11.3873,-114.2947) -- (12.3362,-114.2947);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-114.0311) -- (11.8618,-113.6357);
\draw[draw=dcColor0, line width=1.5pt] (11.7827,-113.7939) -- (11.8618,-113.6621) -- (11.9408,-113.7939);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-114.4529) circle (2.25pt);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-117.0361) -- (-0.1582,-117.0361) (-0.1582,-116.5089) -- (-0.1582,-117.5633) (-0.1582,-116.6671) -- (0.5272,-116.6671) -- (0.5272,-115.9817) (-0.1582,-117.4051) -- (0.5272,-117.4051) -- (0.5272,-118.0905);
\draw[draw=dcColor0, line width=1.5pt] (-0.3163,-116.957) -- (-0.1845,-117.0361) -- (-0.3163,-117.1152);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-115.9817) -- (3.9539,-116.878) (4.4811,-116.878) -- (3.4267,-116.878) (4.323,-116.878) -- (4.323,-117.5633) -- (5.0083,-117.5633) (3.5849,-116.878) -- (3.5849,-117.5633) -- (2.8995,-117.5633);
\draw[draw=dcColor0, line width=1.5pt] (4.033,-116.7198) -- (3.9539,-116.8516) -- (3.8748,-116.7198);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-117.0361) -- (8.066,-117.0361) (8.066,-117.5633) -- (8.066,-116.5089) (8.066,-117.4051) -- (7.3807,-117.4051) -- (7.3807,-118.0905) (8.066,-116.6671) -- (7.3807,-116.6671) -- (7.3807,-115.9817);
\draw[draw=dcColor0, line width=1.5pt] (8.2242,-117.1152) -- (8.0924,-117.0361) -- (8.2242,-116.957);
% Component: njfet
% JFET canale N
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-118.0905) -- (11.8618,-117.1943) (11.3346,-117.1943) -- (12.389,-117.1943) (11.4927,-117.1943) -- (11.4927,-116.5089) -- (10.8074,-116.5089) (12.2308,-117.1943) -- (12.2308,-116.5089) -- (12.9161,-116.5089);
\draw[draw=dcColor0, line width=1.5pt] (11.7827,-117.3524) -- (11.8618,-117.2206) -- (11.9408,-117.3524);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-120.1993) -- (-0.1582,-120.1993) (-0.1582,-119.6721) -- (-0.1582,-120.7264) (-0.1582,-119.8302) -- (0.5272,-119.8302) -- (0.5272,-119.1449) (-0.1582,-120.5683) -- (0.5272,-120.5683) -- (0.5272,-121.2536);
\draw[draw=dcColor0, line width=1.5pt] (-0.3427,-120.2783) -- (-0.4745,-120.1993) -- (-0.3427,-120.1202);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-119.1449) -- (3.9539,-120.0411) (4.4811,-120.0411) -- (3.4267,-120.0411) (4.323,-120.0411) -- (4.323,-120.7264) -- (5.0083,-120.7264) (3.5849,-120.0411) -- (3.5849,-120.7264) -- (2.8995,-120.7264);
\draw[draw=dcColor0, line width=1.5pt] (3.8748,-119.8566) -- (3.9539,-119.7248) -- (4.033,-119.8566);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-120.1993) -- (8.066,-120.1993) (8.066,-120.7264) -- (8.066,-119.6721) (8.066,-120.5683) -- (7.3807,-120.5683) -- (7.3807,-121.2536) (8.066,-119.8302) -- (7.3807,-119.8302) -- (7.3807,-119.1449);
\draw[draw=dcColor0, line width=1.5pt] (8.2505,-120.1202) -- (8.3823,-120.1993) -- (8.2505,-120.2783);
% Component: pjfet
% JFET canale P
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-121.2536) -- (11.8618,-120.3574) (11.3346,-120.3574) -- (12.389,-120.3574) (11.4927,-120.3574) -- (11.4927,-119.6721) -- (10.8074,-119.6721) (12.2308,-120.3574) -- (12.2308,-119.6721) -- (12.9161,-119.6721);
\draw[draw=dcColor0, line width=1.5pt] (11.9408,-120.5419) -- (11.8618,-120.6737) -- (11.7827,-120.5419);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-123.3624) -- (-0.4481,-123.3624) (0.4481,-122.8352) -- (1.0544,-122.8352) (0.4481,-123.8896) -- (1.0544,-123.8896) (-0.3954,-123.3624) -- (0.369,-122.8352);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-123.3624) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-122.8352) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-123.8896) circle (1.875pt);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-122.308) -- (3.9539,-122.9143) (4.4811,-123.8105) -- (4.4811,-124.4168) (3.4267,-123.8105) -- (3.4267,-124.4168) (3.9539,-122.967) -- (4.4811,-123.7314);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-122.9406) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4811,-123.7841) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.4267,-123.7841) circle (1.875pt);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-123.3624) -- (8.356,-123.3624) (7.4597,-123.8896) -- (6.8535,-123.8896) (7.4597,-122.8352) -- (6.8535,-122.8352) (8.3032,-123.3624) -- (7.5388,-123.8896);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-123.3624) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-123.8896) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-122.8352) circle (1.875pt);
% Component: spdt
% Commutatore SPDT
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-124.4168) -- (11.8618,-123.8105) (11.3346,-122.9143) -- (11.3346,-122.308) (12.389,-122.9143) -- (12.389,-122.308) (11.8618,-123.7578) -- (11.3346,-122.9934);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-123.7841) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.3346,-122.9406) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.389,-122.9406) circle (1.875pt);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-126.5255) -- (-0.4481,-126.5255) (0.4481,-126.5255) -- (1.0544,-126.5255) (-0.3954,-126.5255) -- (0.3427,-126.0247);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-126.5255) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-126.5255) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (0,-125.7875) -- (0,-126.2619) (-0.2109,-125.7875) -- (0.2109,-125.7875);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-125.4711) -- (3.9539,-126.0774) (3.9539,-126.9736) -- (3.9539,-127.5799) (3.9539,-126.1301) -- (4.4548,-126.8682);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-126.1038) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-126.9473) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (4.692,-126.5255) -- (4.2175,-126.5255) (4.692,-126.3147) -- (4.692,-126.7364);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-126.5255) -- (8.356,-126.5255) (7.4597,-126.5255) -- (6.8535,-126.5255) (8.3032,-126.5255) -- (7.5652,-127.0264);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-126.5255) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-126.5255) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-127.2636) -- (7.9078,-126.7891) (8.1187,-127.2636) -- (7.697,-127.2636);
% Component: pushButtonNO
% Pulsante normalmente aperto
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-127.5799) -- (11.8618,-126.9736) (11.8618,-126.0774) -- (11.8618,-125.4711) (11.8618,-126.9209) -- (11.3609,-126.1829);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-126.9473) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-126.1038) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (11.1237,-126.5255) -- (11.5982,-126.5255) (11.1237,-126.7364) -- (11.1237,-126.3147);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-129.6887) -- (-0.4481,-129.6887) (0.4481,-129.6887) -- (1.0544,-129.6887) (-0.3954,-129.6887) -- (0.3427,-129.6887);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-129.6887) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-129.6887) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (0,-128.9506) -- (0,-129.4251) (-0.2109,-128.9506) -- (0.2109,-128.9506);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-128.6343) -- (3.9539,-129.2406) (3.9539,-130.1368) -- (3.9539,-130.743) (3.9539,-129.2933) -- (3.9539,-130.0313);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-129.2669) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-130.1104) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (4.692,-129.6887) -- (4.2175,-129.6887) (4.692,-129.4778) -- (4.692,-129.8995);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-129.6887) -- (8.356,-129.6887) (7.4597,-129.6887) -- (6.8535,-129.6887) (8.3032,-129.6887) -- (7.5652,-129.6887);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-129.6887) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-129.6887) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-130.4267) -- (7.9078,-129.9523) (8.1187,-130.4267) -- (7.697,-130.4267);
% Component: pushButtonNC
% Pulsante normalmente chiuso
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-130.743) -- (11.8618,-130.1368) (11.8618,-129.2406) -- (11.8618,-128.6343) (11.8618,-130.0841) -- (11.8618,-129.346);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-130.1104) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-129.2669) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (11.1237,-129.6887) -- (11.5982,-129.6887) (11.1237,-129.8995) -- (11.1237,-129.4778);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-132.3246) -- (-0.4481,-132.3246) (0.4481,-132.3246) -- (1.0544,-132.3246) (-0.3954,-132.3246) -- (0.3427,-131.8238);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-132.3246) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-132.3246) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-133.379) -- (-0.4481,-133.379) (0.4481,-133.379) -- (1.0544,-133.379) (-0.3954,-133.379) -- (0.3427,-132.8782);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-133.379) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-133.379) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (0,-132.1401) -- (0,-133.1945);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-131.7974) -- (4.4811,-132.4037) (4.4811,-133.2999) -- (4.4811,-133.9062) (4.4811,-132.4564) -- (4.9819,-133.1945);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4811,-132.4301) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4811,-133.2736) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (3.4267,-131.7974) -- (3.4267,-132.4037) (3.4267,-133.2999) -- (3.4267,-133.9062) (3.4267,-132.4564) -- (3.9276,-133.1945);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.4267,-132.4301) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.4267,-133.2736) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (4.6656,-132.8518) -- (3.6112,-132.8518);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-133.379) -- (8.356,-133.379) (7.4597,-133.379) -- (6.8535,-133.379) (8.3032,-133.379) -- (7.5652,-133.8798);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-133.379) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-133.379) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-132.3246) -- (8.356,-132.3246) (7.4597,-132.3246) -- (6.8535,-132.3246) (8.3032,-132.3246) -- (7.5652,-132.8254);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-132.3246) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-132.3246) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (7.9078,-133.5635) -- (7.9078,-132.5091);
% Component: dpst
% Mechanically linked DPST contacts: no reliable native equivalent.
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-133.9062) -- (11.3346,-133.2999) (11.3346,-132.4037) -- (11.3346,-131.7974) (11.3346,-133.2472) -- (10.8337,-132.5091);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.3346,-133.2736) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.3346,-132.4301) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (12.389,-133.9062) -- (12.389,-133.2999) (12.389,-132.4037) -- (12.389,-131.7974) (12.389,-133.2472) -- (11.8881,-132.5091);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.389,-133.2736) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.389,-132.4301) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (11.1501,-132.8518) -- (12.2044,-132.8518);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-135.2242) -- (-0.4481,-135.2242) (0.4481,-134.697) -- (1.0544,-134.697) (0.4481,-135.7513) -- (1.0544,-135.7513) (-0.3954,-135.2242) -- (0.369,-134.697);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-135.2242) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-134.697) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-135.7513) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-136.8057) -- (-0.4481,-136.8057) (0.4481,-136.2785) -- (1.0544,-136.2785) (0.4481,-137.3329) -- (1.0544,-137.3329) (-0.3954,-136.8057) -- (0.369,-136.2785);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4218,-136.8057) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-136.2785) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.4218,-137.3329) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (0,-134.9606) -- (0,-136.5421);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (4.7447,-134.9606) -- (4.7447,-135.5668) (5.2719,-136.4631) -- (5.2719,-137.0693) (4.2175,-136.4631) -- (4.2175,-137.0693) (4.7447,-135.6196) -- (5.2719,-136.384);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-135.5932) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.2719,-136.4367) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2175,-136.4367) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (3.1631,-134.9606) -- (3.1631,-135.5668) (3.6903,-136.4631) -- (3.6903,-137.0693) (2.6359,-136.4631) -- (2.6359,-137.0693) (3.1631,-135.6196) -- (3.6903,-136.384);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.1631,-135.5932) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.6903,-136.4367) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (2.6359,-136.4367) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (5.0083,-136.0149) -- (3.4267,-136.0149);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-136.8057) -- (8.356,-136.8057) (7.4597,-137.3329) -- (6.8535,-137.3329) (7.4597,-136.2785) -- (6.8535,-136.2785) (8.3032,-136.8057) -- (7.5388,-137.3329);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-136.8057) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-137.3329) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-136.2785) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-135.2242) -- (8.356,-135.2242) (7.4597,-135.7513) -- (6.8535,-135.7513) (7.4597,-134.697) -- (6.8535,-134.697) (8.3032,-135.2242) -- (7.5388,-135.7513);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3296,-135.2242) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-135.7513) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.4861,-134.697) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (7.9078,-137.0693) -- (7.9078,-135.4878);
% Component: dpdt
% Mechanically linked DPDT contacts: six stable terminals.
\draw[draw=dcColor0, line width=1.5pt] (11.071,-137.0693) -- (11.071,-136.4631) (10.5438,-135.5668) -- (10.5438,-134.9606) (11.5982,-135.5668) -- (11.5982,-134.9606) (11.071,-136.4103) -- (10.5438,-135.6459);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.071,-136.4367) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (10.5438,-135.5932) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.5982,-135.5932) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt] (12.6526,-137.0693) -- (12.6526,-136.4631) (12.1254,-135.5668) -- (12.1254,-134.9606) (13.1797,-135.5668) -- (13.1797,-134.9606) (12.6526,-136.4103) -- (12.1254,-135.6459);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.6526,-136.4367) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.1254,-135.5932) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (13.1797,-135.5932) circle (1.875pt);
\draw[draw=dcColor0, line width=1.5pt, dash pattern=on 3pt off 3pt] (10.8074,-136.0149) -- (12.389,-136.0149);
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-139.1781) -- (-0.5272,-139.1781) (0.5272,-139.1781) -- (1.0544,-139.1781);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-139.1781) circle (15pt);
\path (-0.2531,-138.7668) -- (0.2531,-138.7668) -- (-0.2531,-139.5049) -- (0.2531,-139.5049) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-139.2044) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-138.1237) -- (3.9539,-138.6509) (3.9539,-139.7053) -- (3.9539,-140.2325);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-139.1781) circle (15pt);
\path (4.3652,-138.925) -- (4.3652,-139.4312) -- (3.6271,-138.925) -- (3.6271,-139.4312) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9276,-139.1781) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-139.1781) -- (8.435,-139.1781) (7.3807,-139.1781) -- (6.8535,-139.1781);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-139.1781) circle (15pt);
\path (8.1609,-139.5893) -- (7.6548,-139.5893) -- (8.1609,-138.8513) -- (7.6548,-138.8513) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-139.1517) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: ohmmeter
% Ohmmetro
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-140.2325) -- (11.8618,-139.7053) (11.8618,-138.6509) -- (11.8618,-138.1237);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-139.1781) circle (15pt);
\path (11.4505,-139.4312) -- (11.4505,-138.925) -- (12.1886,-139.4312) -- (12.1886,-138.925) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8881,-139.1781) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#937;</text></g></g>}{Ω}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-142.3412) -- (-0.5272,-142.3412) (0.5272,-142.3412) -- (1.0544,-142.3412);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-142.3412) circle (15pt);
\path (-0.1792,-141.93) -- (0.1792,-141.93) -- (-0.1792,-142.668) -- (0.1792,-142.668) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-142.3676) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-141.2868) -- (3.9539,-141.814) (3.9539,-142.8684) -- (3.9539,-143.3956);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-142.3412) circle (15pt);
\path (4.3652,-142.1621) -- (4.3652,-142.5204) -- (3.6271,-142.1621) -- (3.6271,-142.5204) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9276,-142.3412) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-142.3412) -- (8.435,-142.3412) (7.3807,-142.3412) -- (6.8535,-142.3412);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-142.3412) circle (15pt);
\path (8.087,-142.7525) -- (7.7287,-142.7525) -- (8.087,-142.0144) -- (7.7287,-142.0144) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-142.3149) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: galvanometer
% Circular G meter: no documented dedicated galvanometer bipole.
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-143.3956) -- (11.8618,-142.8684) (11.8618,-141.814) -- (11.8618,-141.2868);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-142.3412) circle (15pt);
\path (11.4505,-142.5204) -- (11.4505,-142.1621) -- (12.1886,-142.5204) -- (12.1886,-142.1621) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8881,-142.3412) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#71;</text></g></g>}{G}};
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-144.45) -- (0,-145.5044) (-0.4481,-145.5044) -- (0,-145.9788) -- (0.4481,-145.5044) -- cycle;
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (5.0083,-145.5044) -- (3.9539,-145.5044) (3.9539,-145.0562) -- (3.4795,-145.5044) -- (3.9539,-145.9525) -- cycle;
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-146.5587) -- (7.9078,-145.5044) (8.356,-145.5044) -- (7.9078,-145.0299) -- (7.4597,-145.5044) -- cycle;
% Component: signalGround
% Massa segnale
\draw[draw=dcColor0, line width=1.5pt, fill=white] (10.8074,-145.5044) -- (11.8618,-145.5044) (11.8618,-145.9525) -- (12.3362,-145.5044) -- (11.8618,-145.0562) -- cycle;
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (0,-147.6131) -- (0,-148.6675) (-0.5272,-148.6675) -- (0.5272,-148.6675) (-0.4218,-148.6675) -- (-0.659,-148.9838) (0,-148.6675) -- (-0.2372,-148.9838) (0.4218,-148.6675) -- (0.1845,-148.9838);
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (5.0083,-148.6675) -- (3.9539,-148.6675) (3.9539,-148.1403) -- (3.9539,-149.1947) (3.9539,-148.2457) -- (3.6376,-148.0085) (3.9539,-148.6675) -- (3.6376,-148.4303) (3.9539,-149.0892) -- (3.6376,-148.852);
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-149.7219) -- (7.9078,-148.6675) (8.435,-148.6675) -- (7.3807,-148.6675) (8.3296,-148.6675) -- (8.5668,-148.3512) (7.9078,-148.6675) -- (8.1451,-148.3512) (7.4861,-148.6675) -- (7.7233,-148.3512);
% Component: chassisGround
% Massa telaio
\draw[draw=dcColor0, line width=1.5pt] (10.8074,-148.6675) -- (11.8618,-148.6675) (11.8618,-149.1947) -- (11.8618,-148.1403) (11.8618,-149.0892) -- (12.1781,-149.3265) (11.8618,-148.6675) -- (12.1781,-148.9047) (11.8618,-148.2457) -- (12.1781,-148.483);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-150.7763) -- (-0.5272,-150.7763) -- (-0.5272,-151.198) .. controls (-0.0527,-151.198) and (-0.0527,-151.5143) .. (-0.5272,-151.5143) .. controls (-0.0527,-151.5143) and (-0.0527,-151.8306) .. (-0.5272,-151.8306) .. controls (-0.0527,-151.8306) and (-0.0527,-152.1469) .. (-0.5272,-152.1469) .. controls (-0.0527,-152.1469) and (-0.0527,-152.4633) .. (-0.5272,-152.4633) -- (-0.5272,-152.885) -- (-1.0544,-152.885) (1.0544,-150.7763) -- (0.5272,-150.7763) -- (0.5272,-151.198) .. controls (0.0527,-151.198) and (0.0527,-151.5143) .. (0.5272,-151.5143) .. controls (0.0527,-151.5143) and (0.0527,-151.8306) .. (0.5272,-151.8306) .. controls (0.0527,-151.8306) and (0.0527,-152.1469) .. (0.5272,-152.1469) .. controls (0.0527,-152.1469) and (0.0527,-152.4633) .. (0.5272,-152.4633) -- (0.5272,-152.885) -- (1.0544,-152.885);
\draw[draw=dcColor0, line width=1.5pt] (-0.0791,-151.1716) -- (-0.0791,-152.4896) (0.0791,-151.1716) -- (0.0791,-152.4896);
\draw[draw=dcColor0, line width=1.5pt] (0.5272,-151.8306) -- (1.5816,-151.8306);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (5.0083,-150.7763) -- (5.0083,-151.3034) -- (4.5866,-151.3034) .. controls (4.5866,-151.7779) and (4.2702,-151.7779) .. (4.2702,-151.3034) .. controls (4.2702,-151.7779) and (3.9539,-151.7779) .. (3.9539,-151.3034) .. controls (3.9539,-151.7779) and (3.6376,-151.7779) .. (3.6376,-151.3034) .. controls (3.6376,-151.7779) and (3.3213,-151.7779) .. (3.3213,-151.3034) -- (2.8995,-151.3034) -- (2.8995,-150.7763) (5.0083,-152.885) -- (5.0083,-152.3578) -- (4.5866,-152.3578) .. controls (4.5866,-151.8834) and (4.2702,-151.8834) .. (4.2702,-152.3578) .. controls (4.2702,-151.8834) and (3.9539,-151.8834) .. (3.9539,-152.3578) .. controls (3.9539,-151.8834) and (3.6376,-151.8834) .. (3.6376,-152.3578) .. controls (3.6376,-151.8834) and (3.3213,-151.8834) .. (3.3213,-152.3578) -- (2.8995,-152.3578) -- (2.8995,-152.885);
\draw[draw=dcColor0, line width=1.5pt] (4.6129,-151.7516) -- (3.2949,-151.7516) (4.6129,-151.9097) -- (3.2949,-151.9097);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-152.3578) -- (3.9539,-153.4122);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-152.885) -- (8.435,-152.885) -- (8.435,-152.4633) .. controls (7.9606,-152.4633) and (7.9606,-152.1469) .. (8.435,-152.1469) .. controls (7.9606,-152.1469) and (7.9606,-151.8306) .. (8.435,-151.8306) .. controls (7.9606,-151.8306) and (7.9606,-151.5143) .. (8.435,-151.5143) .. controls (7.9606,-151.5143) and (7.9606,-151.198) .. (8.435,-151.198) -- (8.435,-150.7763) -- (8.9622,-150.7763) (6.8535,-152.885) -- (7.3807,-152.885) -- (7.3807,-152.4633) .. controls (7.8551,-152.4633) and (7.8551,-152.1469) .. (7.3807,-152.1469) .. controls (7.8551,-152.1469) and (7.8551,-151.8306) .. (7.3807,-151.8306) .. controls (7.8551,-151.8306) and (7.8551,-151.5143) .. (7.3807,-151.5143) .. controls (7.8551,-151.5143) and (7.8551,-151.198) .. (7.3807,-151.198) -- (7.3807,-150.7763) -- (6.8535,-150.7763);
\draw[draw=dcColor0, line width=1.5pt] (7.9869,-152.4896) -- (7.9869,-151.1716) (7.8288,-152.4896) -- (7.8288,-151.1716);
\draw[draw=dcColor0, line width=1.5pt] (7.3807,-151.8306) -- (6.3263,-151.8306);
% Component: centerTapTransformer
% Center-tap transformer with five exact semantic terminals.
\draw[draw=dcColor0, line width=1.5pt] (10.8074,-152.885) -- (10.8074,-152.3578) -- (11.2291,-152.3578) .. controls (11.2291,-151.8834) and (11.5455,-151.8834) .. (11.5455,-152.3578) .. controls (11.5455,-151.8834) and (11.8618,-151.8834) .. (11.8618,-152.3578) .. controls (11.8618,-151.8834) and (12.1781,-151.8834) .. (12.1781,-152.3578) .. controls (12.1781,-151.8834) and (12.4944,-151.8834) .. (12.4944,-152.3578) -- (12.9161,-152.3578) -- (12.9161,-152.885) (10.8074,-150.7763) -- (10.8074,-151.3034) -- (11.2291,-151.3034) .. controls (11.2291,-151.7779) and (11.5455,-151.7779) .. (11.5455,-151.3034) .. controls (11.5455,-151.7779) and (11.8618,-151.7779) .. (11.8618,-151.3034) .. controls (11.8618,-151.7779) and (12.1781,-151.7779) .. (12.1781,-151.3034) .. controls (12.1781,-151.7779) and (12.4944,-151.7779) .. (12.4944,-151.3034) -- (12.9161,-151.3034) -- (12.9161,-150.7763);
\draw[draw=dcColor0, line width=1.5pt] (11.2028,-151.9097) -- (12.5208,-151.9097) (11.2028,-151.7516) -- (12.5208,-151.7516);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-151.3034) -- (11.8618,-150.2491);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-153.9394) -- (-0.5272,-153.9394) -- (-0.5272,-154.3611) .. controls (-0.0527,-154.3611) and (-0.0527,-154.6775) .. (-0.5272,-154.6775) .. controls (-0.0527,-154.6775) and (-0.0527,-154.9938) .. (-0.5272,-154.9938) .. controls (-0.0527,-154.9938) and (-0.0527,-155.3101) .. (-0.5272,-155.3101) .. controls (-0.0527,-155.3101) and (-0.0527,-155.6264) .. (-0.5272,-155.6264) -- (-0.5272,-156.0482) -- (-1.0544,-156.0482) (1.0544,-153.9394) -- (0.5272,-153.9394) -- (0.5272,-154.3611) .. controls (0.0527,-154.3611) and (0.0527,-154.6775) .. (0.5272,-154.6775) .. controls (0.0527,-154.6775) and (0.0527,-154.9938) .. (0.5272,-154.9938) .. controls (0.0527,-154.9938) and (0.0527,-155.3101) .. (0.5272,-155.3101) .. controls (0.0527,-155.3101) and (0.0527,-155.6264) .. (0.5272,-155.6264) -- (0.5272,-156.0482) -- (1.0544,-156.0482);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (5.0083,-153.9394) -- (5.0083,-154.4666) -- (4.5866,-154.4666) .. controls (4.5866,-154.9411) and (4.2702,-154.9411) .. (4.2702,-154.4666) .. controls (4.2702,-154.9411) and (3.9539,-154.9411) .. (3.9539,-154.4666) .. controls (3.9539,-154.9411) and (3.6376,-154.9411) .. (3.6376,-154.4666) .. controls (3.6376,-154.9411) and (3.3213,-154.9411) .. (3.3213,-154.4666) -- (2.8995,-154.4666) -- (2.8995,-153.9394) (5.0083,-156.0482) -- (5.0083,-155.521) -- (4.5866,-155.521) .. controls (4.5866,-155.0465) and (4.2702,-155.0465) .. (4.2702,-155.521) .. controls (4.2702,-155.0465) and (3.9539,-155.0465) .. (3.9539,-155.521) .. controls (3.9539,-155.0465) and (3.6376,-155.0465) .. (3.6376,-155.521) .. controls (3.6376,-155.0465) and (3.3213,-155.0465) .. (3.3213,-155.521) -- (2.8995,-155.521) -- (2.8995,-156.0482);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-156.0482) -- (8.435,-156.0482) -- (8.435,-155.6264) .. controls (7.9606,-155.6264) and (7.9606,-155.3101) .. (8.435,-155.3101) .. controls (7.9606,-155.3101) and (7.9606,-154.9938) .. (8.435,-154.9938) .. controls (7.9606,-154.9938) and (7.9606,-154.6775) .. (8.435,-154.6775) .. controls (7.9606,-154.6775) and (7.9606,-154.3611) .. (8.435,-154.3611) -- (8.435,-153.9394) -- (8.9622,-153.9394) (6.8535,-156.0482) -- (7.3807,-156.0482) -- (7.3807,-155.6264) .. controls (7.8551,-155.6264) and (7.8551,-155.3101) .. (7.3807,-155.3101) .. controls (7.8551,-155.3101) and (7.8551,-154.9938) .. (7.3807,-154.9938) .. controls (7.8551,-154.9938) and (7.8551,-154.6775) .. (7.3807,-154.6775) .. controls (7.8551,-154.6775) and (7.8551,-154.3611) .. (7.3807,-154.3611) -- (7.3807,-153.9394) -- (6.8535,-153.9394);
% Component: coupledInductors
% Induttori accoppiati
\draw[draw=dcColor0, line width=1.5pt] (10.8074,-156.0482) -- (10.8074,-155.521) -- (11.2291,-155.521) .. controls (11.2291,-155.0465) and (11.5455,-155.0465) .. (11.5455,-155.521) .. controls (11.5455,-155.0465) and (11.8618,-155.0465) .. (11.8618,-155.521) .. controls (11.8618,-155.0465) and (12.1781,-155.0465) .. (12.1781,-155.521) .. controls (12.1781,-155.0465) and (12.4944,-155.0465) .. (12.4944,-155.521) -- (12.9161,-155.521) -- (12.9161,-156.0482) (10.8074,-153.9394) -- (10.8074,-154.4666) -- (11.2291,-154.4666) .. controls (11.2291,-154.9411) and (11.5455,-154.9411) .. (11.5455,-154.4666) .. controls (11.5455,-154.9411) and (11.8618,-154.9411) .. (11.8618,-154.4666) .. controls (11.8618,-154.9411) and (12.1781,-154.9411) .. (12.1781,-154.4666) .. controls (12.1781,-154.9411) and (12.4944,-154.9411) .. (12.4944,-154.4666) -- (12.9161,-154.4666) -- (12.9161,-153.9394);
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-157.6297) -- (-0.6326,-157.6297) (-1.0544,-158.6841) -- (-0.6326,-158.6841) (0.6326,-158.1569) -- (1.0544,-158.1569);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-157.3134) -- (0.6326,-158.1569) -- (-0.6326,-159.0004) -- cycle;
\path (-0.5104,-157.3733) -- (-0.3331,-157.3733) -- (-0.5104,-157.8873) -- (-0.3331,-157.8873) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-157.6824) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (-0.5104,-158.3223) -- (-0.3331,-158.3223) -- (-0.5104,-158.8363) -- (-0.3331,-158.8363) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-158.6314) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-157.1025) -- (4.4811,-157.5243) (3.4267,-157.1025) -- (3.4267,-157.5243) (3.9539,-158.7895) -- (3.9539,-159.2113);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7974,-157.5243) -- (3.9539,-158.7895) -- (3.1104,-157.5243) -- cycle;
\path (4.7375,-157.6465) -- (4.7375,-157.8238) -- (4.2235,-157.6465) -- (4.2235,-157.8238) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.4284,-157.7352) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (3.7886,-157.6465) -- (3.7886,-157.8238) -- (3.2745,-157.6465) -- (3.2745,-157.8238) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.4795,-157.7352) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-158.6841) -- (8.5405,-158.6841) (8.9622,-157.6297) -- (8.5405,-157.6297) (7.2752,-158.1569) -- (6.8535,-158.1569);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5405,-159.0004) -- (7.2752,-158.1569) -- (8.5405,-157.3134) -- cycle;
\path (8.4183,-158.9405) -- (8.2409,-158.9405) -- (8.4183,-158.4265) -- (8.2409,-158.4265) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.3296,-158.6314) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (8.4183,-157.9915) -- (8.2409,-157.9915) -- (8.4183,-157.4775) -- (8.2409,-157.4775) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.3296,-157.6824) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: opAmp
% Amplificatore operazionale
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-159.2113) -- (11.3346,-158.7895) (12.389,-159.2113) -- (12.389,-158.7895) (11.8618,-157.5243) -- (11.8618,-157.1025);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.0183,-158.7895) -- (11.8618,-157.5243) -- (12.7053,-158.7895) -- cycle;
\path (11.0782,-158.6673) -- (11.0782,-158.49) -- (11.5922,-158.6673) -- (11.5922,-158.49) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.3873,-158.5787) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (12.0271,-158.6673) -- (12.0271,-158.49) -- (12.5411,-158.6673) -- (12.5411,-158.49) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.3362,-158.5787) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-160.7929) -- (-0.6326,-160.7929) (-1.0544,-161.8472) -- (-0.6326,-161.8472) (0.6326,-161.32) -- (1.0544,-161.32);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-160.4765) -- (0.6326,-161.32) -- (-0.6326,-162.1636) -- cycle;
\path (-0.5104,-160.5365) -- (-0.3331,-160.5365) -- (-0.5104,-161.0505) -- (-0.3331,-161.0505) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-160.8456) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (-0.5104,-161.4854) -- (-0.3331,-161.4854) -- (-0.5104,-161.9994) -- (-0.3331,-161.9994) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (-0.4218,-161.7945) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (-0.0755,-160.9918) -- (0.0755,-160.9918) -- (-0.0755,-161.5453) -- (0.0755,-161.5453) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-161.32) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-160.2657) -- (4.4811,-160.6874) (3.4267,-160.2657) -- (3.4267,-160.6874) (3.9539,-161.9527) -- (3.9539,-162.3744);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7974,-160.6874) -- (3.9539,-161.9527) -- (3.1104,-160.6874) -- cycle;
\path (4.7375,-160.8096) -- (4.7375,-160.987) -- (4.2235,-160.8096) -- (4.2235,-160.987) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (4.4284,-160.8983) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (3.7886,-160.8096) -- (3.7886,-160.987) -- (3.2745,-160.8096) -- (3.2745,-160.987) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.4795,-160.8983) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (4.2822,-161.2446) -- (4.2822,-161.3955) -- (3.7286,-161.2446) -- (3.7286,-161.3955) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9539,-161.32) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-161.8472) -- (8.5405,-161.8472) (8.9622,-160.7929) -- (8.5405,-160.7929) (7.2752,-161.32) -- (6.8535,-161.32);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5405,-162.1636) -- (7.2752,-161.32) -- (8.5405,-160.4765) -- cycle;
\path (8.4183,-162.1036) -- (8.2409,-162.1036) -- (8.4183,-161.5896) -- (8.2409,-161.5896) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.3296,-161.7945) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (8.4183,-161.1547) -- (8.2409,-161.1547) -- (8.4183,-160.6407) -- (8.2409,-160.6407) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (8.3296,-160.8456) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (7.9833,-161.6483) -- (7.8324,-161.6483) -- (7.9833,-161.0948) -- (7.8324,-161.0948) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-161.32) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: comparator
% Comparatore
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-162.3744) -- (11.3346,-161.9527) (12.389,-162.3744) -- (12.389,-161.9527) (11.8618,-160.6874) -- (11.8618,-160.2657);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.0183,-161.9527) -- (11.8618,-160.6874) -- (12.7053,-161.9527) -- cycle;
\path (11.0782,-161.8305) -- (11.0782,-161.6531) -- (11.5922,-161.8305) -- (11.5922,-161.6531) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.3873,-161.7418) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#8722;</text></g></g>}{−}};
\path (12.0271,-161.8305) -- (12.0271,-161.6531) -- (12.5411,-161.8305) -- (12.5411,-161.6531) -- cycle;
\node[text=dcColor0, font=\fontsize{10.5}{13.65}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (12.3362,-161.7418) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="14">&\string#43;</text></g></g>}{+}};
\path (11.5335,-161.3955) -- (11.5335,-161.2446) -- (12.0871,-161.3955) -- (12.0871,-161.2446) -- cycle;
\node[text=dcColor0, font=\fontsize{11.25}{14.625}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8618,-161.32) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15">&\string#62;</text></g></g>}{>}};
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-163.956) -- (-0.5272,-163.956) (-1.0544,-165.0104) -- (-0.5272,-165.0104);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-163.7451) -- (0,-163.7451) .. controls (0.9226,-163.7451) and (0.9226,-165.2213) .. (0,-165.2213) -- (-0.5272,-165.2213) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.6326,-164.4832) -- (1.0544,-164.4832);
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-163.4288) -- (4.4811,-163.956) (3.4267,-163.4288) -- (3.4267,-163.956);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.692,-163.956) -- (4.692,-164.4832) .. controls (4.692,-165.4058) and (3.2159,-165.4058) .. (3.2159,-164.4832) -- (3.2159,-163.956) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-165.1158) -- (3.9539,-165.5376);
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-165.0104) -- (8.435,-165.0104) (8.9622,-163.956) -- (8.435,-163.956);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-165.2213) -- (7.9078,-165.2213) .. controls (6.9853,-165.2213) and (6.9853,-163.7451) .. (7.9078,-163.7451) -- (8.435,-163.7451) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.2752,-164.4832) -- (6.8535,-164.4832);
% Component: andGate
% Porta AND
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-165.5376) -- (11.3346,-165.0104) (12.389,-165.5376) -- (12.389,-165.0104);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.1237,-165.0104) -- (11.1237,-164.4832) .. controls (11.1237,-163.5606) and (12.5998,-163.5606) .. (12.5998,-164.4832) -- (12.5998,-165.0104) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-163.8506) -- (11.8618,-163.4288);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-167.1191) -- (-0.4745,-167.1191) (-1.0544,-168.1735) -- (-0.4745,-168.1735);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-166.9083) .. controls (-0.2109,-166.9083) and (0.2109,-167.1543) .. (0.6326,-167.6463) .. controls (0.2109,-168.1384) and (-0.2109,-168.3844) .. (-0.6326,-168.3844) .. controls (-0.3515,-167.8923) and (-0.3515,-167.4003) .. (-0.6326,-166.9083) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.6326,-167.6463) -- (1.0544,-167.6463);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-166.5919) -- (4.4811,-167.1719) (3.4267,-166.5919) -- (3.4267,-167.1719);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.692,-167.0137) .. controls (4.692,-167.4355) and (4.446,-167.8572) .. (3.9539,-168.279) .. controls (3.4619,-167.8572) and (3.2159,-167.4355) .. (3.2159,-167.0137) .. controls (3.7079,-167.2949) and (4.1999,-167.2949) .. (4.692,-167.0137) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-168.279) -- (3.9539,-168.7007);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-168.1735) -- (8.3823,-168.1735) (8.9622,-167.1191) -- (8.3823,-167.1191);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5405,-168.3844) .. controls (8.1187,-168.3844) and (7.697,-168.1384) .. (7.2752,-167.6463) .. controls (7.697,-167.1543) and (8.1187,-166.9083) .. (8.5405,-166.9083) .. controls (8.2593,-167.4003) and (8.2593,-167.8923) .. (8.5405,-168.3844) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.2752,-167.6463) -- (6.8535,-167.6463);
% Component: orGate
% Porta OR
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-168.7007) -- (11.3346,-168.1208) (12.389,-168.7007) -- (12.389,-168.1208);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.1237,-168.279) .. controls (11.1237,-167.8572) and (11.3697,-167.4355) .. (11.8618,-167.0137) .. controls (12.3538,-167.4355) and (12.5998,-167.8572) .. (12.5998,-168.279) .. controls (12.1078,-167.9978) and (11.6157,-167.9978) .. (11.1237,-168.279) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-167.0137) -- (11.8618,-166.5919);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-170.8095) -- (-0.5272,-170.8095);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-170.1505) -- (0.5799,-170.8095) -- (-0.5272,-171.4685) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-170.8095) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-170.8095) -- (1.0544,-170.8095);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-169.7551) -- (3.9539,-170.2823);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.6129,-170.2823) -- (3.9539,-171.3894) -- (3.2949,-170.2823) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-171.5475) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-171.653) -- (3.9539,-171.8638);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-170.8095) -- (8.435,-170.8095);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-171.4685) -- (7.3279,-170.8095) -- (8.435,-170.1505) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.1698,-170.8095) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.0643,-170.8095) -- (6.8535,-170.8095);
% Component: notGate
% Porta NOT
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-171.8638) -- (11.8618,-171.3367);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.2028,-171.3367) -- (11.8618,-170.2296) -- (12.5208,-171.3367) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-170.0714) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-169.966) -- (11.8618,-169.7551);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-173.4454) -- (-0.5272,-173.4454) (-1.0544,-174.4998) -- (-0.5272,-174.4998);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-173.2345) -- (0,-173.2345) .. controls (0.9226,-173.2345) and (0.9226,-174.7107) .. (0,-174.7107) -- (-0.5272,-174.7107) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-173.9726) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-173.9726) -- (1.0544,-173.9726);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-172.9182) -- (4.4811,-173.4454) (3.4267,-172.9182) -- (3.4267,-173.4454);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.692,-173.4454) -- (4.692,-173.9726) .. controls (4.692,-174.8952) and (3.2159,-174.8952) .. (3.2159,-173.9726) -- (3.2159,-173.4454) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-174.7107) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-174.8161) -- (3.9539,-175.027);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-174.4998) -- (8.435,-174.4998) (8.9622,-173.4454) -- (8.435,-173.4454);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-174.7107) -- (7.9078,-174.7107) .. controls (6.9853,-174.7107) and (6.9853,-173.2345) .. (7.9078,-173.2345) -- (8.435,-173.2345) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.1698,-173.9726) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.0643,-173.9726) -- (6.8535,-173.9726);
% Component: nandGate
% Porta NAND
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-175.027) -- (11.3346,-174.4998) (12.389,-175.027) -- (12.389,-174.4998);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.1237,-174.4998) -- (11.1237,-173.9726) .. controls (11.1237,-173.05) and (12.5998,-173.05) .. (12.5998,-173.9726) -- (12.5998,-174.4998) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-173.2345) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-173.1291) -- (11.8618,-172.9182);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-176.6086) -- (-0.4745,-176.6086) (-1.0544,-177.6629) -- (-0.4745,-177.6629);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-176.3977) .. controls (-0.2109,-176.3977) and (0.2109,-176.6437) .. (0.6326,-177.1357) .. controls (0.2109,-177.6278) and (-0.2109,-177.8738) .. (-0.6326,-177.8738) .. controls (-0.3515,-177.3818) and (-0.3515,-176.8897) .. (-0.6326,-176.3977) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-177.1357) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-177.1357) -- (1.0544,-177.1357);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-176.0814) -- (4.4811,-176.6613) (3.4267,-176.0814) -- (3.4267,-176.6613);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.692,-176.5031) .. controls (4.692,-176.9249) and (4.446,-177.3466) .. (3.9539,-177.7684) .. controls (3.4619,-177.3466) and (3.2159,-176.9249) .. (3.2159,-176.5031) .. controls (3.7079,-176.7843) and (4.1999,-176.7843) .. (4.692,-176.5031) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-177.8738) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-177.9792) -- (3.9539,-178.1901);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-177.6629) -- (8.3823,-177.6629) (8.9622,-176.6086) -- (8.3823,-176.6086);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5405,-177.8738) .. controls (8.1187,-177.8738) and (7.697,-177.6278) .. (7.2752,-177.1357) .. controls (7.697,-176.6437) and (8.1187,-176.3977) .. (8.5405,-176.3977) .. controls (8.2593,-176.8897) and (8.2593,-177.3818) .. (8.5405,-177.8738) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.1698,-177.1357) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.0643,-177.1357) -- (6.8535,-177.1357);
% Component: norGate
% Porta NOR
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-178.1901) -- (11.3346,-177.6102) (12.389,-178.1901) -- (12.389,-177.6102);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.1237,-177.7684) .. controls (11.1237,-177.3466) and (11.3697,-176.9249) .. (11.8618,-176.5031) .. controls (12.3538,-176.9249) and (12.5998,-177.3466) .. (12.5998,-177.7684) .. controls (12.1078,-177.4872) and (11.6157,-177.4872) .. (11.1237,-177.7684) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-176.3977) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-176.2922) -- (11.8618,-176.0814);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-179.7717) -- (-0.4745,-179.7717) (-1.0544,-180.8261) -- (-0.4745,-180.8261);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-179.5608) .. controls (-0.2109,-179.5608) and (0.2109,-179.8068) .. (0.6326,-180.2989) .. controls (0.2109,-180.7909) and (-0.2109,-181.0369) .. (-0.6326,-181.0369) .. controls (-0.3515,-180.5449) and (-0.3515,-180.0529) .. (-0.6326,-179.5608) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.7908,-179.5608) .. controls (-0.5096,-180.0529) and (-0.5096,-180.5449) .. (-0.7908,-181.0369);
\draw[draw=dcColor0, line width=1.5pt] (0.6326,-180.2989) -- (1.0544,-180.2989);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-179.2445) -- (4.4811,-179.8244) (3.4267,-179.2445) -- (3.4267,-179.8244);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.692,-179.6663) .. controls (4.692,-180.088) and (4.446,-180.5098) .. (3.9539,-180.9315) .. controls (3.4619,-180.5098) and (3.2159,-180.088) .. (3.2159,-179.6663) .. controls (3.7079,-179.9474) and (4.1999,-179.9474) .. (4.692,-179.6663) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.692,-179.5081) .. controls (4.1999,-179.7893) and (3.7079,-179.7893) .. (3.2159,-179.5081);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-180.9315) -- (3.9539,-181.3533);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-180.8261) -- (8.3823,-180.8261) (8.9622,-179.7717) -- (8.3823,-179.7717);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5405,-181.0369) .. controls (8.1187,-181.0369) and (7.697,-180.7909) .. (7.2752,-180.2989) .. controls (7.697,-179.8068) and (8.1187,-179.5608) .. (8.5405,-179.5608) .. controls (8.2593,-180.0529) and (8.2593,-180.5449) .. (8.5405,-181.0369) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.6986,-181.0369) .. controls (8.4175,-180.5449) and (8.4175,-180.0529) .. (8.6986,-179.5608);
\draw[draw=dcColor0, line width=1.5pt] (7.2752,-180.2989) -- (6.8535,-180.2989);
% Component: xorGate
% Porta XOR
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-181.3533) -- (11.3346,-180.7733) (12.389,-181.3533) -- (12.389,-180.7733);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.1237,-180.9315) .. controls (11.1237,-180.5098) and (11.3697,-180.088) .. (11.8618,-179.6663) .. controls (12.3538,-180.088) and (12.5998,-180.5098) .. (12.5998,-180.9315) .. controls (12.1078,-180.6503) and (11.6157,-180.6503) .. (11.1237,-180.9315) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.1237,-181.0897) .. controls (11.6157,-180.8085) and (12.1078,-180.8085) .. (12.5998,-181.0897);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-179.6663) -- (11.8618,-179.2445);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-182.9348) -- (-0.4745,-182.9348) (-1.0544,-183.9892) -- (-0.4745,-183.9892);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.6326,-182.724) .. controls (-0.2109,-182.724) and (0.2109,-182.97) .. (0.6326,-183.462) .. controls (0.2109,-183.9541) and (-0.2109,-184.2001) .. (-0.6326,-184.2001) .. controls (-0.3515,-183.708) and (-0.3515,-183.216) .. (-0.6326,-182.724) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.7908,-182.724) .. controls (-0.5096,-183.216) and (-0.5096,-183.708) .. (-0.7908,-184.2001);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0.7381,-183.462) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (0.8435,-183.462) -- (1.0544,-183.462);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-182.4076) -- (4.4811,-182.9875) (3.4267,-182.4076) -- (3.4267,-182.9875);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.692,-182.8294) .. controls (4.692,-183.2511) and (4.446,-183.6729) .. (3.9539,-184.0946) .. controls (3.4619,-183.6729) and (3.2159,-183.2511) .. (3.2159,-182.8294) .. controls (3.7079,-183.1106) and (4.1999,-183.1106) .. (4.692,-182.8294) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.692,-182.6712) .. controls (4.1999,-182.9524) and (3.7079,-182.9524) .. (3.2159,-182.6712);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-184.2001) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-184.3055) -- (3.9539,-184.5164);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-183.9892) -- (8.3823,-183.9892) (8.9622,-182.9348) -- (8.3823,-182.9348);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.5405,-184.2001) .. controls (8.1187,-184.2001) and (7.697,-183.9541) .. (7.2752,-183.462) .. controls (7.697,-182.97) and (8.1187,-182.724) .. (8.5405,-182.724) .. controls (8.2593,-183.216) and (8.2593,-183.708) .. (8.5405,-184.2001) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.6986,-184.2001) .. controls (8.4175,-183.708) and (8.4175,-183.216) .. (8.6986,-182.724);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.1698,-183.462) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (7.0643,-183.462) -- (6.8535,-183.462);
% Component: xnorGate
% Porta XNOR
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-184.5164) -- (11.3346,-183.9365) (12.389,-184.5164) -- (12.389,-183.9365);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.1237,-184.0946) .. controls (11.1237,-183.6729) and (11.3697,-183.2511) .. (11.8618,-182.8294) .. controls (12.3538,-183.2511) and (12.5998,-183.6729) .. (12.5998,-184.0946) .. controls (12.1078,-183.8135) and (11.6157,-183.8135) .. (11.1237,-184.0946) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.1237,-184.2528) .. controls (11.6157,-183.9716) and (12.1078,-183.9716) .. (12.5998,-184.2528);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-182.724) circle (3pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-182.6185) -- (11.8618,-182.4076);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-186.6252) -- (-0.5272,-186.6252);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-185.9662) -- (0.5799,-186.6252) -- (-0.5272,-187.2841) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (0.5799,-186.6252) -- (1.0544,-186.6252);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-185.5708) -- (3.9539,-186.098);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.6129,-186.098) -- (3.9539,-187.2051) -- (3.2949,-186.098) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-187.2051) -- (3.9539,-187.6795);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-186.6252) -- (8.435,-186.6252);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-187.2841) -- (7.3279,-186.6252) -- (8.435,-185.9662) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (7.3279,-186.6252) -- (6.8535,-186.6252);
% Component: buffer
% Buffer
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-187.6795) -- (11.8618,-187.1523);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.2028,-187.1523) -- (11.8618,-186.0452) -- (12.5208,-187.1523) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-186.0452) -- (11.8618,-185.5708);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-189.7883) -- (-0.1318,-189.7883);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-189.7883) circle (3.75pt);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-188.7339) -- (3.9539,-189.6565);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-189.7883) circle (3.75pt);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-189.7883) -- (8.0396,-189.7883);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-189.7883) circle (3.75pt);
% Component: terminal
% Terminale
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-190.8427) -- (11.8618,-189.9201);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-189.7883) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (0,-194.0058) -- (0,-193.0832);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-192.9514) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (2.8995,-192.9514) -- (3.8221,-192.9514);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-192.9514) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (7.9078,-191.8971) -- (7.9078,-192.8196);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-192.9514) circle (3.75pt);
% Component: testPoint
% Punto di test
\draw[draw=dcColor0, line width=1.5pt] (12.9161,-192.9514) -- (11.9936,-192.9514);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-192.9514) circle (3.75pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4745,-195.3238) -- (0.4745,-195.3238) -- (0.4745,-196.9054) -- (-0.4745,-196.9054) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-195.5874) -- (-0.1318,-195.5874);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-195.5874) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-196.6418) -- (-0.1318,-196.6418);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-196.6418) circle (2.25pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-195.6401) -- (4.7447,-196.589) -- (3.1631,-196.589) -- (3.1631,-195.6401) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-195.0602) -- (4.4811,-195.9828);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4811,-196.0355) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (3.4267,-195.0602) -- (3.4267,-195.9828);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.4267,-196.0355) circle (2.25pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3823,-196.9054) -- (7.4334,-196.9054) -- (7.4334,-195.3238) -- (8.3823,-195.3238) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-196.6418) -- (8.0396,-196.6418);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9869,-196.6418) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-195.5874) -- (8.0396,-195.5874);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9869,-195.5874) circle (2.25pt);
% Component: connector2
% Connector socket with two exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.071,-196.589) -- (11.071,-195.6401) -- (12.6526,-195.6401) -- (12.6526,-196.589) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-197.1689) -- (11.3346,-196.2464);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.3346,-196.1936) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (12.389,-197.1689) -- (12.389,-196.2464);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.389,-196.1936) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.4745,-198.4869) -- (0.4745,-198.4869) -- (0.4745,-200.0685) -- (-0.4745,-200.0685) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-198.7505) -- (-0.1318,-198.7505);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-198.7505) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-199.2777) -- (-0.1318,-199.2777);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-199.2777) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-199.8049) -- (-0.1318,-199.8049);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.0791,-199.8049) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.7447,-198.8032) -- (4.7447,-199.7522) -- (3.1631,-199.7522) -- (3.1631,-198.8032) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.4811,-198.2233) -- (4.4811,-199.1459);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.4811,-199.1986) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-198.2233) -- (3.9539,-199.1459);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-199.1986) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (3.4267,-198.2233) -- (3.4267,-199.1459);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.4267,-199.1986) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.3823,-200.0685) -- (7.4334,-200.0685) -- (7.4334,-198.4869) -- (8.3823,-198.4869) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-199.8049) -- (8.0396,-199.8049);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9869,-199.8049) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-199.2777) -- (8.0396,-199.2777);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9869,-199.2777) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-198.7505) -- (8.0396,-198.7505);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9869,-198.7505) circle (2.25pt);
% Component: connector3
% Connector socket with three exact, independent pins.
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.071,-199.7522) -- (11.071,-198.8032) -- (12.6526,-198.8032) -- (12.6526,-199.7522) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.3346,-200.3321) -- (11.3346,-199.4095);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.3346,-199.3568) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-200.3321) -- (11.8618,-199.4095);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-199.3568) circle (2.25pt);
\draw[draw=dcColor0, line width=1.5pt] (12.389,-200.3321) -- (12.389,-199.4095);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (12.389,-199.3568) circle (2.25pt);
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-202.4408) -- (-0.5272,-202.4408);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-202.1245) -- (0.2636,-202.1245) -- (0.5799,-202.4408) -- (0.2636,-202.7572) -- (-0.5272,-202.7572) -- cycle;
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-201.3865) -- (3.9539,-201.9137);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2702,-201.9137) -- (4.2702,-202.7044) -- (3.9539,-203.0208) -- (3.6376,-202.7044) -- (3.6376,-201.9137) -- cycle;
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-202.4408) -- (8.435,-202.4408);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-202.7572) -- (7.6443,-202.7572) -- (7.3279,-202.4408) -- (7.6443,-202.1245) -- (8.435,-202.1245) -- cycle;
% Component: port
% Single-connection diagram port outline.
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-203.4952) -- (11.8618,-202.968);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.5455,-202.968) -- (11.5455,-202.1773) -- (11.8618,-201.8609) -- (12.1781,-202.1773) -- (12.1781,-202.968) -- cycle;
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-205.604) -- (-0.5272,-205.604) (0.5272,-205.604) -- (1.0544,-205.604);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-205.3667) -- (0.5272,-205.3667) -- (0.5272,-205.8412) -- (-0.5272,-205.8412) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.5272,-205.604) -- (0.5272,-205.604);
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-204.5496) -- (3.9539,-205.0768) (3.9539,-206.1312) -- (3.9539,-206.6584);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1912,-205.0768) -- (4.1912,-206.1312) -- (3.7167,-206.1312) -- (3.7167,-205.0768) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-205.0768) -- (3.9539,-206.1312);
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-205.604) -- (8.435,-205.604) (7.3807,-205.604) -- (6.8535,-205.604);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-205.8412) -- (7.3807,-205.8412) -- (7.3807,-205.3667) -- (8.435,-205.3667) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.435,-205.604) -- (7.3807,-205.604);
% Component: fuse
% Fusibile
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-206.6584) -- (11.8618,-206.1312) (11.8618,-205.0768) -- (11.8618,-204.5496);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6245,-206.1312) -- (11.6245,-205.0768) -- (12.099,-205.0768) -- (12.099,-206.1312) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-206.1312) -- (11.8618,-205.0768);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-208.7671) -- (-0.5272,-208.7671) (0.5272,-208.7671) -- (1.0544,-208.7671);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-208.7671) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (-0.369,-208.3981) -- (0.369,-209.1362) (-0.369,-209.1362) -- (0.369,-208.3981);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-207.7127) -- (3.9539,-208.2399) (3.9539,-209.2943) -- (3.9539,-209.8215);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-208.7671) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (4.323,-208.3981) -- (3.5849,-209.1362) (3.5849,-208.3981) -- (4.323,-209.1362);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-208.7671) -- (8.435,-208.7671) (7.3807,-208.7671) -- (6.8535,-208.7671);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-208.7671) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (8.2769,-209.1362) -- (7.5388,-208.3981) (8.2769,-208.3981) -- (7.5388,-209.1362);
% Component: lamp
% Lampadina
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-209.8215) -- (11.8618,-209.2943) (11.8618,-208.2399) -- (11.8618,-207.7127);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-208.7671) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (11.4927,-209.1362) -- (12.2308,-208.3981) (12.2308,-209.1362) -- (11.4927,-208.3981);
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-211.9303) -- (-0.5272,-211.9303) (0.5272,-211.9303) -- (1.0544,-211.9303);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-211.9303) circle (15pt);
\path (-0.2327,-211.519) -- (0.2327,-211.519) -- (-0.2327,-212.2571) -- (0.2327,-212.2571) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-211.9566) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-210.8759) -- (3.9539,-211.4031) (3.9539,-212.4575) -- (3.9539,-212.9846);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-211.9303) circle (15pt);
\path (4.3652,-211.6976) -- (4.3652,-212.163) -- (3.6271,-211.6976) -- (3.6271,-212.163) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9276,-211.9303) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-211.9303) -- (8.435,-211.9303) (7.3807,-211.9303) -- (6.8535,-211.9303);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-211.9303) circle (15pt);
\path (8.1406,-212.3415) -- (7.6751,-212.3415) -- (8.1406,-211.6034) -- (7.6751,-211.6034) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-211.9039) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: motor
% Motore
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-212.9846) -- (11.8618,-212.4575) (11.8618,-211.4031) -- (11.8618,-210.8759);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-211.9303) circle (15pt);
\path (11.4505,-212.163) -- (11.4505,-211.6976) -- (12.1886,-212.163) -- (12.1886,-211.6976) -- cycle;
\node[text=dcColor0, font=\fontsize{15}{19.5}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8881,-211.9303) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="20">&\string#77;</text></g></g>}{M}};
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-215.0934) -- (-0.3163,-215.0934) (0.3163,-215.0934) -- (1.0544,-215.0934);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.3163,-214.9089) -- (0.3163,-214.9089) -- (0.3163,-215.2779) -- (-0.3163,-215.2779) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.3163,-214.9089) -- (-0.5535,-214.5662) -- (0.5535,-214.5662) -- (0.3163,-214.9089) -- cycle;
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-214.039) -- (3.9539,-214.7771) (3.9539,-215.4097) -- (3.9539,-216.1478);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1384,-214.7771) -- (4.1384,-215.4097) -- (3.7694,-215.4097) -- (3.7694,-214.7771) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.1384,-214.7771) -- (4.4811,-214.5399) -- (4.4811,-215.6469) -- (4.1384,-215.4097) -- cycle;
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-215.0934) -- (8.2242,-215.0934) (7.5915,-215.0934) -- (6.8535,-215.0934);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2242,-215.2779) -- (7.5915,-215.2779) -- (7.5915,-214.9089) -- (8.2242,-214.9089) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.2242,-215.2779) -- (8.4614,-215.6206) -- (7.3543,-215.6206) -- (7.5915,-215.2779) -- cycle;
% Component: speaker
% Altoparlante
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-216.1478) -- (11.8618,-215.4097) (11.8618,-214.7771) -- (11.8618,-214.039);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6773,-215.4097) -- (11.6773,-214.7771) -- (12.0463,-214.7771) -- (12.0463,-215.4097) -- cycle;
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.6773,-215.4097) -- (11.3346,-215.6469) -- (11.3346,-214.5399) -- (11.6773,-214.7771) -- cycle;
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-218.2565) -- (-0.5272,-218.2565) (0.5272,-218.2565) -- (1.0544,-218.2565);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (-0.5272,-217.9402) -- (0.5272,-217.9402) -- (0.5272,-218.5729) -- (-0.5272,-218.5729) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (-0.2636,-217.7557) .. controls (-0.0879,-217.58) and (0.0879,-217.58) .. (0.2636,-217.7557) (-0.3954,-217.5976) .. controls (-0.1318,-217.334) and (0.1318,-217.334) .. (0.3954,-217.5976);
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-217.2022) -- (3.9539,-217.7293) (3.9539,-218.7837) -- (3.9539,-219.3109);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (4.2702,-217.7293) -- (4.2702,-218.7837) -- (3.6376,-218.7837) -- (3.6376,-217.7293) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (4.4548,-217.9929) .. controls (4.6305,-218.1687) and (4.6305,-218.3444) .. (4.4548,-218.5201) (4.6129,-217.8611) .. controls (4.8765,-218.1247) and (4.8765,-218.3883) .. (4.6129,-218.6519);
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-218.2565) -- (8.435,-218.2565) (7.3807,-218.2565) -- (6.8535,-218.2565);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (8.435,-218.5729) -- (7.3807,-218.5729) -- (7.3807,-217.9402) -- (8.435,-217.9402) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (8.1714,-218.7574) .. controls (7.9957,-218.9331) and (7.82,-218.9331) .. (7.6443,-218.7574) (8.3032,-218.9155) .. controls (8.0396,-219.1791) and (7.776,-219.1791) .. (7.5125,-218.9155);
% Component: buzzer
% Buzzer: native symbol unavailable in the bundled CircuitikZ compiler; shared SVG-equivalent geometry.
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-219.3109) -- (11.8618,-218.7837) (11.8618,-217.7293) -- (11.8618,-217.2022);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.5455,-218.7837) -- (11.5455,-217.7293) -- (12.1781,-217.7293) -- (12.1781,-218.7837) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.3609,-218.5201) .. controls (11.1852,-218.3444) and (11.1852,-218.1687) .. (11.3609,-217.9929) (11.2028,-218.6519) .. controls (10.9392,-218.3883) and (10.9392,-218.1247) .. (11.2028,-217.8611);
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-221.4197) -- (-0.5272,-221.4197) (0.5272,-221.4197) -- (1.0544,-221.4197);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (0,-221.4197) circle (18pt);
\path (-0.5471,-221.1299) -- (0.5471,-221.1299) -- (-0.5471,-221.6176) -- (0.5471,-221.6176) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-221.4197) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-220.3653) -- (3.9539,-220.8925) (3.9539,-221.9469) -- (3.9539,-222.4741);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (3.9539,-221.4197) circle (18pt);
\path (4.2437,-220.8726) -- (4.2437,-221.9667) -- (3.756,-220.8726) -- (3.756,-221.9667) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-90] at (3.9539,-221.4197) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-221.4197) -- (8.435,-221.4197) (7.3807,-221.4197) -- (6.8535,-221.4197);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (7.9078,-221.4197) circle (18pt);
\path (8.4549,-221.7094) -- (7.3608,-221.7094) -- (8.4549,-221.2218) -- (7.3608,-221.2218) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-180] at (7.9078,-221.4197) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: circleBlock
% Blocco circolare
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-222.4741) -- (11.8618,-221.9469) (11.8618,-220.8925) -- (11.8618,-220.3653);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.8618,-221.4197) circle (18pt);
\path (11.572,-221.9667) -- (11.572,-220.8726) -- (12.0597,-221.9667) -- (12.0597,-220.8726) -- cycle;
\node[text=dcColor0, font=\fontsize{9.75}{12.675}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=-270] at (11.8618,-221.4197) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#171A20" stroke="none"><g transform="translate(0,0)"><text text-anchor="middle" dominant-baseline="middle" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="13">&\string#66;&\string#76;&\string#79;&\string#67;&\string#75;</text></g></g>}{BLOCK}};
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (-1.0544,-224.5828) -- (-0.6326,-224.5828) -- (-0.5272,-224.3456) -- (-0.3163,-224.82) -- (-0.1054,-224.3456) -- (0.1054,-224.82) -- (0.3163,-224.3456) -- (0.5272,-224.82) -- (0.6326,-224.5828) -- (1.0544,-224.5828);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (3.9539,-223.5284) -- (3.9539,-223.9502) -- (4.1912,-224.0556) -- (3.7167,-224.2665) -- (4.1912,-224.4774) -- (3.7167,-224.6883) -- (4.1912,-224.8991) -- (3.7167,-225.11) -- (3.9539,-225.2154) -- (3.9539,-225.6372);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (8.9622,-224.5828) -- (8.5405,-224.5828) -- (8.435,-224.82) -- (8.2242,-224.3456) -- (8.0133,-224.82) -- (7.8024,-224.3456) -- (7.5915,-224.82) -- (7.3807,-224.3456) -- (7.2752,-224.5828) -- (6.8535,-224.5828);
% Component: americanResistor
% Resistenza statunitense
\draw[draw=dcColor0, line width=1.5pt] (11.8618,-225.6372) -- (11.8618,-225.2154) -- (11.6245,-225.11) -- (12.099,-224.8991) -- (11.6245,-224.6883) -- (12.099,-224.4774) -- (11.6245,-224.2665) -- (12.099,-224.0556) -- (11.8618,-223.9502) -- (11.8618,-223.5284);
\path (-0.3427,1.2125) -- (0.339,1.2125) -- (-0.3427,0.3717) -- (0.339,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.6112,1.2125) -- (4.2929,1.2125) -- (3.6112,0.3717) -- (4.2929,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (7.5652,1.2125) -- (8.2468,1.2125) -- (7.5652,0.3717) -- (8.2468,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (11.5191,1.2125) -- (12.2007,1.2125) -- (11.5191,0.3717) -- (12.2007,0.3717) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,0.7908) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3295,-1.9506) -- (0.3371,-1.9506) -- (-0.3295,-2.7914) -- (0.3371,-2.7914) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-2.3724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (3.6244,-1.9506) -- (4.291,-1.9506) -- (3.6244,-2.7914) -- (4.291,-2.7914) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-2.3724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (7.5784,-1.9506) -- (8.245,-1.9506) -- (7.5784,-2.7914) -- (8.245,-2.7914) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-2.3724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (11.5323,-1.9506) -- (12.1989,-1.9506) -- (11.5323,-2.7914) -- (12.1989,-2.7914) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-2.3724) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (-0.3295,-5.1137) -- (0.3371,-5.1137) -- (-0.3295,-5.9546) -- (0.3371,-5.9546) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-5.5355) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (3.6244,-5.1137) -- (4.291,-5.1137) -- (3.6244,-5.9546) -- (4.291,-5.9546) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-5.5355) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (7.5784,-5.1137) -- (8.245,-5.1137) -- (7.5784,-5.9546) -- (8.245,-5.9546) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-5.5355) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (11.5323,-5.1137) -- (12.1989,-5.1137) -- (11.5323,-5.9546) -- (12.1989,-5.9546) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-5.5355) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (-0.3163,-8.2769) -- (0.3202,-8.2769) -- (-0.3163,-9.1177) -- (0.3202,-9.1177) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-8.6986) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (3.6376,-8.2769) -- (4.2741,-8.2769) -- (3.6376,-9.1177) -- (4.2741,-9.1177) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-8.6986) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (7.5915,-8.2769) -- (8.2281,-8.2769) -- (7.5915,-9.1177) -- (8.2281,-9.1177) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-8.6986) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (11.5455,-8.2769) -- (12.182,-8.2769) -- (11.5455,-9.1177) -- (12.182,-9.1177) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-8.6986) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (-0.3427,-11.44) -- (0.339,-11.44) -- (-0.3427,-12.2808) -- (0.339,-12.2808) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-11.8618) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.6112,-11.44) -- (4.2929,-11.44) -- (3.6112,-12.2808) -- (4.2929,-12.2808) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-11.8618) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (7.5652,-11.44) -- (8.2468,-11.44) -- (7.5652,-12.2808) -- (8.2468,-12.2808) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-11.8618) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (11.5191,-11.44) -- (12.2007,-11.44) -- (11.5191,-12.2808) -- (12.2007,-12.2808) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-11.8618) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3031,-14.6032) -- (0.3159,-14.6032) -- (-0.3031,-15.444) -- (0.3159,-15.444) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-15.0249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (3.6508,-14.6032) -- (4.2698,-14.6032) -- (3.6508,-15.444) -- (4.2698,-15.444) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-15.0249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (7.6047,-14.6032) -- (8.2237,-14.6032) -- (7.6047,-15.444) -- (8.2237,-15.444) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-15.0249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (11.5586,-14.6032) -- (12.1777,-14.6032) -- (11.5586,-15.444) -- (12.1777,-15.444) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-15.0249) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-9.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="1.9531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$P_1$}};
\path (-0.3427,-17.7663) -- (0.3515,-17.7663) -- (-0.3427,-18.6071) -- (0.3515,-18.6071) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-18.188) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.6112,-17.7663) -- (4.3055,-17.7663) -- (3.6112,-18.6071) -- (4.3055,-18.6071) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-18.188) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (7.5652,-17.7663) -- (8.2594,-17.7663) -- (7.5652,-18.6071) -- (8.2594,-18.6071) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-18.188) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (11.5191,-17.7663) -- (12.2133,-17.7663) -- (11.5191,-18.6071) -- (12.2133,-18.6071) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-18.188) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-20.9294) -- (0.3178,-20.9294) -- (-0.3163,-21.7703) -- (0.3178,-21.7703) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-21.3512) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.6376,-20.9294) -- (4.2717,-20.9294) -- (3.6376,-21.7703) -- (4.2717,-21.7703) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-21.3512) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (7.5915,-20.9294) -- (8.2256,-20.9294) -- (7.5915,-21.7703) -- (8.2256,-21.7703) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-21.3512) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (11.5455,-20.9294) -- (12.1795,-20.9294) -- (11.5455,-21.7703) -- (12.1795,-21.7703) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-21.3512) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.3427,-24.0926) -- (0.3367,-24.0926) -- (-0.3427,-24.9334) -- (0.3367,-24.9334) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-24.5143) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (3.6112,-24.0926) -- (4.2906,-24.0926) -- (3.6112,-24.9334) -- (4.2906,-24.9334) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-24.5143) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (7.5652,-24.0926) -- (8.2445,-24.0926) -- (7.5652,-24.9334) -- (8.2445,-24.9334) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-24.5143) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (11.5191,-24.0926) -- (12.1985,-24.0926) -- (11.5191,-24.9334) -- (12.1985,-24.9334) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-24.5143) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (-0.3427,-27.2557) -- (0.3515,-27.2557) -- (-0.3427,-28.0965) -- (0.3515,-28.0965) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-27.6775) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.6112,-27.2557) -- (4.3055,-27.2557) -- (3.6112,-28.0965) -- (4.3055,-28.0965) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-27.6775) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (7.5652,-27.2557) -- (8.2594,-27.2557) -- (7.5652,-28.0965) -- (8.2594,-28.0965) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-27.6775) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (11.5191,-27.2557) -- (12.2133,-27.2557) -- (11.5191,-28.0965) -- (12.2133,-28.0965) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-27.6775) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-30.4188) -- (0.3178,-30.4188) -- (-0.3163,-31.2597) -- (0.3178,-31.2597) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-30.8406) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.6376,-30.4188) -- (4.2717,-30.4188) -- (3.6376,-31.2597) -- (4.2717,-31.2597) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-30.8406) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (7.5915,-30.4188) -- (8.2256,-30.4188) -- (7.5915,-31.2597) -- (8.2256,-31.2597) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-30.8406) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (11.5455,-30.4188) -- (12.1795,-30.4188) -- (11.5455,-31.2597) -- (12.1795,-31.2597) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-30.8406) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.369,-33.582) -- (0.3668,-33.582) -- (-0.369,-34.4228) -- (0.3668,-34.4228) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-34.0037) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.5849,-33.582) -- (4.3207,-33.582) -- (3.5849,-34.4228) -- (4.3207,-34.4228) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-34.0037) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (7.5388,-33.582) -- (8.2746,-33.582) -- (7.5388,-34.4228) -- (8.2746,-34.4228) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-34.0037) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (11.4927,-33.582) -- (12.2285,-33.582) -- (11.4927,-34.4228) -- (12.2285,-34.4228) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-34.0037) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-36.7451) -- (0.3668,-36.7451) -- (-0.369,-37.5859) -- (0.3668,-37.5859) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-37.1669) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.5849,-36.7451) -- (4.3207,-36.7451) -- (3.5849,-37.5859) -- (4.3207,-37.5859) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-37.1669) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (7.5388,-36.7451) -- (8.2746,-36.7451) -- (7.5388,-37.5859) -- (8.2746,-37.5859) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-37.1669) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (11.4927,-36.7451) -- (12.2285,-36.7451) -- (11.4927,-37.5859) -- (12.2285,-37.5859) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-37.1669) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-39.9083) -- (0.3668,-39.9083) -- (-0.369,-40.7491) -- (0.3668,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.5849,-39.9083) -- (4.3207,-39.9083) -- (3.5849,-40.7491) -- (4.3207,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (7.5388,-39.9083) -- (8.2746,-39.9083) -- (7.5388,-40.7491) -- (8.2746,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (11.4927,-39.9083) -- (12.2285,-39.9083) -- (11.4927,-40.7491) -- (12.2285,-40.7491) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-40.33) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.3559,-43.0714) -- (0.3635,-43.0714) -- (-0.3559,-43.9122) -- (0.3635,-43.9122) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-43.4932) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.5981,-43.0714) -- (4.3174,-43.0714) -- (3.5981,-43.9122) -- (4.3174,-43.9122) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-43.4932) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (7.552,-43.0714) -- (8.2713,-43.0714) -- (7.552,-43.9122) -- (8.2713,-43.9122) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-43.4932) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (11.5059,-43.0714) -- (12.2252,-43.0714) -- (11.5059,-43.9122) -- (12.2252,-43.9122) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-43.4932) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-46.2345) -- (0.3635,-46.2345) -- (-0.3559,-47.0754) -- (0.3635,-47.0754) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-46.6563) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.5981,-46.2345) -- (4.3174,-46.2345) -- (3.5981,-47.0754) -- (4.3174,-47.0754) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-46.6563) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (7.552,-46.2345) -- (8.2713,-46.2345) -- (7.552,-47.0754) -- (8.2713,-47.0754) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-46.6563) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (11.5059,-46.2345) -- (12.2252,-46.2345) -- (11.5059,-47.0754) -- (12.2252,-47.0754) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-46.6563) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.369,-52.5608) -- (0.3723,-52.5608) -- (-0.369,-53.4016) -- (0.3723,-53.4016) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-52.9826) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (3.5849,-52.5608) -- (4.3263,-52.5608) -- (3.5849,-53.4016) -- (4.3263,-53.4016) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-52.9826) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (7.5388,-52.5608) -- (8.2802,-52.5608) -- (7.5388,-53.4016) -- (8.2802,-53.4016) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-52.9826) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (11.4927,-52.5608) -- (12.2341,-52.5608) -- (11.4927,-53.4016) -- (12.2341,-53.4016) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-52.9826) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#65;</text><text x="4.0938" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$A_1$}};
\path (-0.3427,-55.724) -- (0.3515,-55.724) -- (-0.3427,-56.5648) -- (0.3515,-56.5648) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-56.1457) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.6112,-55.724) -- (4.3055,-55.724) -- (3.6112,-56.5648) -- (4.3055,-56.5648) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-56.1457) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (7.5652,-55.724) -- (8.2594,-55.724) -- (7.5652,-56.5648) -- (8.2594,-56.5648) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-56.1457) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (11.5191,-55.724) -- (12.2133,-55.724) -- (11.5191,-56.5648) -- (12.2133,-56.5648) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-56.1457) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3559,-58.0963) -- (0.3554,-58.0963) -- (-0.3559,-58.9371) -- (0.3554,-58.9371) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-58.5181) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (3.5981,-58.0963) -- (4.3094,-58.0963) -- (3.5981,-58.9371) -- (4.3094,-58.9371) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-58.5181) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (7.552,-58.0963) -- (8.2633,-58.0963) -- (7.552,-58.9371) -- (8.2633,-58.9371) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-58.5181) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (11.5059,-58.0963) -- (12.2172,-58.0963) -- (11.5059,-58.9371) -- (12.2172,-58.9371) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-58.5181) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (-0.3559,-62.0502) -- (0.3635,-62.0502) -- (-0.3559,-62.8911) -- (0.3635,-62.8911) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-62.472) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (3.5981,-62.0502) -- (4.3174,-62.0502) -- (3.5981,-62.8911) -- (4.3174,-62.8911) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-62.472) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (7.552,-62.0502) -- (8.2713,-62.0502) -- (7.552,-62.8911) -- (8.2713,-62.8911) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-62.472) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (11.5059,-62.0502) -- (12.2252,-62.0502) -- (11.5059,-62.8911) -- (12.2252,-62.8911) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-62.472) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (-0.3427,-64.7389) -- (0.339,-64.7389) -- (-0.3427,-65.5797) -- (0.339,-65.5797) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-65.1606) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.6112,-64.7389) -- (4.2929,-64.7389) -- (3.6112,-65.5797) -- (4.2929,-65.5797) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-65.1606) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (7.5652,-64.7389) -- (8.2468,-64.7389) -- (7.5652,-65.5797) -- (8.2468,-65.5797) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-65.1606) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (11.5191,-64.7389) -- (12.2007,-64.7389) -- (11.5191,-65.5797) -- (12.2007,-65.5797) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-65.1606) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3427,-67.902) -- (0.339,-67.902) -- (-0.3427,-68.7429) -- (0.339,-68.7429) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-68.3238) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.6112,-67.902) -- (4.2929,-67.902) -- (3.6112,-68.7429) -- (4.2929,-68.7429) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-68.3238) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (7.5652,-67.902) -- (8.2468,-67.902) -- (7.5652,-68.7429) -- (8.2468,-68.7429) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-68.3238) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (11.5191,-67.902) -- (12.2007,-67.902) -- (11.5191,-68.7429) -- (12.2007,-68.7429) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-68.3238) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (-0.3295,-71.0652) -- (0.3371,-71.0652) -- (-0.3295,-71.906) -- (0.3371,-71.906) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-71.4869) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (3.6244,-71.0652) -- (4.291,-71.0652) -- (3.6244,-71.906) -- (4.291,-71.906) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-71.4869) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (7.5784,-71.0652) -- (8.245,-71.0652) -- (7.5784,-71.906) -- (8.245,-71.906) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-71.4869) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (11.5323,-71.0652) -- (12.1989,-71.0652) -- (11.5323,-71.906) -- (12.1989,-71.906) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-71.4869) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#67;</text><text x="2.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$C_1$}};
\path (-0.3163,-74.2283) -- (0.3202,-74.2283) -- (-0.3163,-75.0691) -- (0.3202,-75.0691) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-74.6501) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (3.6376,-74.2283) -- (4.2741,-74.2283) -- (3.6376,-75.0691) -- (4.2741,-75.0691) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-74.6501) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (7.5915,-74.2283) -- (8.2281,-74.2283) -- (7.5915,-75.0691) -- (8.2281,-75.0691) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-74.6501) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (11.5455,-74.2283) -- (12.182,-74.2283) -- (11.5455,-75.0691) -- (12.182,-75.0691) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-74.6501) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (-0.3427,-77.3914) -- (0.3515,-77.3914) -- (-0.3427,-78.2323) -- (0.3515,-78.2323) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-77.8132) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.6112,-77.3914) -- (4.3055,-77.3914) -- (3.6112,-78.2323) -- (4.3055,-78.2323) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-77.8132) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (7.5652,-77.3914) -- (8.2594,-77.3914) -- (7.5652,-78.2323) -- (8.2594,-78.2323) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-77.8132) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (11.5191,-77.3914) -- (12.2133,-77.3914) -- (11.5191,-78.2323) -- (12.2133,-78.2323) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-77.8132) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-80.5546) -- (0.3178,-80.5546) -- (-0.3163,-81.3954) -- (0.3178,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.6376,-80.5546) -- (4.2717,-80.5546) -- (3.6376,-81.3954) -- (4.2717,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (7.5915,-80.5546) -- (8.2256,-80.5546) -- (7.5915,-81.3954) -- (8.2256,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (11.5455,-80.5546) -- (12.1795,-80.5546) -- (11.5455,-81.3954) -- (12.1795,-81.3954) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-80.9763) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.3427,-83.7177) -- (0.3515,-83.7177) -- (-0.3427,-84.5586) -- (0.3515,-84.5586) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-84.1395) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (3.6112,-83.7177) -- (4.3055,-83.7177) -- (3.6112,-84.5586) -- (4.3055,-84.5586) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-84.1395) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (7.5652,-83.7177) -- (8.2594,-83.7177) -- (7.5652,-84.5586) -- (8.2594,-84.5586) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-84.1395) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (11.5191,-83.7177) -- (12.2133,-83.7177) -- (11.5191,-84.5586) -- (12.2133,-84.5586) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-84.1395) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#86;</text><text x="3.3047" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$V_1$}};
\path (-0.3163,-86.8809) -- (0.3178,-86.8809) -- (-0.3163,-87.7217) -- (0.3178,-87.7217) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-87.3026) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (3.6376,-86.8809) -- (4.2717,-86.8809) -- (3.6376,-87.7217) -- (4.2717,-87.7217) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-87.3026) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (7.5915,-86.8809) -- (8.2256,-86.8809) -- (7.5915,-87.7217) -- (8.2256,-87.7217) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-87.3026) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (11.5455,-86.8809) -- (12.1795,-86.8809) -- (11.5455,-87.7217) -- (12.1795,-87.7217) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-87.3026) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#73;</text><text x="2.0234" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$I_1$}};
\path (-0.3427,-90.044) -- (0.3367,-90.044) -- (-0.3427,-90.8848) -- (0.3367,-90.8848) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-90.4658) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (3.6112,-90.044) -- (4.2906,-90.044) -- (3.6112,-90.8848) -- (4.2906,-90.8848) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-90.4658) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (7.5652,-90.044) -- (8.2445,-90.044) -- (7.5652,-90.8848) -- (8.2445,-90.8848) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-90.4658) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (11.5191,-90.044) -- (12.1985,-90.044) -- (11.5191,-90.8848) -- (12.1985,-90.8848) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-90.4658) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#69;</text><text x="2.7422" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$E_1$}};
\path (-0.369,-93.2071) -- (0.3668,-93.2071) -- (-0.369,-94.048) -- (0.3668,-94.048) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-93.6289) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.5849,-93.2071) -- (4.3207,-93.2071) -- (3.5849,-94.048) -- (4.3207,-94.048) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-93.6289) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (7.5388,-93.2071) -- (8.2746,-93.2071) -- (7.5388,-94.048) -- (8.2746,-94.048) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-93.6289) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (11.4927,-93.2071) -- (12.2285,-93.2071) -- (11.4927,-94.048) -- (12.2285,-94.048) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-93.6289) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-96.3703) -- (0.3668,-96.3703) -- (-0.369,-97.2111) -- (0.3668,-97.2111) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-96.792) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.5849,-96.3703) -- (4.3207,-96.3703) -- (3.5849,-97.2111) -- (4.3207,-97.2111) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-96.792) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (7.5388,-96.3703) -- (8.2746,-96.3703) -- (7.5388,-97.2111) -- (8.2746,-97.2111) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-96.792) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (11.4927,-96.3703) -- (12.2285,-96.3703) -- (11.4927,-97.2111) -- (12.2285,-97.2111) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-96.792) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.369,-99.5334) -- (0.3668,-99.5334) -- (-0.369,-100.3742) -- (0.3668,-100.3742) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-99.9552) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (3.5849,-99.5334) -- (4.3207,-99.5334) -- (3.5849,-100.3742) -- (4.3207,-100.3742) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-99.9552) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (7.5388,-99.5334) -- (8.2746,-99.5334) -- (7.5388,-100.3742) -- (8.2746,-100.3742) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-99.9552) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (11.4927,-99.5334) -- (12.2285,-99.5334) -- (11.4927,-100.3742) -- (12.2285,-100.3742) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-99.9552) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#68;</text><text x="3.8828" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$D_1$}};
\path (-0.4086,-102.3802) -- (0.417,-102.3802) -- (-0.4086,-103.2211) -- (0.417,-103.2211) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-102.802) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.5454,-102.3802) -- (4.3709,-102.3802) -- (3.5454,-103.2211) -- (4.3709,-103.2211) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-102.802) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (7.4993,-102.3802) -- (8.3249,-102.3802) -- (7.4993,-103.2211) -- (8.3249,-103.2211) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-102.802) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (11.4532,-102.3802) -- (12.2788,-102.3802) -- (11.4532,-103.2211) -- (12.2788,-103.2211) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-102.802) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-105.5434) -- (0.417,-105.5434) -- (-0.4086,-106.3842) -- (0.417,-106.3842) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-105.9651) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.5454,-105.5434) -- (4.3709,-105.5434) -- (3.5454,-106.3842) -- (4.3709,-106.3842) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-105.9651) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (7.4993,-105.5434) -- (8.3249,-105.5434) -- (7.4993,-106.3842) -- (8.3249,-106.3842) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-105.9651) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (11.4532,-105.5434) -- (12.2788,-105.5434) -- (11.4532,-106.3842) -- (12.2788,-106.3842) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-105.9651) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-108.7065) -- (0.417,-108.7065) -- (-0.4086,-109.5473) -- (0.417,-109.5473) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-109.1283) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.5454,-108.7065) -- (4.3709,-108.7065) -- (3.5454,-109.5473) -- (4.3709,-109.5473) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-109.1283) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (7.4993,-108.7065) -- (8.3249,-108.7065) -- (7.4993,-109.5473) -- (8.3249,-109.5473) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-109.1283) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (11.4532,-108.7065) -- (12.2788,-108.7065) -- (11.4532,-109.5473) -- (12.2788,-109.5473) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-109.1283) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-111.8697) -- (0.417,-111.8697) -- (-0.4086,-112.7105) -- (0.417,-112.7105) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-112.2914) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.5454,-111.8697) -- (4.3709,-111.8697) -- (3.5454,-112.7105) -- (4.3709,-112.7105) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-112.2914) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (7.4993,-111.8697) -- (8.3249,-111.8697) -- (7.4993,-112.7105) -- (8.3249,-112.7105) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-112.2914) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (11.4532,-111.8697) -- (12.2788,-111.8697) -- (11.4532,-112.7105) -- (12.2788,-112.7105) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-112.2914) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-115.0328) -- (0.417,-115.0328) -- (-0.4086,-115.8736) -- (0.417,-115.8736) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-115.4545) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.5454,-115.0328) -- (4.3709,-115.0328) -- (3.5454,-115.8736) -- (4.3709,-115.8736) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-115.4545) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (7.4993,-115.0328) -- (8.3249,-115.0328) -- (7.4993,-115.8736) -- (8.3249,-115.8736) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-115.4545) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (11.4532,-115.0328) -- (12.2788,-115.0328) -- (11.4532,-115.8736) -- (12.2788,-115.8736) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-115.4545) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.4086,-118.1959) -- (0.417,-118.1959) -- (-0.4086,-119.0368) -- (0.417,-119.0368) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-118.6177) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (3.5454,-118.1959) -- (4.3709,-118.1959) -- (3.5454,-119.0368) -- (4.3709,-119.0368) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-118.6177) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (7.4993,-118.1959) -- (8.3249,-118.1959) -- (7.4993,-119.0368) -- (8.3249,-119.0368) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-118.6177) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (11.4532,-118.1959) -- (12.2788,-118.1959) -- (11.4532,-119.0368) -- (12.2788,-119.0368) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-118.6177) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#81;</text><text x="5.7891" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Q_1$}};
\path (-0.3559,-121.6754) -- (0.3635,-121.6754) -- (-0.3559,-122.5162) -- (0.3635,-122.5162) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-122.0971) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.5981,-121.6754) -- (4.3174,-121.6754) -- (3.5981,-122.5162) -- (4.3174,-122.5162) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-122.0971) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (7.552,-121.6754) -- (8.2713,-121.6754) -- (7.552,-122.5162) -- (8.2713,-122.5162) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-122.0971) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (11.5059,-121.6754) -- (12.2252,-121.6754) -- (11.5059,-122.5162) -- (12.2252,-122.5162) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-122.0971) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-124.8385) -- (0.3635,-124.8385) -- (-0.3559,-125.6793) -- (0.3635,-125.6793) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-125.2603) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.5981,-124.8385) -- (4.3174,-124.8385) -- (3.5981,-125.6793) -- (4.3174,-125.6793) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-125.2603) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (7.552,-124.8385) -- (8.2713,-124.8385) -- (7.552,-125.6793) -- (8.2713,-125.6793) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-125.2603) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (11.5059,-124.8385) -- (12.2252,-124.8385) -- (11.5059,-125.6793) -- (12.2252,-125.6793) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-125.2603) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-128.0017) -- (0.3635,-128.0017) -- (-0.3559,-128.8425) -- (0.3635,-128.8425) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-128.4234) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.5981,-128.0017) -- (4.3174,-128.0017) -- (3.5981,-128.8425) -- (4.3174,-128.8425) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-128.4234) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (7.552,-128.0017) -- (8.2713,-128.0017) -- (7.552,-128.8425) -- (8.2713,-128.8425) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-128.4234) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (11.5059,-128.0017) -- (12.2252,-128.0017) -- (11.5059,-128.8425) -- (12.2252,-128.8425) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-128.4234) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-131.1648) -- (0.3635,-131.1648) -- (-0.3559,-132.0056) -- (0.3635,-132.0056) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-131.5866) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.5981,-131.1648) -- (4.3174,-131.1648) -- (3.5981,-132.0056) -- (4.3174,-132.0056) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-131.5866) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (7.552,-131.1648) -- (8.2713,-131.1648) -- (7.552,-132.0056) -- (8.2713,-132.0056) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-131.5866) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (11.5059,-131.1648) -- (12.2252,-131.1648) -- (11.5059,-132.0056) -- (12.2252,-132.0056) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-131.5866) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.3559,-133.748) -- (0.3635,-133.748) -- (-0.3559,-134.5889) -- (0.3635,-134.5889) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-134.1698) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (3.5981,-133.748) -- (4.3174,-133.748) -- (3.5981,-134.5889) -- (4.3174,-134.5889) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-134.1698) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (7.552,-133.748) -- (8.2713,-133.748) -- (7.552,-134.5889) -- (8.2713,-134.5889) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-134.1698) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (11.5059,-133.748) -- (12.2252,-133.748) -- (11.5059,-134.5889) -- (12.2252,-134.5889) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-134.1698) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$S_1$}};
\path (-0.4349,-137.4911) -- (0.4391,-137.4911) -- (-0.4349,-138.3319) -- (0.4391,-138.3319) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-137.9128) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (3.519,-137.4911) -- (4.393,-137.4911) -- (3.519,-138.3319) -- (4.393,-138.3319) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-137.9128) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (7.4729,-137.4911) -- (8.3469,-137.4911) -- (7.4729,-138.3319) -- (8.3469,-138.3319) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-137.9128) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (11.4268,-137.4911) -- (12.3008,-137.4911) -- (11.4268,-138.3319) -- (12.3008,-138.3319) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-137.9128) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-14.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#937;</text><text x="6.625" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Ω_1$}};
\path (-0.3559,-140.6542) -- (0.3554,-140.6542) -- (-0.3559,-141.495) -- (0.3554,-141.495) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-141.076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (3.5981,-140.6542) -- (4.3094,-140.6542) -- (3.5981,-141.495) -- (4.3094,-141.495) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-141.076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (7.552,-140.6542) -- (8.2633,-140.6542) -- (7.552,-141.495) -- (8.2633,-141.495) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-141.076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (11.5059,-140.6542) -- (12.2172,-140.6542) -- (11.5059,-141.495) -- (12.2172,-141.495) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-141.076) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#71;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$G_1$}};
\path (-0.3559,-149.8273) -- (0.3554,-149.8273) -- (-0.3559,-150.6681) -- (0.3554,-150.6681) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-150.2491) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (3.5981,-149.8273) -- (4.3094,-149.8273) -- (3.5981,-150.6681) -- (4.3094,-150.6681) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-150.2491) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (7.552,-149.8273) -- (8.2633,-149.8273) -- (7.552,-150.6681) -- (8.2633,-150.6681) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-150.2491) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (11.5059,-149.8273) -- (12.2172,-149.8273) -- (11.5059,-150.6681) -- (12.2172,-150.6681) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-150.2491) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="3.4531" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$T_1$}};
\path (-0.3163,-152.9905) -- (0.3202,-152.9905) -- (-0.3163,-153.8313) -- (0.3202,-153.8313) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-153.4122) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (3.6376,-152.9905) -- (4.2741,-152.9905) -- (3.6376,-153.8313) -- (4.2741,-153.8313) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-153.4122) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (7.5915,-152.9905) -- (8.2281,-152.9905) -- (7.5915,-153.8313) -- (8.2281,-153.8313) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-153.4122) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (11.5455,-152.9905) -- (12.182,-152.9905) -- (11.5455,-153.8313) -- (12.182,-153.8313) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-153.4122) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="2.1172" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$L_1$}};
\path (-0.369,-156.4699) -- (0.3754,-156.4699) -- (-0.369,-157.3107) -- (0.3754,-157.3107) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-156.8917) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-156.4699) -- (4.3293,-156.4699) -- (3.5849,-157.3107) -- (4.3293,-157.3107) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-156.8917) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-156.4699) -- (8.2833,-156.4699) -- (7.5388,-157.3107) -- (8.2833,-157.3107) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-156.8917) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-156.4699) -- (12.2372,-156.4699) -- (11.4927,-157.3107) -- (12.2372,-157.3107) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-156.8917) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-159.633) -- (0.3754,-159.633) -- (-0.369,-160.4739) -- (0.3754,-160.4739) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-160.0548) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-159.633) -- (4.3293,-159.633) -- (3.5849,-160.4739) -- (4.3293,-160.4739) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-160.0548) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-159.633) -- (8.2833,-159.633) -- (7.5388,-160.4739) -- (8.2833,-160.4739) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-160.0548) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-159.633) -- (12.2372,-159.633) -- (11.4927,-160.4739) -- (12.2372,-160.4739) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-160.0548) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-162.7962) -- (0.3754,-162.7962) -- (-0.369,-163.637) -- (0.3754,-163.637) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-163.2179) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-162.7962) -- (4.3293,-162.7962) -- (3.5849,-163.637) -- (4.3293,-163.637) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-163.2179) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-162.7962) -- (8.2833,-162.7962) -- (7.5388,-163.637) -- (8.2833,-163.637) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-163.2179) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-162.7962) -- (12.2372,-162.7962) -- (11.4927,-163.637) -- (12.2372,-163.637) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-163.2179) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-165.9593) -- (0.3754,-165.9593) -- (-0.369,-166.8001) -- (0.3754,-166.8001) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-166.3811) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-165.9593) -- (4.3293,-165.9593) -- (3.5849,-166.8001) -- (4.3293,-166.8001) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-166.3811) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-165.9593) -- (8.2833,-165.9593) -- (7.5388,-166.8001) -- (8.2833,-166.8001) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-166.3811) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-165.9593) -- (12.2372,-165.9593) -- (11.4927,-166.8001) -- (12.2372,-166.8001) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-166.3811) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-169.1225) -- (0.3754,-169.1225) -- (-0.369,-169.9633) -- (0.3754,-169.9633) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-169.5442) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-169.1225) -- (4.3293,-169.1225) -- (3.5849,-169.9633) -- (4.3293,-169.9633) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-169.5442) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-169.1225) -- (8.2833,-169.1225) -- (7.5388,-169.9633) -- (8.2833,-169.9633) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-169.5442) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-169.1225) -- (12.2372,-169.1225) -- (11.4927,-169.9633) -- (12.2372,-169.9633) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-169.5442) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-172.2856) -- (0.3754,-172.2856) -- (-0.369,-173.1264) -- (0.3754,-173.1264) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-172.7073) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-172.2856) -- (4.3293,-172.2856) -- (3.5849,-173.1264) -- (4.3293,-173.1264) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-172.7073) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-172.2856) -- (8.2833,-172.2856) -- (7.5388,-173.1264) -- (8.2833,-173.1264) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-172.7073) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-172.2856) -- (12.2372,-172.2856) -- (11.4927,-173.1264) -- (12.2372,-173.1264) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-172.7073) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-175.4487) -- (0.3754,-175.4487) -- (-0.369,-176.2896) -- (0.3754,-176.2896) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-175.8705) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-175.4487) -- (4.3293,-175.4487) -- (3.5849,-176.2896) -- (4.3293,-176.2896) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-175.8705) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-175.4487) -- (8.2833,-175.4487) -- (7.5388,-176.2896) -- (8.2833,-176.2896) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-175.8705) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-175.4487) -- (12.2372,-175.4487) -- (11.4927,-176.2896) -- (12.2372,-176.2896) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-175.8705) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-178.6119) -- (0.3754,-178.6119) -- (-0.369,-179.4527) -- (0.3754,-179.4527) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-179.0336) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-178.6119) -- (4.3293,-178.6119) -- (3.5849,-179.4527) -- (4.3293,-179.4527) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-179.0336) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-178.6119) -- (8.2833,-178.6119) -- (7.5388,-179.4527) -- (8.2833,-179.4527) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-179.0336) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-178.6119) -- (12.2372,-178.6119) -- (11.4927,-179.4527) -- (12.2372,-179.4527) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-179.0336) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-181.775) -- (0.3754,-181.775) -- (-0.369,-182.6158) -- (0.3754,-182.6158) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-182.1968) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-181.775) -- (4.3293,-181.775) -- (3.5849,-182.6158) -- (4.3293,-182.6158) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-182.1968) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-181.775) -- (8.2833,-181.775) -- (7.5388,-182.6158) -- (8.2833,-182.6158) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-182.1968) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-181.775) -- (12.2372,-181.775) -- (11.4927,-182.6158) -- (12.2372,-182.6158) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-182.1968) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.369,-184.9381) -- (0.3754,-184.9381) -- (-0.369,-185.779) -- (0.3754,-185.779) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-185.3599) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (3.5849,-184.9381) -- (4.3293,-184.9381) -- (3.5849,-185.779) -- (4.3293,-185.779) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-185.3599) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (7.5388,-184.9381) -- (8.2833,-184.9381) -- (7.5388,-185.779) -- (8.2833,-185.779) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-185.3599) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (11.4927,-184.9381) -- (12.2372,-184.9381) -- (11.4927,-185.779) -- (12.2372,-185.779) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-185.3599) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#85;</text><text x="4.2109" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$U_1$}};
\path (-0.5404,-191.2644) -- (0.5533,-191.2644) -- (-0.5404,-192.1053) -- (0.5533,-192.1053) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-191.6862) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (3.4136,-191.2644) -- (4.5073,-191.2644) -- (3.4136,-192.1053) -- (4.5073,-192.1053) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-191.6862) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (7.3675,-191.2644) -- (8.4612,-191.2644) -- (7.3675,-192.1053) -- (8.4612,-192.1053) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-191.6862) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (11.3214,-191.2644) -- (12.4151,-191.2644) -- (11.3214,-192.1053) -- (12.4151,-192.1053) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-191.6862) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-18.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#84;</text><text x="-0.4922" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#80;</text><text x="10.9609" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$TP_1$}};
\path (-0.3559,-194.4276) -- (0.347,-194.4276) -- (-0.3559,-195.2684) -- (0.347,-195.2684) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-194.8493) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (3.5981,-194.4276) -- (4.3009,-194.4276) -- (3.5981,-195.2684) -- (4.3009,-195.2684) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-194.8493) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (7.552,-194.4276) -- (8.2548,-194.4276) -- (7.552,-195.2684) -- (8.2548,-195.2684) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-194.8493) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (11.5059,-194.4276) -- (12.2088,-194.4276) -- (11.5059,-195.2684) -- (12.2088,-195.2684) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-194.8493) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (-0.3559,-197.5907) -- (0.347,-197.5907) -- (-0.3559,-198.4315) -- (0.347,-198.4315) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-198.0125) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (3.5981,-197.5907) -- (4.3009,-197.5907) -- (3.5981,-198.4315) -- (4.3009,-198.4315) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-198.0125) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (7.552,-197.5907) -- (8.2548,-197.5907) -- (7.552,-198.4315) -- (8.2548,-198.4315) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-198.0125) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (11.5059,-197.5907) -- (12.2088,-197.5907) -- (11.5059,-198.4315) -- (12.2088,-198.4315) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-198.0125) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#74;</text><text x="3.1328" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$J_1$}};
\path (-0.3295,-203.917) -- (0.3398,-203.917) -- (-0.3295,-204.7578) -- (0.3398,-204.7578) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-204.3387) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (3.6244,-203.917) -- (4.2937,-203.917) -- (3.6244,-204.7578) -- (4.2937,-204.7578) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-204.3387) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (7.5784,-203.917) -- (8.2476,-203.917) -- (7.5784,-204.7578) -- (8.2476,-204.7578) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-204.3387) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (11.5323,-203.917) -- (12.2016,-203.917) -- (11.5323,-204.7578) -- (12.2016,-204.7578) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-204.3387) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-10.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#70;</text><text x="2.8594" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$F_1$}};
\path (-0.3822,-207.0801) -- (0.3804,-207.0801) -- (-0.3822,-207.9209) -- (0.3804,-207.9209) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-207.5019) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (3.5717,-207.0801) -- (4.3343,-207.0801) -- (3.5717,-207.9209) -- (4.3343,-207.9209) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-207.5019) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (7.5256,-207.0801) -- (8.2882,-207.0801) -- (7.5256,-207.9209) -- (8.2882,-207.9209) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-207.5019) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (11.4796,-207.0801) -- (12.2421,-207.0801) -- (11.4796,-207.9209) -- (12.2421,-207.9209) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-207.5019) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-12.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#72;</text><text x="4.3984" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$H_1$}};
\path (-0.4086,-210.2433) -- (0.4205,-210.2433) -- (-0.4086,-211.0841) -- (0.4205,-211.0841) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-210.665) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (3.5454,-210.2433) -- (4.3744,-210.2433) -- (3.5454,-211.0841) -- (4.3744,-211.0841) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-210.665) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (7.4993,-210.2433) -- (8.3284,-210.2433) -- (7.4993,-211.0841) -- (8.3284,-211.0841) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-210.665) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (11.4532,-210.2433) -- (12.2823,-210.2433) -- (11.4532,-211.0841) -- (12.2823,-211.0841) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-210.665) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-13.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#77;</text><text x="5.9219" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$M_1$}};
\path (-0.514,-213.4064) -- (0.5247,-213.4064) -- (-0.514,-214.2472) -- (0.5247,-214.2472) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-213.8281) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (3.4399,-213.4064) -- (4.4786,-213.4064) -- (3.4399,-214.2472) -- (4.4786,-214.2472) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-213.8281) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (7.3938,-213.4064) -- (8.4326,-213.4064) -- (7.3938,-214.2472) -- (8.4326,-214.2472) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-213.8281) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (11.3478,-213.4064) -- (12.3865,-213.4064) -- (11.3478,-214.2472) -- (12.3865,-214.2472) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-213.8281) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-17.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#76;</text><text x="-5.3828" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#83;</text><text x="9.875" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$LS_1$}};
\path (-0.5535,-216.5695) -- (0.5606,-216.5695) -- (-0.5535,-217.4104) -- (0.5606,-217.4104) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-216.9913) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (3.4004,-216.5695) -- (4.5145,-216.5695) -- (3.4004,-217.4104) -- (4.5145,-217.4104) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-216.9913) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (7.3543,-216.5695) -- (8.4684,-216.5695) -- (7.3543,-217.4104) -- (8.4684,-217.4104) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-216.9913) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (11.3082,-216.5695) -- (12.4223,-216.5695) -- (11.3082,-217.4104) -- (12.4223,-217.4104) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-216.9913) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-19" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#66;</text><text x="-4.0234" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="11.2344" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$BZ_1$}};
\path (-0.3559,-219.7327) -- (0.3635,-219.7327) -- (-0.3559,-220.5735) -- (0.3635,-220.5735) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-220.1544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (3.5981,-219.7327) -- (4.3174,-219.7327) -- (3.5981,-220.5735) -- (4.3174,-220.5735) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-220.1544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (7.552,-219.7327) -- (8.2713,-219.7327) -- (7.552,-220.5735) -- (8.2713,-220.5735) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-220.1544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (11.5059,-219.7327) -- (12.2252,-219.7327) -- (11.5059,-220.5735) -- (12.2252,-220.5735) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-220.1544) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11.5" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#90;</text><text x="3.7578" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$Z_1$}};
\path (-0.3427,-222.8958) -- (0.339,-222.8958) -- (-0.3427,-223.7366) -- (0.339,-223.7366) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (0,-223.3176) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (3.6112,-222.8958) -- (4.2929,-222.8958) -- (3.6112,-223.7366) -- (4.2929,-223.7366) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (3.9539,-223.3176) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (7.5652,-222.8958) -- (8.2468,-222.8958) -- (7.5652,-223.7366) -- (8.2468,-223.7366) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (7.9078,-223.3176) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\path (11.5191,-222.8958) -- (12.2007,-222.8958) -- (11.5191,-223.7366) -- (12.2007,-223.7366) -- cycle;
\node[text=dcColor1, font=\fontsize{16.5}{21.45}\selectfont\sffamily, anchor=\dcCenterAnchor, minimum size=0pt, inner sep=0pt, outer sep=0pt, rotate=0] at (11.8618,-223.3176) {\dcCanvasText{<g transform="translate({?x},{?y}) scale(0.75)" fill="\string#2463CB" stroke="none"><g transform="translate(0,0)"><text x="-11" y="8" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="22" font-style="normal" font-weight="400">&\string#82;</text><text x="2.8281" y="11.3047" font-family="&\string#34;Comic Sans MS&\string#34;, &\string#34;Comic Sans&\string#34;, cursive" font-size="15.4" font-style="normal" font-weight="400">&\string#49;</text></g></g>}{$R_1$}};
\end{circuitikz}

\end{document}
```