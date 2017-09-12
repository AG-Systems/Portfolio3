import React, { Component } from 'react';

import Menu from 'components/Global/Menu';
import Footer from 'components/Global/Footer';

export default class About extends Component {
  render() {
    var style = {display: "none"}
    const { children } = this.props; // eslint-disable-line

    return (
      <div className='About'>
        <Menu />
        <div  className='render'>
        { children }
        </div>
        <Footer /> 
      </div>
    );
  }
}
