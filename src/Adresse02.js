import React from "react";
import Checkbox02 from "./Checkbox02";

const Adresse02 = ({ checkboxes, index, onClick }) => {
  const renderCheckbox02 = (i) => {
    return (
      <Checkbox02
        value={checkboxes[i]}
        index={i}
        onClick={() => onClick(index, i)}
      />
    );
  };

  return (
    <div>
      {renderCheckbox02(0)}
      {renderCheckbox02(1)}
      {renderCheckbox02(2)}
      {renderCheckbox02(3)}
      {renderCheckbox02(4)}
      {renderCheckbox02(5)}
      {renderCheckbox02(6)}
    </div>
  );
};

export default Adresse02;
