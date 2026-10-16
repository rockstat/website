import React, { createContext, useContext } from 'react';

const HeaderContext = createContext(false);

export const Table = ({ children }) => (
  <table>
    {children}
  </table>
);

export const Row = ({ header = false, children }) => (
  <HeaderContext.Provider value={header}>
    <tr>
      {children}
    </tr>
  </HeaderContext.Provider>
);

export const Column = ({ children }) => {
  const header = useContext(HeaderContext);
  return React.createElement(header ? 'th' : 'td', {}, children);
};

const alwaysTrue = () => true;

/**
 * Renders rows produced by the CSV loader (`rows` array with `rows.columns`).
 */
export const RenderTable = ({ data = [], colFilter = alwaysTrue, rowFilter = alwaysTrue }) => {
  const cols = (data.columns || Object.keys(data[0] || {})).filter(colFilter);
  return (
    <Table>
      <thead>
        <Row header={true}>
          {cols.map(col => (
            <Column key={col}>{col}</Column>
          ))}
        </Row>
      </thead>
      <tbody>
        {data.filter(rowFilter).map((row, r) => (
          <Row key={r}>
            {cols.map(col => (
              <Column key={r + col}>{row[col]}</Column>
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  );
};
