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
  }

  handleCheckbox = (e) => {
    const { id } = e.target;
    /* console.log(id);
    console.log(e.target.checked);
    console.log('name, value--- check'); */

    this.props.handleUpdate(id, e.target.checked);
  };

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