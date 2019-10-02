import React from "react";

import "./button.css";

class Button extends React.Component {
  render() {
    if (this.props.buttonType === "input") {
      return (
        <input
          className={"button " + this.props.classNames}
          type="submit"
          value={this.props.value}
        />
      );
    }
    if (!this.props.buttonType || this.props.buttonType === "button") {
      return (
        <button
          className={"button " + this.props.classNames}
          onClick={this.props.handleClick}
        >
          {this.props.children}
        </button>
      );
    }
  }
}

export default Button;
