import React, { Component } from 'react'
import List from "./List";
import AddItem from './AddItem';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {tasks} = this.props.tasks;

    return (
      <div>
        <AddItem />
        <List tasks={this.tasks}/>
      </div>
    );
  }
}
