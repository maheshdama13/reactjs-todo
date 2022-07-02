import React from 'react';

const Form = () => {
  return (
    <div className='mt-4 card'>
      <div className="card-body">
        <div className="form-group">
          <label for="">Item</label>
          <input type="text" className='form-control' name="item" />
        </div>

        <div className="form-group">
          <label for="">Date</label>
          <input type="date" className='form-control' name="date" />
        </div>

      </div>
    </div>
  );
}

export default Form;
