import React from 'react';

class Header extends React.Component {
  render() {
      return (
        <header>
          <a href="#pending"> Pending </a>
          <a href="#done"> Done </a>
          <a href="#all"> All </a>
        </header>
      )
  }
};

export default Header;
