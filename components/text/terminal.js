import React, { createContext, useContext } from 'react';
import { GenericLink } from './link';

const DarkBgContext = createContext(false);

export const TerminalInput = ({ children }) => {
  const darkBg = useContext(DarkBgContext);
  return (
    <div className={darkBg ? 'dark' : ''}>
      {Array.isArray(children) ? (
        <span>{children}</span>
      ) : (
        String(children)
          .split(/\r?\n/)
          .map((item, index) => <span key={index}>{item}</span>)
      )}

      <style jsx>
        {`
          div {
            border: 1px solid #eaeaea;
            color: #bd10e0;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
            font-size: 13px;
            line-height: 20px;
            margin: 40px 0;
            padding: 20px;
            -webkit-overflow-scrolling: touch;
            white-space: pre;
            overflow: auto;
          }

          div span {
            display: block;
          }

          div span::before {
            content: '$ ';
          }

          div.dark {
            border-color: #333;
            color: #5ce6cd;
          }
        `}
      </style>
    </div>
  );
};

export const TerminalOutput = ({ children }) => (
  <DarkBgContext.Provider value={true}>
    <div className="output">
      {children}
      <style jsx>
        {`
          .output {
            background: #000;
            color: #fff;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
              monospace, serif;
            font-size: 13px;
            line-height: 20px;
            margin: 40px 0;
            padding: 20px;
          }

          .output :global(pre) {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            white-space: pre-wrap;
          }
        `}
      </style>
    </div>
  </DarkBgContext.Provider>
);

export const TerminalLink = props => (
  <span>
    <GenericLink {...props} />
    <style jsx>
      {`
        span :global(a) {
          text-decoration: underline;
        }
      `}
    </style>
  </span>
);
