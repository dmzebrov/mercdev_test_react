import React from "react";
import "./input.css";

var classNames = require("classnames");
var inputVerification = require("utilities/input-verification");

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.verificateInput = this.verificateInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      value: "",
      displayError: false,
      error: true
    };
  }

  handleChange(e) {
    var inputType = e.target.type;
    var inputValue = e.target.value;

    var inputError = this.verificateInput(e, inputType, inputValue);

    this.setState({
      value: inputValue,
      error: inputError
    });

    this.props.handleChange(e, inputError);
  }

  verificateInput(e, inputType, inputValue) {
    if (inputType === "email") {
      return !inputVerification.email(inputValue);
    }
    if (inputType === "password") {
      return !inputVerification.password(
        inputValue,
        this.props.minLength,
        this.props.maxLength,
        this.props.regexp
      );
    }
  }

  handleBlur() {
    this.setState({
      displayError: true
    });
  }

  render() {
    const { className, type, name, placeholder } = this.props;

    var inputClass = classNames({
      input: true,
      input_error: this.state.displayError && this.state.error,
    });

    return (
      <input
        className={ classNames(inputClass, className) }
        type={type}
        name={name}
        placeholder={placeholder}
        value={this.state.value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
