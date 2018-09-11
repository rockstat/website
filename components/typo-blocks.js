export const Expand = ({ children }) => {
  return (
    <div className={"md-expand"}>
      {children}
    </div>
  )
}

export const Tip = ({ children }) => {
  return (
    <div className={"custom-block tip-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}


export const Alert = ({ children }) => {
  return (
    <div className={"custom-block alert-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}

export const Success = ({ children }) => {
  return (
    <div className={"custom-block success-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}


export const Info = ({ children }) => {
  return (
    <div className={"custom-block info-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}

