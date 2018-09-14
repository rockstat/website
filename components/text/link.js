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

    <style jsx>
      {`
        a {
          text-decoration: none;
          color: #067df7;
          font-size: inherit;
        }

        a:hover {
          text-decoration: underline;
        }
      `}
    </style>
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

    <style jsx>
      {`
        a {
          text-decoration: none;
          color: #067df7;
          font-size: inherit;
        }

        a:hover {
          text-decoration: underline;
        }

        a.dark {
          color: #fff;
        }
      `}
    </style>
  </a>
)

ExternalLink.contextTypes = {
  darkBg: PropTypes.bool
}
