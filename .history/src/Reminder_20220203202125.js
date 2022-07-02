import React, {useState} from 'react';

const Reminder = (props) => {
  const [title, setTitle] = useState("Reminders");

  const titleChangeHandler = () => {
    setTitle("New Reminders");
  }

  return (
    <h1>{title}</h1>
  );
};

export default Reminder;
