import React from 'react';

const Form = () => {
  const inputChangeHandler = (e) => {
    console.log(e.target);
  }

  return (
    <div className='mt-4 card'>
      <div className="card-body">
        <div className="row align-items-end ">
          <div className="col-md-7">
            <div className="form-group">
              <label for="">Item</label>
              <input type="text" className='form-control' name="item" onChange={inputChangeHandler} />
            </div>

          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label for="">Date</label>
              <input type="date" className='form-control' name="date" onChange={inputChangeHandler} />
            </div>

          </div>

          <div className="col-md-2">
            <button className='btn btn-danger w-100'>Add</button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Form;
