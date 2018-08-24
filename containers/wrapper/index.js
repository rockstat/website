import * as React from 'react';
import { Footer, Header } from '../../components';
import PropTypes from 'prop-types';

// import 'raleway-cyrillic/fonts/Raleway-v4020-Bold.ttf';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Bold.woff';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Bold.eot';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Medium.eot';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Medium.ttf';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Medium.woff';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Regular.eot';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Regular.ttf';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Regular.woff';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Light.eot';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Light.ttf';
// import 'raleway-cyrillic/fonts/Raleway-v4020-Light.woff';

import '../../static/base/fonts.css';
import '../../static/base/reset.css';
import '../../static/base/index.css';

export class Wrapper extends React.Component {
  static propTypes = {
    headerBgActive: PropTypes.bool,
    linkMenuPosition: PropTypes.string,
    lang: PropTypes.string,
    documentation: PropTypes.bool
  }

  render() {
    const { headerBgActive, linkMenuPosition, lang, documentation, activeSection } = this.props;
    console.log('wrapper lang', lang)
    return (
      <div className={'rockstat-container'}>
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
