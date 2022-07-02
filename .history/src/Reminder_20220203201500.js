import React from 'react';

const Reminder = (props) => {
  const [title, settitle] = useState("Reminder");
  return <div>{title}</div>;
};

export default Reminder;
