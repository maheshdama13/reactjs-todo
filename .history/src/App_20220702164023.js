import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Todo from "./Todo";

const tasks = [
  {
    id: 2,
    task: "This is my first task",
    created_at: "2021-12-19 01:06AM",
    status: "active",
  },
  {
    id: 3,
    task: "This is my second task",
    created_at: "2021-12-19 01:06AM",
    status: "completed",
  },
  {
    id:4,
    task: "This is my third task",
    created_at: "2021-12-19 01:06AM",
    status: "active",
  },
  {
    id:5,
    task: "This is my 4th task",
    created_at: "2021-12-19 01:06AM",
    status: "active",
  },
  {
    id:6,
    task: "This is my 5th task",
    created_at: "2021-12-19 01:06AM",
    status: "completed",
  },
  {
    id:7,
    task: "This is my 6th task",
    created_at: "2021-12-19 01:06AM",
    status: "completed",
  },
  {
    id:8,
    task: "This is my 7th task",
    created_at: "2021-12-19 01:06AM",
    status: "active",
  },
  {
    id:9,
    task: "This is my 8th task",
    created_at: "2021-12-19 01:06AM",
    status: "active",
  },
];

class App extends Component {
  handleSubmit = (task) => {
    console.log(...this.state.tasks);
    console.log("this.state.characters");
    console.log(this.state.tasks[this.state.tasks.length - 1]);
    let last_element = this.state.tasks[this.state.tasks.length - 1];
    let new_id = last_element.id + 1;
    task = { ...task, id: new_id };
    // return this[this.length - 1];
    console.log("this.state.tasks)))))))))))))))))))))");
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  handleUpdate = (id, is_checked) => {
    let status = "active";
    if (is_checked) {
      status = "completed";
    }

    // this.setState({ tasks: [...this.state.tasks, task] });
    this.setState({
      tasks: this.state.tasks.map((item, idx) => {
        return item.id != id ? item : { ...item, status: status };
      }),
    });
  };

  handleDelete = (id) => {
    console.log(id);
    console.log("id----------------------------");
    this.setState({
      tasks: this.state.tasks.filter((item, idx) => {
        return item.id != id;
      }),
    });
  };

  handleEditMode = (id) => {
    this.setState({
      tasks: this.state.tasks.map((item, idx) => {
        return item.id != id ? item : { ...item, inEdit: 1 };
      }),
    });
  };

  handleUpdateTask = (id, updated_task) => {
    // this.setState({ tasks: [...this.state.tasks, task] });
    this.setState({
      tasks: this.state.tasks.map((item, idx) => {
        return item.id != id
          ? item
          : { ...item, task: updated_task, inEdit: 0 };
      }),
    });
  };

  handleCancelUpdateTask = (id) => {
    // this.setState({ tasks: [...this.state.tasks, task] });
    this.setState({
      tasks: this.state.tasks.map((item, idx) => {
        return item.id != id
          ? item
          : { ...item, inEdit: 0 };
      }),
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      tasks: tasks,
    };
  }

  render() {
    const { tasks } = this.state;
    return (
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <Card>
                <Todo
                  tasks={tasks}
                  handleSubmit={this.handleSubmit}
                  handleUpdate={this.handleUpdate}
                  handleDelete={this.handleDelete}
                  handleEditMode={this.handleEditMode}
                  handleUpdateTask={this.handleUpdateTask}
                  handleCancelUpdateTask={this.handleCancelUpdateTask}
                />
              </Card>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
