/**
 * Tiny webpack/Turbopack loader that turns a delimiter-separated file into
 * an ES module: `export default rows` where `rows.columns` lists the headers
 * (same shape d3-dsv produces). Replaces the unmaintained `dsv-loader`.
 */
module.exports = function dsvLoader(source) {
  const callback = this.async();
  const { delimiter = ',' } = this.getOptions ? this.getOptions() : {};

  import('d3-dsv')
    .then(({ dsvFormat }) => {
      const rows = dsvFormat(delimiter).parse(String(source));
      const code = [
        `const rows = ${JSON.stringify(rows)};`,
        `rows.columns = ${JSON.stringify(rows.columns)};`,
        'export default rows;',
        'export const columns = rows.columns;'
      ].join('\n');
      callback(null, code);
    })
    .catch(callback);
};
