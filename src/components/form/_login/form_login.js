import React from "react";

import "./form_login.css";

import Input from "components/input/input";
import Button from "components/button/button";
import FormError from "../__error/form__error";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      error: true,
      displayError: false,
      email: "",
      password: ""
    };
  }

  handleChange(e, inputError) {
    this.setState({
      error: inputError,
      [e.target.name]: e.target.value
    });
  }

  login(e) {
    e.preventDefault(e);

    if (!this.state.error) {
      this.setState({
        displayError: false
      });

      let loginData = {
        email: this.state.email,
        password: this.state.password
      };

      this.props.login(loginData);
    } else {
      this.setState({
        displayError: true
      });
    }
  }

  render() {
    let error;
    if (this.state.displayError || this.props.displayError) {
      error = (
        <FormError classNames="common-window__auth-error">
          E-Mail or password is incorrect
        </FormError>
      );
    }

    return (
      <form className="form form_login" onSubmit={this.login}>
        <Input
          type="email"
          name="email"
          placeholder="E-Mail"
          classNames="common-window__auth-input"
          handleChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          classNames="common-window__auth-input"
          minLength="3"
          maxLength="15"
          handleChange={this.handleChange}
        />

        {error}

        <Button
          buttonType="input"
          value="Login"
          classNames="common-window__login-button"
        />
      </form>
    );
  }
}

export default FormLogin;
