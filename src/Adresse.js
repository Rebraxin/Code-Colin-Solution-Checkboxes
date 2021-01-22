import React from "react";
import Checkbox from "./Checkbox";

export default class Adresse extends React.Component {
  renderCheckbox(i) {
    return (
      <Checkbox
        value={this.props.checkboxes[i]}
        index={i}
        onClick={() => this.props.onClick(this.props.index, i)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderCheckbox(0)}
        {this.renderCheckbox(1)}
        {this.renderCheckbox(2)}
        {this.renderCheckbox(3)}
        {this.renderCheckbox(4)}
        {this.renderCheckbox(5)}
        {this.renderCheckbox(6)}
      </div>
    );
  }
}
