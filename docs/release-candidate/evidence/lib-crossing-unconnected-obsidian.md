```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\draw[draw=dcColor0, line width=1.5pt] (-4.2175,0) -- (4.2175,0);
\draw[draw=dcColor0, line width=1.5pt] (0,3.1631) -- (0,-3.1631);
% Unconnected wire crossing: horizontal bridge
\draw[draw=white,line width=4.5pt] (-0.1845,0) -- (0.1845,0);
\draw[draw=dcColor0,line width=1.5pt] (0,0.1845) -- (0,-0.1845);
\draw[draw=white,line width=4.5pt] (-0.1845,0) .. controls (-0.1107,0.1845) and (0.1107,0.1845) .. (0.1845,0);
\draw[draw=dcColor0,line width=1.5pt] (-0.1845,0) .. controls (-0.1107,0.1845) and (0.1107,0.1845) .. (0.1845,0);
\end{circuitikz}

\end{document}
```