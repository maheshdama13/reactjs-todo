import React from 'react';

const Form = () => {
  return (
    <div >
      <div className="form-group">
        <label for="">Item</label>
        <input type="text" name="item" />
      </div>

      <div className="form-group">
        <label for="">Date</label>
        <input type="date" name="date" />
      </div>
    </div>
  );
}

export default Form;
