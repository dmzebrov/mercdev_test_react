import React from "react";
import "./auth-page__logo.css";

import logo from "files/w-mercury-development.svg";

function AuthPageLogo() {
  return <img className="auth-page__logo" src={logo} alt="Mercury" />;
}

export default AuthPageLogo;
