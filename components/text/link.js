// Packages
import { Link } from 'app/next-routes';

/**
 * 
 * @param {String} str 
 * @param {String} val 
 */
const startsWith = (str, val) => {
  return str.substr(0, val.length) === val;
}

export const GenericLink = (props) => {
  if (startsWith(props.href, '/docs')) {
    return <InternalLink {...props} />
  }

  if (props.href.indexOf('@') >= 0 || startsWith(props.href, '#')) {
    return <AnchorLink {...props} />
  }

  return <ExternalLink {...props} />
}

//prefetch
export const InternalLink = ({href, children, ...props}) => {
  return (<Link href={href}>
    <a {...props}>
      {children}
    </a>
  </Link>
)}

export const AnchorLink = ({children, ...props}) => (
  <a {...props}>
    {children}
  </a>
)

export const ExternalLink = ({ href, children, ...props }) => (
  <a
    target="_blank"
    href={href}
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
)
