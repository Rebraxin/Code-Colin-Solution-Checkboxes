import React, { useState } from "react";
import Adresse02 from "./Adresse02";

const Adresses02 = () => {
  const [adresses, setAdresses] = useState([
    { checkboxes: Array(7).fill("X") },
  ]);

  const handleClick = (i, j) => {
    adresses.forEach((adresse, idx) => {
      i === idx
        ? adresses[idx].checkboxes[j] === "X"
          ? (adresses[idx].checkboxes[j] = "")
          : (adresses[idx].checkboxes[j] = "X")
        : (adresses[idx].checkboxes[j] = "");
    });
    setAdresses(adresses);
  };

  const addAddress = () => {
    const newAdresses = [...adresses];
    newAdresses.push({ checkboxes: Array(7).fill("") });
    setAdresses(newAdresses);
  };

  return (
    <div>
      <button onClick={() => addAddress()}>Add Address</button>
      {adresses.map(({ checkboxes }, idx) => (
        <Adresse02
          key={idx}
          index={idx}
          checkboxes={checkboxes}
          onClick={(i, k) => handleClick(i, k)}
        />
      ))}
    </div>
  );
};

export default Adresses02;
