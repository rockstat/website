export const H1 = ({ children }) => (
  <h1>
    {children}
  </h1>
)

const B = ({ children }) => (
  <span>
    {children}
  </span>
)

H1.B = B

export const H2 = ({ children }) => (
  <h2>
    {children}
  </h2>
)

export const H3 = ({ children }) => (
  <h3>
    {children}
  </h3>
)

export const H4 = ({ children, isCommand }) => (
  <h4 className={isCommand ? 'command' : ''}>
    {children}
  </h4>
)

export const H5 = ({ children }) => (
  <h5>
    {children}
  </h5>
)
