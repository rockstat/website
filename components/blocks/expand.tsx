import React from 'react';

export const Expand = ({ children }: { children?: React.ReactNode }) => {
    return (
      <div className={"expand"}>
        {children}
      </div>
    )
  }
  