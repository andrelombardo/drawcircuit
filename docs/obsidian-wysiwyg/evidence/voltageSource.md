```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (1.0544,-2.1088) -- (1.5816,-2.1088) (2.6359,-2.1088) -- (3.1631,-2.1088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (2.1088,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (1.8188,-1.977) -- (1.8188,-2.2406) (1.687,-2.1088) -- (1.9506,-2.1088) (2.2933,-2.1088) -- (2.5042,-2.1088);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-1.0544) -- (6.3263,-1.5816) (6.3263,-2.6359) -- (6.3263,-3.1631);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (6.3263,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (6.4581,-1.8188) -- (6.1945,-1.8188) (6.3263,-1.687) -- (6.3263,-1.9506) (6.3263,-2.2933) -- (6.3263,-2.5042);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-2.1088) -- (11.071,-2.1088) (10.0166,-2.1088) -- (9.4894,-2.1088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (10.5438,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (10.8337,-2.2406) -- (10.8337,-1.977) (10.9655,-2.1088) -- (10.702,-2.1088) (10.3593,-2.1088) -- (10.1484,-2.1088);
% Component: voltageSource
% Generatore di tensione DC
\draw[draw=dcColor0, line width=1.5pt] (14.7613,-3.1631) -- (14.7613,-2.6359) (14.7613,-1.5816) -- (14.7613,-1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (14.7613,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (14.6295,-2.3987) -- (14.8931,-2.3987) (14.7613,-2.5305) -- (14.7613,-2.2669) (14.7613,-1.9242) -- (14.7613,-1.7134);
\end{circuitikz}

\end{document}
```