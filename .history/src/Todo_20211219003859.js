import React, { Component } from 'react'
import List from "./List";
import AddItem from './AddItem';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <AddItem />
        <List />
      </div>
    )
  }
}
