import MsgBase from 'app/data/tables/message-struct.js';
// const MsgBase = require('../data/tables/message-struct.js')


class TableContent extends Array {
  constructor(columns, data) {
    super();
    this.columns = columns;
    this.push(...data)
  }
}

const KEY = 'Property';
const JS = 'JavaScript type';
const CH = 'ClickHouse';
const DESCR = 'Description';
const flat = (data) => Object.entries(MsgBase).map(([k, v]) => ({ [KEY]: k, [JS]: v[1].js, [CH]: v[1].ch, [DESCR]: v[0] }));

export const messageBase = new TableContent(
  [KEY, JS, CH, DESCR], flat(MsgBase)
);

export const JSProps = new TableContent(
  [KEY, JS, DESCR], flat(MsgBase).filter(item => item[JS])
);

