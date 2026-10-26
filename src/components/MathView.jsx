import { useMemo } from "react";
import katex from "katex";

export default function MathView({ math, inline = true, className = "" }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math ?? "", {
        displayMode: !inline,
        throwOnError: false,
      });
    } catch {
      return math ?? "";
    }
  }, [math, inline]);

  return (
    <span
      className={`math-view ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}