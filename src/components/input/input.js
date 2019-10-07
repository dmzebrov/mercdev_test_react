import React from "react";
import "./input.css";

var classNames = require("classnames");
var inputvalidation = require("utilities/input-validation");

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
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

    var inputError = this.validate(e, inputType, inputValue);

    this.setState({
      value: inputValue,
      error: inputError
    });

    this.props.handleChange(e, inputError);
  }

  validate(e, inputType, inputValue) {
    if (inputType === "email") {
      return !inputvalidation.email(inputValue);
    }
    if (inputType === "password") {
      return !inputvalidation.password(
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
      input_error: this.state.displayError && this.state.error
    });

    return (
      <input
        className={classNames(inputClass, className)}
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
