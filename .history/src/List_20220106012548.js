import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    console.log('props++++++++++')
  }

  listBasedOnStatus(list, status = null) {
    var items = "";
    if (status) {
      items = list.map((row, index) => {
        let checked = row.status === "completed" ? "defaultChecked" : "";
        if (row.status === status) {
          return this.listItem(row, index, checked);
        }
      });
    } else {
      items = list.map((row, index) => {
        let checked = row.status === "completed" ? "defaultChecked" : "";
        return this.listItem(row, index, checked);
      });
    }
    return items;
  }

  handleCheckbox = (e) => {
    const {id} = e.target;
    /* console.log(id);
    console.log(e.target.checked);
    console.log('name, value--- check'); */

    this.props.handleUpdate(id, e.target.checked);
  }

  const DeleteBtn = (props) => {

  }

  const EditBtn = (props) => {
    
  }

  listItem(row, index, checked) {
    return (
      <li
        key={index}
        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
        style={{ backgroundColor: "#f4f6f7" }}
      >
        <input
          className="form-check-input me-2"
          type="checkbox"
          defaultValue
          aria-label="..."
          defaultChecked={checked}
          id={row.id}
          onChange={this.handleCheckbox}
        />
        {row.task}
      </li>
    );
  }

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Active
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <ul className="list-group mb-0">
                {this.listBasedOnStatus(tasks)}
              </ul>
            </div>

            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ul className="list-group mb-0">
                {this.listBasedOnStatus(tasks, "active")}
              </ul>
            </div>

            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <ul className="list-group mb-0">
                {this.listBasedOnStatus(tasks, "completed")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;