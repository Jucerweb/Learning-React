import React from 'react';

class Link extends React.Component {
  render() {
      return (
        <a href={this.props.url} className={this.props.color}>
          <label>{this.props.caption} </label>
        </a>
      );
  }
};

export default Link;
