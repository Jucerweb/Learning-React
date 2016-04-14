import React from 'react';

var dataSource = [
  { name: 'Superman'  , power: 'fly with underwear' },
  { name: 'Batman'    , power: 'belt with gadgets' },
  { name: 'Flash'     , power: 'Run a lot' }
];

class Heroes extends React.Component {

  state = {
    list: []
  };

  fetchData = () => {
    setTimeout(function(){
      this.setState({ list: dataSource });
    }.bind(this), 2000);
  };

  handleReset = () => {
    this.setState({ list: [] });
  };

  handleFetch = () => {
    this.fetchData();
  };

  componentDidMount() {
    this.fetchData();
  };

  render() {
    if (!this.state.list.length){
      return (
        <div>
          No list!
          <br />
          <button onClick={this.handleFetch}> Fetch </button>
        </div>
      );
    }
    else {
      return (
        <div>
          <ul>
            {
              this.state.list.map(function(heroe, index){
                return (
                  <li key={index}> {heroe.name} the {heroe.power}! </li>
                );
              })
            }
          </ul>
          <button onClick={this.handleReset}> Reset </button>
        </div>
      );
    }
  }
};

export default Heroes;

