import React from "react";
import "./input.css";

import classNames from "classnames";
import {
  emailValidation,
  passwordValidation
} from "utilities/input-validation";

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
      return !emailValidation(inputValue);
    }
    if (inputType === "password") {
      return !passwordValidation(
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
    const { className, ...otherProps } = this.props;

    var inputClass = classNames({
      input: true,
      input_error: this.state.displayError && this.state.error
    });

    return (
      <input
        className={classNames(inputClass, className)}
        value={this.state.value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        {...otherProps}
      />
    );
  }
}

export default Input;
