import React, {useState} from 'react';

const Reminder = (props) => {
  const [title, setTitle] = useState("Reminders");
  const [title, settitle] = useState(initialState);

  const titleChangeHandler = (e) => {
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
