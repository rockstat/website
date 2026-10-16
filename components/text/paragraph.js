export const P = ({ children, ...props }) => (
  <p {...props}>
    {children}
  </p>
);

export const PDIV = ({ children }) => (
  <div>
    {children}
  </div>
);

const B = ({ children }) => (
  <strong>
    {children}
  </strong>
);

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

export const Quote = ({ children, darkBg = false }) => (
  <blockquote className={darkBg ? 'dark' : ''}>
    {children}
  </blockquote>
);

P.B = B;
