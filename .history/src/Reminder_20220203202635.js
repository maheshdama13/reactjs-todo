import React, {useState} from 'react';

const Reminder = (props) => {
  const [title, setTitle] = useState("Reminders");

  const titleChangeHandler = (e) => {
    console.log(e.target.text())
    console.log("props------")
    setTitle("New Reminders");
  }

  return (
    <div>
      <h1>{title}</h1>
      <button className='btn btn-primary' onClick={titleChangeHandler}>Change Title</button>
    </div>
  );
};

export default Reminder;
