import React from "react";
import FormLogin from "components/form/_login/form_login";
import "./common-window__auth.css";
import "./common-window__auth-input.css";
import "./common-window__auth-error.css";
import "./common-window__login-button.css";
import "../common-window__title.css";

var pcClasses = require("utilities/pc-classes");

class CommonWindowAuth extends React.Component {
  componentDidMount() {
    pcClasses.addButtonHoverClass();
  }

  render() {
    return (
      <div className="common-window__auth">
        <h3 className="common-window__title">Log In</h3>

        <FormLogin login={this.props.login} displayError={this.props.displayError}></FormLogin>
      </div>
    );
  }
}

export default CommonWindowAuth;