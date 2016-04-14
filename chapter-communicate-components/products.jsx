import React from 'react';

class Products extends React.Component {

  static propTypes: {
    store: React.PropTypes.array.isRequired,
    onClick: React.propTypes.func.isRequired
  };

  render() {
    return (
      <ul>
        {
          this.props.store.map(function(product, index){
            return (
              <li key={index} onClick={this.props.onClick.bind(null, product.id)}>
                {product.name}
              </li>
            );
          }.bind(this))
        }
      </ul>
    );
  }
};

export default Products;
