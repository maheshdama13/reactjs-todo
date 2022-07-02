import React, { Component } from 'react';

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

class ListElement extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    console.log("props0000000000000")
    /* this.state({
      task: 
    }) */
  }

  handleCheckbox = (e) => {
    const { id } = e.target;
    /* console.log(id);
    console.log(e.target.checked);
    console.log('name, value--- check'); */

    this.props.handleUpdate(id, e.target.checked);
  };

  handleInputChange(e) {
    console.log(e);
    console.log(e.target.value);
    // this.setState({item[task]: e.target.value});
    this.setState({
      item: { task: e.target.value },
    });
    // this.setState({ inputValue: e.target.value });
    // this.props.onChange(e);
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

  listItemEditMode(row, index, checked) {
    this.state = {
      item: row,
    };

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
    const { row, index, status } = this.props;
    let checked = row.status === "completed" ? "defaultChecked" : "";
    return row.inEdit
      ? this.listItemEditMode(row, index, checked)
      : this.listItem(row, index, checked);

    /* return (
      <div>

      </div>
    ); */
  }
}


export default ListElement;