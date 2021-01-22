import React, { Component } from "react";
import Adresse from "./Adresse";

export default class Adresses extends Component {
  // const [adresses, setAdresses] = useState([{checkboxes: Array(7).fill("X")}])

  constructor(props) {
    super(props);
    this.state = {
      adresses: [
        { checkboxes: Array(7).fill("X") },
        // { checkboxes: Array(7).fill("") },
      ],
    };
  }

  handleClick(i, j) {
    const adresses = this.state.adresses.slice();
    adresses.forEach((adresse, index) => {
      if (i === index) {
        if (adresses[index].checkboxes[j] === "X") {
          adresses[index].checkboxes[j] = "";
        } else {
          adresses[index].checkboxes[j] = "X";
        }
      } else {
        adresses[index].checkboxes[j] = "";
      }
    });
    this.setState({
      adresses: adresses,
    });
  }

  addAdress() {
    const adresses = this.state.adresses.slice();
    adresses.push({ checkboxes: Array(7).fill("") });
    this.setState({
      adresses: adresses,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addAdress()}>add address</button>
        {this.state.adresses.map((address, index) => {
          return (
            <Adresse
              key={index}
              index={index}
              checkboxes={address.checkboxes}
              onClick={(i, k) => this.handleClick(i, k)}
            />
          );
        })}
      </div>
    );
  }
}
