import React, {useState} from 'react';
import Form from "./Reminder/Form";

const Reminder = (props) => {
  const [title, setTitle] = useState("Reminders");
  
  const titleChangeHandler = (e) => {
    setTitle("New Reminders");
  }

  return (
    <div>
      <h1>{title}</h1>
      <button className='btn btn-primary' onClick={titleChangeHandler}>Change Title</button>

      <Form />
    </div>
  );
};

export default Reminder;
