import React from 'react';

type Children = { children?: React.ReactNode };

export const UL = ({ children }: Children) => (
  <div>
    <ul>{children}</ul>
  </div>
);

export const OL = ({ children }: Children) => (
  <div>
    <ol>{children}</ol>
  </div>
);

export const LI = ({ children }: Children) => <li>{children}</li>;
