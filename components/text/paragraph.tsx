import React from 'react';

type Children = { children?: React.ReactNode };

const B = ({ children }: Children) => <strong>{children}</strong>;

export const P = Object.assign(
  ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement> & Children) => <p {...props}>{children}</p>,
  { B }
);

export const PDIV = ({ children }: Children) => <div>{children}</div>;

export const HR = () => (
  <div>
    <style jsx>{`
      div {
        border: 0;
        border-bottom: 1px solid #ccc;
        margin: 50px 30px;
      }
    `}</style>
  </div>
);

export const Quote = ({ children, darkBg = false }: Children & { darkBg?: boolean }) => (
  <blockquote className={darkBg ? 'dark' : ''}>{children}</blockquote>
);
