import React, {useState} from 'react';

const Reminder = (props) => {
  const [title, setTitle] = useState("Reminder");
  return (
    <h1>{title}</h1>
  );
};

export default Reminder;
