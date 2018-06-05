import * as React from 'react';
import { Header, Footer } from '../../components';

import '../../static/base/fonts.scss';
import '../../static/base/reset.scss';
import '../../static/base/index.scss';

export class Wrapper extends React.Component {
  render() {
    return (
      <div className={'rockstat-container'}>
        <Header />
        <div className={'rockstat-container-content'}>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
