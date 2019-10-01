import React from "react";

import AuthPageBackground from "./__background/auth-page__background";
import AuthPageLogo from "./__logo/auth-page__logo";
import CommonWindow from "components/common-window/common-window";
import CommonWindowAuth from "components/common-window/__auth/common-window__auth";
import CommonWindowProfile from "components/common-window/__profile/common-window__profile";

import "./__container/auth-page__container.css";
import "./__content/auth-page__content.css";

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
          })
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
        })
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
      <CommonWindowProfile
        photoUrl={this.state.photoUrl}
        name={this.state.name}
        logout={this.logout}
      ></CommonWindowProfile>
    ) : (
      <CommonWindowAuth login={this.login} displayError={this.state.loginError}></CommonWindowAuth>
    );

    return (
      <div className="auth-page">
        <AuthPageBackground></AuthPageBackground>

        <div className="auth-page__container">
          <div className="auth-page__content">
            <AuthPageLogo></AuthPageLogo>

            <CommonWindow>{commonWindowChildren}</CommonWindow>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthPage;
