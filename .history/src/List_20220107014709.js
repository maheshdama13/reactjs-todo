import React, { Component } from 'react';
import ListElement from "./ListElement";

const DeleteBtn = (props) => {
  return (
    <button
      className="btn btn-sm btn-danger"
      onClick={() => props.handleDelete(props.elementId)}
    >
      Delete
    </button>
  );
};

const EditBtn = (props) => {
  return (
    <button
      className="btn btn-sm btn-warning me-2"
      onClick={() => props.handleEditMode(props.elementId)}
    >
      Edit
    </button>
  );
};

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
        <ListElement row={row} status={status} />;
        /* let checked = row.status === "completed" ? "defaultChecked" : "";
        if (row.status === status) {
          return row.inEdit
            ? this.listItemEditMode(row, index, checked)
            : this.listItem(row, index, checked);
        } */
      });
    } else {
      items = list.map((row, index) => {
        let checked = row.status === "completed" ? "defaultChecked" : "";
        return row.inEdit
          ? this.listItemEditMode(row, index, checked)
          : this.listItem(row, index, checked);
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

  

  listItem(row, index, checked) {
    return (
      <li
        key={index}
        className="list-group-item  align-items-center border-0 mb-2 rounded"
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
        <div className="float-end">
          <EditBtn
            elementId={row.id}
            handleEditMode={this.props.handleEditMode}
          />
          <DeleteBtn
            elementId={row.id}
            handleDelete={this.props.handleDelete}
          />
        </div>
      </li>
    );
  }


  handleInputChange(e) {
    console.log(e);
    console.log(e.target.value);
    // this.setState({item[task]: e.target.value});
    this.setState({
      item: {task: e.target.value},
    })
      // this.setState({ inputValue: e.target.value });
      // this.props.onChange(e);
  }

  listItemEditMode(row, index, checked) {
    this.state = ({
      item: row
    });
    
    return (
      <li
        key={index}
        className="list-group-item  align-items-center border-0 mb-2 rounded"
        style={{ backgroundColor: "#f4f6f7" }}
      >
        <div className="d-flex">
          <input
            type="text"
            name=""
            id={this.state.item.id}
            value={this.state.item.task}
            className="form-control me-2"
            onChange={(e) => {
              this.handleInputChange(e);
            }}
            ref={(input) => (this.myinput = input)}
          />
          <button className="btn btn-sm btn-primary me-2">Save</button>
          <button className="btn btn-sm btn-warning">Cancel</button>
        </div>
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
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
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
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

            <div
              className="tab-pane fade "
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <ul className="list-group mb-0">
                {this.listBasedOnStatus(tasks)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;