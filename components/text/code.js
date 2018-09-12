import PropTypes from 'prop-types'
import Highlight from 'react-highlight'
import cls from 'classnames';
// import style from 'highlight.js/styles/vs.css'


export const Code = ({ children, className }, { darkBg } = {}) =>
  <Highlight className={cls(className || 'language-shell')}>{children}</Highlight>


Code.contextTypes = {
  darkBg: PropTypes.bool
}


/* */

export const InlineCode = ({ children, noWrap }) => (
  <code className={noWrap && 'no-wrap'}>
    {children}
    <style jsx>
      {`

        code {
          color: #bd10e0;
          white-space: pre-wrap;
        }

        code.no-wrap {
          white-space: nowrap;
        }
      `}
    </style>
  </code>
)
