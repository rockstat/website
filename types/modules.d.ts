// Module declarations for the custom loaders in next.config.js

/** CSV parsed by lib/loaders/dsv-loader.js (d3-dsv shape: rows + `columns`). */
declare module '*.csv' {
  export type CsvRow = Record<string, string>;
  export type CsvRows = CsvRow[] & { columns: string[] };
  const rows: CsvRows;
  export const columns: string[];
  export default rows;
}

/** data/docs.yml enriched by lib/loaders/docs-menu-loader.js. */
declare module '*.yml' {
  import type { MenuItem } from '@app/lib/menu';
  const menu: MenuItem[];
  export default menu;
}
