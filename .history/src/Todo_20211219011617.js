import React, { Component } from 'react'
import List from "./List";
import AddItem from './AddItem';

export default class Todo extends Component {
  constructor(props) {
    console.log(props);
    console.log("props---------");
  }
  render() {
    return (
      <div>
        <AddItem />
        <List />
      </div>
    );
  }
}
