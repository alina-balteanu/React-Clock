import React, { Component } from "react";

class ClockHand extends Component {
  getStyle = () => {
    return {
      transform: `translateX(-50%) rotate(${this.props.rotate}deg)`,
      transition: `${
        (this.props.rotate > 534 || this.props.rotate <= 182) &&
        this.props.name === "seconds"
          ? "none"
          : 0.2 + "s cubic-bezier(0.4, 2.08, 0.55, 0.44)"
      }`
    };
  };

  render() {
    return (
      <div className={`hand ${this.props.name}`} style={this.getStyle()} />
    );
  }
}

export default ClockHand;
