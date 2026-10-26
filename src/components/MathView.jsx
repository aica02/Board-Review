import { Fragment, useMemo } from "react";
import katex from "katex";

const mathPattern = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^$\n]+?\$|\\\([\s\S]+?\\\))/g;

function renderMath(math, displayMode) {
  try {
    return katex.renderToString(math, {
      displayMode,
      throwOnError: false,
    });
  } catch {
    return null;
  }
}

export default function MathView({ math, inline = true, className = "", parseText = false }) {
  const html = useMemo(() => {
    if (parseText) return null;
    return renderMath(math ?? "", !inline);
  }, [math, inline, parseText]);

  if (parseText) {
    const segments = String(math ?? "").split(mathPattern);
    return (
      <span className={`math-view ${className}`}>
        {segments.map((segment, index) => {
          const isMath = segment.startsWith("$") || segment.startsWith("\\(") || segment.startsWith("\\[");
          if (!isMath) return <Fragment key={index}>{segment}</Fragment>;

          const isDisplay = segment.startsWith("$$") || segment.startsWith("\\[");
          const latex = isDisplay || segment.startsWith("$")
            ? segment.slice(isDisplay ? 2 : 1, isDisplay ? -2 : -1)
            : segment.slice(2, -2);
          const rendered = renderMath(latex, isDisplay);

          return rendered ? (
            <span
              key={index}
              className={isDisplay ? "math-view-display" : undefined}
              dangerouslySetInnerHTML={{ __html: rendered }}
            />
          ) : (
            <Fragment key={index}>{segment}</Fragment>
          );
        })}
      </span>
    );
  }

  if (html === null) {
    return <span className={`math-view ${className}`}>{math}</span>;
  }

  return (
    <span
      className={`math-view ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}