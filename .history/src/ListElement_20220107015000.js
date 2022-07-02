import React, { Component } from 'react';

class ListElement extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { row, index } = this.props;
    let checked = row.status === "completed" ? "defaultChecked" : "";
    if (row.status === status) {
      return row.inEdit
        ? this.listItemEditMode(row, index, checked)
        : this.listItem(row, index, checked);
    }

    /* return (
      <div>

      </div>
    ); */
  }
}


export default ListElement;