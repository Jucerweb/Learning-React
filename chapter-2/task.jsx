import React from 'react';

class Task extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool
  };

  static defaultProps = {
    done: false
  };

  state = {
    updated: false
  };

  handleClick = (event) => {
    var state = this.state.updated;
    if (state){
      this.setState({ updated: false });
    }
    else{
      this.setState({ updated: true });
    }
  };

  render() {
    return (
      <li className={this.props.done ? 'done' : null} onClick={ this.handleClick}>

        { this.props.name }
        { this.state.updated ? <small> Updated...</small> : null }
      </li>
    )
  }
};

export default Task;
