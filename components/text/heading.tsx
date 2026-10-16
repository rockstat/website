import React from 'react';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & { children?: React.ReactNode };

// Heading components keep the `id` injected by rehype-slug and the anchor
// appended by rehype-autolink-headings (passed through as children).
export const H1 = ({ children, ...props }: HeadingProps) => <h1 {...props}>{children}</h1>;
export const H2 = ({ children, ...props }: HeadingProps) => <h2 {...props}>{children}</h2>;
export const H3 = ({ children, ...props }: HeadingProps) => <h3 {...props}>{children}</h3>;
export const H5 = ({ children, ...props }: HeadingProps) => <h5 {...props}>{children}</h5>;

export const H4 = ({ children, isCommand, className, ...props }: HeadingProps & { isCommand?: boolean }) => (
  <h4 className={[isCommand ? 'command' : '', className].filter(Boolean).join(' ') || undefined} {...props}>
    {children}
  </h4>
);
