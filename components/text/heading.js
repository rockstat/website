// Heading components keep the `id` injected by rehype-slug and the anchor
// appended by rehype-autolink-headings (passed through as children).
export const H1 = ({ children, ...props }) => (
  <h1 {...props}>
    {children}
  </h1>
);

const B = ({ children }) => (
  <span>
    {children}
  </span>
);

H1.B = B;

export const H2 = ({ children, ...props }) => (
  <h2 {...props}>
    {children}
  </h2>
);

export const H3 = ({ children, ...props }) => (
  <h3 {...props}>
    {children}
  </h3>
);

export const H4 = ({ children, isCommand, className, ...props }) => (
  <h4 className={[isCommand ? 'command' : '', className].filter(Boolean).join(' ') || undefined} {...props}>
    {children}
  </h4>
);

export const H5 = ({ children, ...props }) => (
  <h5 {...props}>
    {children}
  </h5>
);
