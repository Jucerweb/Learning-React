import React from 'react';
import Products from './products';

const store = [
  { id: 1, name: 'Macbook Air 11' },
  { id: 2, name: 'Macbook 2015' },
  { id: 3, name: 'Macbook Air 13' }
];

class Cart extends React.Component {

  handleClick = (id, event) => {
    console.log(id, event);
  };

  render() {
    return (
      <Products store={store} onClick={this.handleClick} />
    );
  }
};

export default Cart;
