import React from 'react';
import Link from 'next/link';

export type GenericLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string; children?: React.ReactNode };

const startsWith = (str: string, val: string) => str.substr(0, val.length) === val;

/** Picks client-side navigation for internal docs links, plain anchors for hashes/mailto, new tab for external URLs. */
export const GenericLink = (props: GenericLinkProps) => {
  const href = props.href || '';

  if (startsWith(href, '/docs') || startsWith(href, '/ru')) {
    return <InternalLink {...props} href={href} />;
  }

  if (href.indexOf('@') >= 0 || startsWith(href, '#')) {
    return <AnchorLink {...props} href={href} />;
  }

  return <ExternalLink {...props} href={href} />;
};

export const InternalLink = ({ href = '', children, ...props }: GenericLinkProps) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

export const AnchorLink = ({ children, ...props }: GenericLinkProps) => <a {...props}>{children}</a>;

export const ExternalLink = ({ href, children, ...props }: GenericLinkProps) => (
  <a target="_blank" href={href} rel="noopener noreferrer" {...props}>
    {children}
  </a>
);
