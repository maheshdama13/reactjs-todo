import React, {useState} from 'react';

const titleChangeHandler = (e) => {
  setTitle("New Reminders");
}

const Reminder = (props) => {
  const [title, settitle] = useState("Reminders");


  return (
    <div>
      <h1>{title}</h1>
      <button className='btn btn-primary' onClick={titleChangeHandler}>Change Title</button>
    </div>
  );
};

export default Reminder;
