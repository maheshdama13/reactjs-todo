import React, { Component } from 'react';

class AddItem extends Component {
  render() {
    return (
      <div>
        <form className="d-flex justify-content-center align-items-center mb-4">
          <div className="form-outline flex-fill">
            <input type="text" id="form2" className="form-control" placeholder="New Task"/>
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