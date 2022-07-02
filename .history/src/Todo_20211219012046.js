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
        <AddItem />
        <List tasks={tasks} />
      </div>
    );
  }
}
