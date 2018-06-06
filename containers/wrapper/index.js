import * as React from 'react';
import { Header, Footer } from '../../components';
import PropTypes from 'prop-types';

import '../../static/base/fonts.scss';
import '../../static/base/reset.scss';
import '../../static/base/index.scss';

export class Wrapper extends React.Component {
  static propTypes = {
    headerBgActive: PropTypes.bool
  }

  render() {
    const { headerBgActive } = this.props;

    return (
      <div className={'rockstat-container'}>
        <Header headerBgActive={headerBgActive} />
        <div className={'rockstat-container-content'}>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
