```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit WYSIWYG — 1 editor unit = 0.75 TeX pt; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (1.0544,-2.1088) -- (1.5816,-2.1088) (2.6359,-2.1088) -- (3.1631,-2.1088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (2.1088,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (1.7924,-2.1088) -- (2.4251,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (2.2933,-2.0297) -- (2.4251,-2.1088) -- (2.2933,-2.1878);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-1.0544) -- (6.3263,-1.5816) (6.3263,-2.6359) -- (6.3263,-3.1631);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (6.3263,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (6.3263,-1.7924) -- (6.3263,-2.4251);
\draw[draw=dcColor0, line width=1.5pt] (6.4054,-2.2933) -- (6.3263,-2.4251) -- (6.2472,-2.2933);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (11.5982,-2.1088) -- (11.071,-2.1088) (10.0166,-2.1088) -- (9.4894,-2.1088);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (10.5438,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (10.8601,-2.1088) -- (10.2275,-2.1088);
\draw[draw=dcColor0, line width=1.5pt] (10.3593,-2.1878) -- (10.2275,-2.1088) -- (10.3593,-2.0297);
% Component: currentSource
% Generatore di corrente DC
\draw[draw=dcColor0, line width=1.5pt] (14.7613,-3.1631) -- (14.7613,-2.6359) (14.7613,-1.5816) -- (14.7613,-1.0544);
\draw[draw=dcColor0, line width=1.5pt, fill=white] (14.7613,-2.1088) circle (15pt);
\draw[draw=dcColor0, line width=1.5pt] (14.7613,-2.4251) -- (14.7613,-1.7924);
\draw[draw=dcColor0, line width=1.5pt] (14.6822,-1.9242) -- (14.7613,-1.7924) -- (14.8404,-1.9242);
\end{circuitikz}

\end{document}
```