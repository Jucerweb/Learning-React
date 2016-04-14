import React from 'react';
import reactMixin from 'react-mixin';

import MixinES from './mixin.es.js';
import MixinFR from './mixin.fr.js';


class Hello extends React.Component {
  componentDidMount() {
    console.log('Hello World')
  };

  render(){
    return (
      <h1>  </h1>
    )

  }
}

reactMixin(Hello.prototype, MixinES);
reactMixin(Hello.prototype, MixinFR);

export default Hello;
