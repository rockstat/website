import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mermaid, {mermaidAPI} from 'mermaid'

export class Mermaid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      svg: null,
    }

    mermaidAPI.initialize({
      startOnLoad: false,
    })
  }

  componentDidMount() {
    mermaidAPI.render(this.props.id, this.props.content, svg => {
      this.setState({ svg })
    })
  }

  render() {
    if (!this.state.svg) {
      return <div>Loading...</div>
    }

    return <div dangerouslySetInnerHTML={{ __html: this.state.svg }} />
  }
}

Mermaid.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

