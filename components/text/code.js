import React, { createContext, useContext } from 'react';

const PreContext = createContext(false);

const MONO = 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif';

/**
 * Fenced code blocks. Syntax highlighting is applied at build time by
 * `@mapbox/rehype-prism`, so the children already contain `.token` spans.
 */
export const Pre = ({ children, className, ...props }) => (
  <PreContext.Provider value={true}>
    <pre className={['dark', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </pre>
  </PreContext.Provider>
);

/**
 * MDX 3 maps both inline and block code to `code`; block code is detected
 * either by the surrounding `<pre>` or by a `language-*` class.
 */
export const Code = ({ children, className, ...props }) => {
  const inPre = useContext(PreContext);
  const isBlock = inPre || /(^|\s)language-/.test(className || '');

  if (isBlock) {
    // block styling lives in styles/index.css (.markdown-body pre > code) and the prism theme
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return <InlineCode {...props}>{children}</InlineCode>;
};

export const InlineCode = ({ children, noWrap, color, className, ...props }) => (
  <code className={[noWrap ? 'no-wrap' : '', className].filter(Boolean).join(' ') || undefined} {...props}>
    {children}
    <style jsx>
      {`
        code {
          color: ${color ? color : '#bd10e0'};
          font-family: ${MONO};
          font-size: 0.857rem;
          white-space: pre-wrap;
        }
        code.no-wrap {
          white-space: nowrap;
        }
        code::before {
          content: '\`';
        }
        code::after {
          content: '\`';
        }
      `}
    </style>
  </code>
);

export const RequestHeader = ({ children, ...props }) => (
  <InlineCode noWrap color="#0076FF" {...props}>
    {children}
  </InlineCode>
);
