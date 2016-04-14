import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';

class Hello extends React.Component {

  state = {
    message: 'Hi!'
  }

  componentDidUpdate() {
    console.log('Component updated!');
  }

  handleClick = (value, event) => {
    console.log('Click event', value);
    this.setState({ message: value });
  }

  render () {
    console.log('Component rendered');
    return (
      <div>
        <h1> Greeting: {this.state.message} </h1>
        <button onClick={this.handleClick.bind(null, 'Hi!')}> Hello </button>
        <button onClick={this.handleClick.bind(null, 'Bye!')}> Goodbye </button>
      </div>
    );
  }
};


reactMixin(Hello.prototype, PureRenderMixin);

export default Hello;
