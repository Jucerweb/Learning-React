import React from 'react';

class Tasks extends React.Component {
  render() {
    return (
      <section>
        <h3> React course </h3>
        <ul>
          {this.props.children}
        </ul>
      </section>
    )
  }
};

export default Tasks;

