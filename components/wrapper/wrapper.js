import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router'
import { Footer, Header } from 'app/components';

import '@app/static/styles/reset.css';
import '@app/static/styles/index.css';

class WrapperClass extends React.Component {
  static propTypes = {
    headerBgActive: PropTypes.bool,
    linkMenuPosition: PropTypes.string,
    lang: PropTypes.string,
    documentation: PropTypes.bool
  }

  render() {
    const { headerBgActive, linkMenuPosition, lang, documentation, activeSection } = this.props;
    return (
      <div className={'rockstat-container'} style={{ width: '100%' }}>
        <Header
          lang={lang}
          headerBgActive={headerBgActive}
          linkMenuPosition={linkMenuPosition}
          documentation={documentation}
          activeSection={activeSection}
        />
        <div className={'rockstat-container-content'}>
          {this.props.children}
        </div>
        <Footer lang={lang} />
      </div>
    )
  }
}

export const Wrapper = withRouter(WrapperClass);
