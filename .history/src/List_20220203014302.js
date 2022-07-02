import React, { Component } from 'react';
import ListElement from "./ListElement";
import ListTab from "./ListTab";



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
        
        // let checked = row.status === "completed" ? "defaultChecked" : "";
        if (row.status === status) {
          return <ListElement row={row} index={index} 
          handleUpdate={this.props.handleUpdate}
          handleDelete={this.props.handleDelete}
          handleEditMode={this.props.handleEditMode}
          handleUpdateTask={this.props.handleUpdateTask}
          handleCancelUpdateTask={this.props.handleCancelUpdateTask}
          />
          /* return row.inEdit
            ? this.listItemEditMode(row, index, checked)
            : this.listItem(row, index, checked); */
        } 
      });
    } else {
      items = list.map((row, index) => {
        return <ListElement row={row} index={index} 
          handleUpdate={this.props.handleUpdate}
          handleDelete={this.props.handleDelete}
          handleEditMode={this.props.handleEditMode}
          handleUpdateTask={this.props.handleUpdateTask}
          handleCancelUpdateTask={this.props.handleCancelUpdateTask}
          />
        /* let checked = row.status === "completed" ? "defaultChecked" : "";
        return row.inEdit
          ? this.listItemEditMode(row, index, checked)
          : this.listItem(row, index, checked); */
      });
    }
    return items;
  }

 

  

  


  

  

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <ListTab>
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
            </ListTab>
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