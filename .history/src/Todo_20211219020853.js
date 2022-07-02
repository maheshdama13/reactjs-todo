import React, { Component } from 'react'
import List from "./List";
import AddItem from './AddItem';

export default class Todo extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  
  constructor(props) {
    super(props);
    var initialState = {
      name: "",
      created_at: "",
      status: "",
    };
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
