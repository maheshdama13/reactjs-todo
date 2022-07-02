import React,{useState} from 'react';

const Form = () => {
  const initialState = {
    item:'',
    date:''
  };
  const [formData, setformData] = useState(initialState);

  const inputChangeHandler = (e) => {
    const {name, value} = e.target;

    // setformData({...formData, [name]:value});
    setformData((prevState) => {
      return {...prevState, [name]:value}
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form className='mt-4 card' onSubmit={submitHandler}>
      <div className="card-body">
        <div className="row align-items-end ">
          <div className="col-md-7">
            <div className="form-group">
              <label>Item</label>
              <input type="text" className='form-control' name="item" value={formData.item} onChange={inputChangeHandler} />
            </div>

          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Date</label>
              <input type="date" className='form-control' name="date" value={formData.date} onChange={inputChangeHandler} />
            </div>

          </div>

          <div className="col-md-2">
            <button type="submit" className='btn btn-danger w-100'>Add</button>
          </div>
        </div>


      </div>
    </form>
  );
}

export default Form;
