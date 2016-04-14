import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task';
import Tasks from './tasks';

class ToDo extends React.Component {

  // componentDidMount() {
  //   const el = ReactDOM.findDOMNode(this.refs.first);
  //   console.log(el);
  // };

  render() {
    return (
      <div>
        <Tasks>
          <Task ref='first' name='Introduction' done />
          <Task name='Chapter 1 - First component' done />
          <Task name='Chapter 2 - Properties'/>
          <Task name='Required property'/>
        </Tasks>
      </div>
    )
  }
};

export default ToDo;
