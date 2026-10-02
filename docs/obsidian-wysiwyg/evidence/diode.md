```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (1.7397,-1.7397) -- (2.4251,-2.1088) -- (1.7397,-2.4778) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (1.0544,-2.1088) -- (1.7397,-2.1088) (2.4251,-2.1088) -- (3.1631,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (2.4251,-1.7397) -- (2.4251,-2.4778);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (6.6953,-1.7397) -- (6.3263,-2.4251) -- (5.9572,-1.7397) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-1.0544) -- (6.3263,-1.7397) (6.3263,-2.4251) -- (6.3263,-3.1631);
\draw[draw=dcColor0, line width=1.5pt] (6.6953,-2.4251) -- (5.9572,-2.4251);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (10.9128,-2.4778) -- (10.2275,-2.1088) -- (10.9128,-1.7397) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-2.1088) -- (10.9128,-2.1088) (10.2275,-2.1088) -- (9.4894,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (10.2275,-2.4778) -- (10.2275,-1.7397);
% Component: diode
% Diodo
\draw[draw=dcColor0, line width=1.5pt, fill=white] (14.3923,-2.4778) -- (14.7613,-1.7924) -- (15.1303,-2.4778) -- cycle;
\draw[draw=dcColor0, line width=1.5pt] (14.7613,-3.1631) -- (14.7613,-2.4778) (14.7613,-1.7924) -- (14.7613,-1.0544);
\draw[draw=dcColor0, line width=1.5pt] (14.3923,-1.7924) -- (15.1303,-1.7924);
\end{circuitikz}

\end{document}
```