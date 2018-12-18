// Packages
import NativeLink from 'next/link';
import PropTypes from 'prop-types';
import { Link } from 'app/next-routes';

/**
 * 
 * @param {String} str 
 * @param {String} val 
 */
const startsWith = (str, val) => {
  return str.substr(0, val.length) === val;
}


export const GenericLink = props => {
  if (startsWith(props.href, '/docs')) {
    return <InternalLink {...props} />
  }

  if (props.href.indexOf('@') >= 0 || startsWith(props.href, '#')) {
    return <AnchorLink {...props} />
  }

  return <ExternalLink {...props} />
}
//prefetch
export const InternalLink = ({ href, children, darkBg, ...rest }) => (
  <Link href={href}>
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
