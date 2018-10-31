import React from 'react';
import PropTypes from 'prop-types'

export class GoogleTagManager extends React.Component {
  componentDidMount() {
    const holderName = this.props.holderName || 'rstat';
    const scriptId = this.scriptId();
    if (!window[holderName]) {
      const rstatScriptNode = document.getElementById(scriptId);
      eval(rstatScriptNode.textContent);
    }
  }

  scriptId() {
    return this.props.scriptId || 'rockstat-react-tag'
  }

  render() {
    return (
      <div>
        <div id={this.scriptId()}>
          {/* {gtm.scriptAsReact()} */}
        </div>
      </div>
    );
  }
}

GoogleTagManager.propTypes = {
  gtmId: PropTypes.string.isRequired,
  holderName: PropTypes.string,
  scriptId: PropTypes.string,
};

