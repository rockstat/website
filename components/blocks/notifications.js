
export const Tip = ({ children }) => {
  return (
    <div className={"custom-block tip-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}


const B = ({ children }) => (
  <strong>
    {children}
  </strong>
)


export const Alert = ({ children }) => {
  return (
    <div className={"custom-block alert-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}

Alert.B = B

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

