import React from "react";
import FormLogin from "components/form/_login/form_login";
import "./auth-form.css";

var pcClasses = require("utilities/pc-classes");

class AuthForm extends React.Component {
  componentDidMount() {
    pcClasses.addButtonHoverClass();
  }

  render() {
    return (
      <div className="common-window__auth">
        <h3 className="common-window__title">Log In</h3>

        <FormLogin
          login={this.props.login}
          displayError={this.props.displayError}
        />
      </div>
    );
  }
}

export default AuthForm;
