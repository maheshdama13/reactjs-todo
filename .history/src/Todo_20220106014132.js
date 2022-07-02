import React, { Component } from 'react'
import List from "./List";
import AddItem from './AddItem';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { tasks } = this.props;
    console.log(tasks);

    return (
      <div>
        <AddItem handleSubmit={this.props.handleSubmit} />
        <List
          tasks={tasks}
          handleUpdate={this.props.handleUpdate}
          handleDelete={this.props.handleDelete}
        />
      </div>
    );
  }
}
