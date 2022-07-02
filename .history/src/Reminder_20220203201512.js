import React from 'react';

const Reminder = (props) => {
  const [title, setTitle] = useState("Reminder");
  return <div>{title}</div>;
};

export default Reminder;
