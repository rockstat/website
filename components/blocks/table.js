import PropTypes from 'prop-types'
// Packages
import React from 'react'

export const Table = ({ children }) => (
  <table>
    {children}
  </table>
)

export class Row extends React.Component {
  getChildContext() {
    return {
      header: this.props.header || false
    }
  }

  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    )
  }
}

Row.childContextTypes = {
  header: PropTypes.bool
}

export const Column = ({ children, right, left }, context) => {
  return React.createElement(context.header ? 'th' : 'td', {}, children)
}

Column.contextTypes = {
  header: PropTypes.bool
}

export class RenderTable extends React.Component { 

  render(){
    const cols = this.props.data.columns.filter(this.props.colFilter);
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
          {this.props.data.filter(this.props.rowFilter).map((row, r) => (
            <Row key={r}>
              {cols.map(col => (
                <Column key={r + col}>{row[col]}</Column>
              ))}
            </Row>
          ))}
        </tbody>
      </Table>
    )
  }
}

RenderTable.defaultProps = {
  colFilter: (v) => true,
  rowFilter: (v) => true,
  data: []
};



