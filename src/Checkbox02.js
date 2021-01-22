import React from "react";

const Checkbox02 = ({ onClick, value }) => {
  return (
    <div className='square' onClick={onClick}>
      {value}
    </div>
  );
};

export default Checkbox02;
