import React from "react";

import background from "files/background.png";
import logo from "files/w-mercury-development.svg";
import CommonWindow from "components/common-window/common-window";
import AuthForm from "pages/auth-page/__auth-form/auth-form";
import Profile from "pages/auth-page/__profile/profile";

import "./auth-page.css";

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      loggedIn: false,
      photoUrl: "",
      name: "",
      loginError: false
    };
  }

  login(loginData) {
    fetch("https://us-central1-mercdev-academy.cloudfunctions.net/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          this.setState({
            loginError: true
          });
        } else {
          this.setState({
            photoUrl: result.photoUrl,
            name: result.name,
            loggedIn: true,
            loginError: false
          });
        }
      })
      .catch(error => {
        this.setState({
          loginError: true
        });
      });
  }

  logout() {
    this.setState({
      loggedIn: false,
      photoUrl: "",
      name: ""
    });
  }

  render() {
    const commonWindowChildren = this.state.loggedIn ? (
      <Profile
        photoUrl={this.state.photoUrl}
        name={this.state.name}
        logout={this.logout}
      />
    ) : (
      <AuthForm
        login={this.login}
        displayError={this.state.loginError}
      />
    );

    return (
      <div className="auth-page">
        <img
          className="auth-page__background"
          src={background}
          alt="background"
        />

        <div className="auth-page__container">
          <div className="auth-page__content">
            <img className="auth-page__logo" src={logo} alt="Mercury" />

            <CommonWindow>{commonWindowChildren}</CommonWindow>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthPage;
