```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{DF4949}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\draw[draw=dcColor0, line width=1.5pt] (3.6676,-1.3342) arc[start angle=369, end angle=45, x radius=1.8452cm, y radius=1.5816cm];
\draw[draw=dcColor0, line width=1.5pt] (2.9297,-0.396) -- (3.1499,-0.4632) -- (3.0498,-0.2559);
\end{circuitikz}

\end{document}
```