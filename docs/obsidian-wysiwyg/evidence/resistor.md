```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (1.0544,-2.1088) -- (1.5816,-2.1088) (2.6359,-2.1088) -- (3.1631,-2.1088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (1.5816,-1.8715) -- (2.6359,-1.8715) -- (2.6359,-2.346) -- (1.5816,-2.346) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-1.0544) -- (6.3263,-1.5816) (6.3263,-2.6359) -- (6.3263,-3.1631);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (6.5635,-1.5816) -- (6.5635,-2.6359) -- (6.089,-2.6359) -- (6.089,-1.5816) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-2.1088) -- (11.071,-2.1088) (10.0166,-2.1088) -- (9.4894,-2.1088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (11.071,-2.346) -- (10.0166,-2.346) -- (10.0166,-1.8715) -- (11.071,-1.8715) -- cycle;
% Component: resistor
% Resistenza
\draw[draw=dcColor0, line width=1.5pt] (14.7613,-3.1631) -- (14.7613,-2.6359) (14.7613,-1.5816) -- (14.7613,-1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (14.5241,-2.6359) -- (14.5241,-1.5816) -- (14.9985,-1.5816) -- (14.9985,-2.6359) -- cycle;
\end{circuitikz}

\end{document}
```