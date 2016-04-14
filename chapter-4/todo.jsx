import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../chapter-2/task';
import Content from './content';
import Header from './header';

class ToDo extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <Task name='Introduction' done />
          <Task name='Chapter 1 - First component' done />
          <Task name='Chapter 2 - Properties'/>
        </Content>
        <footer> Copyright...</footer>
      </div>
    )
  }
};

export default ToDo;
