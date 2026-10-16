import Link from 'next/link';

const startsWith = (str, val) => typeof str === 'string' && str.substr(0, val.length) === val;

export const GenericLink = (props) => {
  const href = props.href || '';

  if (startsWith(href, '/docs') || startsWith(href, '/blog') || startsWith(href, '/ru')) {
    return <InternalLink {...props} href={href} />;
  }

  if (href.indexOf('@') >= 0 || startsWith(href, '#')) {
    return <AnchorLink {...props} href={href} />;
  }

  return <ExternalLink {...props} href={href} />;
};

export const InternalLink = ({ href, children, ...props }) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

export const AnchorLink = ({ children, ...props }) => (
  <a {...props}>
    {children}
  </a>
);

export const ExternalLink = ({ href, children, ...props }) => (
  <a
    target="_blank"
    href={href}
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);
