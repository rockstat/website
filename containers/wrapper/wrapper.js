import * as React from 'react';
import { Footer, Header } from 'app/components';
import PropTypes from 'prop-types';

import '../../static/base/reset.css';
import '../../static/base/index.css';
import '../../static/base/hljs/tomorrow-night-bright.css';

export class Wrapper extends React.Component {
  static propTypes = {
    headerBgActive: PropTypes.bool,
    linkMenuPosition: PropTypes.string,
    lang: PropTypes.string,
    documentation: PropTypes.bool
  }

  render() {
    const { headerBgActive, linkMenuPosition, lang, documentation, activeSection } = this.props;

    return (
      <div className={'rockstat-container'} style={{width: '100%'}}>
        <Header
          lang={lang}
          headerBgActive={headerBgActive}
          linkMenuPosition={linkMenuPosition}
          documentation={documentation}
          activeSection={activeSection}
        />
        <div className={'rockstat-container-content'}>
          { this.props.children }
        </div>
        <Footer lang={lang} />
      </div>
    )
  }
}
