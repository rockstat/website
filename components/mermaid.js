import React, { useEffect, useId, useState } from 'react';

/**
 * Renders a Mermaid diagram on the client. `mermaid` is imported lazily so it
 * never runs during SSR / static export.
 *
 *   <Mermaid>{`graph TD; A-->B;`}</Mermaid>
 */
export function Mermaid({ children, content, theme = 'forest' }) {
  const reactId = useId();
  const [svg, setSvg] = useState(null);
  const source = typeof content === 'string' ? content : String(children || '');

  useEffect(() => {
    let cancelled = false;
    import('mermaid').then(async ({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme });
      try {
        const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
        const result = await mermaid.render(id, source);
        if (!cancelled) setSvg(result.svg);
      } catch (err) {
        if (!cancelled) setSvg(`<pre>${String(err && err.message ? err.message : err)}</pre>`);
      }
    });
    return () => { cancelled = true; };
  }, [source, theme, reactId]);

  if (!svg) {
    return <div className="mermaid">Loading diagram...</div>;
  }

  return <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }} />;
}
