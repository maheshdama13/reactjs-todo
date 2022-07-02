import React, {useState} from 'react';

const Reminder = (props) => {
  const [title, setTitle] = useState("Reminders");

  const titleChangeHandler = () => {
    setTitle("New Reminders");
  }

  return (
    <div>
      <h1>{title}</h1>
      <button className='btn btn-primary' onClick={titlechangeHandler}>Change Title</button>
    </div>
  );
};

export default Reminder;
