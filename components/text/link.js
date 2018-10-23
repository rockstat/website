// Packages
import NativeLink from 'next/link';
import PropTypes from 'prop-types';
import { Link } from 'app/next-routes';

export const GenericLink = props => {
  if (props.href.startsWith('/docs') || props.href.startsWith('/api')) {
    return <InternalLink {...props} />
  }

  if (props.href.includes('@') || props.href.startsWith('#')) {
    return <AnchorLink {...props} />
  }

  return <ExternalLink {...props} />
}
//prefetch
export const InternalLink = ({ href, children, darkBg, ...rest }) => (
  <Link route={href}>
    <a className={darkBg ? 'dark' : ''}>
      {children}
    </a>
  </Link>
)

InternalLink.contextTypes = {
  darkBg: PropTypes.bool
}

export const AnchorLink = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick}>
    {children}
  </a>
)

export const ExternalLink = ({ href, children }, { darkBg } = {}) => (
  <a
    className={darkBg ? 'dark' : ''}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

ExternalLink.contextTypes = {
  darkBg: PropTypes.bool
}
