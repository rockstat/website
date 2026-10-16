import React, { createContext, useContext } from 'react';

const HeaderContext = createContext(false);

type Children = { children?: React.ReactNode };
export type TableRow = Record<string, string>;
export type TableRows = TableRow[] & { columns?: string[] };

export const Table = ({ children }: Children) => (
  <table>
    {children}
  </table>
);

export const Row = ({ header = false, children }: Children & { header?: boolean }) => (
  <HeaderContext.Provider value={header}>
    <tr>
      {children}
    </tr>
  </HeaderContext.Provider>
);

export const Column = ({ children }: Children) => {
  const header = useContext(HeaderContext);
  return React.createElement(header ? 'th' : 'td', {}, children);
};

const alwaysTrue = () => true;

/**
 * Renders rows produced by the CSV loader (`rows` array with `rows.columns`).
 */
export interface RenderTableProps {
  data?: TableRows;
  colFilter?: (col: string) => boolean;
  rowFilter?: (row: TableRow) => boolean;
}

export const RenderTable = ({ data = [] as TableRows, colFilter = alwaysTrue, rowFilter = alwaysTrue }: RenderTableProps) => {
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
