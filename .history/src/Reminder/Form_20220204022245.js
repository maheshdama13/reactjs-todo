import React from 'react';

const Form = () => {
  return (
    <div className='card'>
      <div className="card-body">
        <div className="form-group">
          <label for="">Item</label>
          <input type="text" name="item" />
        </div>

        <div className="form-group">
          <label for="">Date</label>
          <input type="date" name="date" />
        </div>

      </div>
    </div>
  );
}

export default Form;
