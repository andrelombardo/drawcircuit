```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\draw[draw=dcColor0, line width=1.5pt] (0,-1.5816) -- (6.8535,-1.5816);
\draw[draw=dcColor0, line width=1.5pt] (3.1631,0) -- (3.1631,-3.1631);
% Unconnected wire crossing: horizontal bridge
\draw[draw=white,line width=4.5pt] (2.9786,-1.5816) -- (3.3477,-1.5816);
\draw[draw=dcColor0,line width=1.5pt] (3.1631,-1.3971) -- (3.1631,-1.7661);
\draw[draw=white,line width=4.5pt] (2.9786,-1.5816) .. controls (3.0524,-1.3971) and (3.2738,-1.3971) .. (3.3477,-1.5816);
\draw[draw=dcColor0,line width=1.5pt] (2.9786,-1.5816) .. controls (3.0524,-1.3971) and (3.2738,-1.3971) .. (3.3477,-1.5816);
\end{circuitikz}

\end{document}
```