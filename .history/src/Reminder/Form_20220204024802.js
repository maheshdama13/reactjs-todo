import React,{useState} from 'react';

const Form = () => {
  const [formData, setformData] = useState(initialState);
  const initialState = {
    item:'',
    date:''
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className='mt-4 card'>
      <div className="card-body">
        <div className="row align-items-end ">
          <div className="col-md-7">
            <div className="form-group">
              <label>Item</label>
              <input type="text" className='form-control' name="item" onChange={inputChangeHandler} />
            </div>

          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Date</label>
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
