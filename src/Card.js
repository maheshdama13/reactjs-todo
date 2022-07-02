import React from 'react';

const Card = (props) => {
  return (
    <div className="card mb-2">
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
