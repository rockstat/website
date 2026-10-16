import React from 'react';

export const ShowIf = ({ condition, children }: { condition: unknown; children?: React.ReactNode }) =>
  condition ? <>{children}</> : null;

/** Renders the first child when `condition` is truthy, otherwise the second. */
export const ShowIfElse = ({ condition, children }: { condition: unknown; children: [React.ReactNode, React.ReactNode] }) =>
  <>{condition ? children[0] : children[1]}</>;
