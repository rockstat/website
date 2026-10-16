import React from 'react';

export const Tip = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={"custom-block tip-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}


const B = ({ children }: { children?: React.ReactNode }) => (
  <strong>
    {children}
  </strong>
)


export const Alert = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={"custom-block alert-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}

Alert.B = B

export const Success = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={"custom-block success-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}


export const Info = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={"custom-block info-block"}>
      <div className={"custom-block-body"}>
        {children}
      </div>
    </div>
  )
}

