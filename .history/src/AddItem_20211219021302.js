import React, { Component } from 'react';

class AddItem extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    var initialState = {
      task: "",
      created_at: "",
      status: "",
    };
  };

  state = this.initialState;

  render() {
    const { task, created_at, status } = this.state;
    return (
      <div>
        <form className="d-flex justify-content-center align-items-center mb-4">
          <div className="form-outline flex-fill">
            <input
              type="text"
              id="form2"
              className="form-control"
              placeholder="New Task"
              value={task}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-info ms-2">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;