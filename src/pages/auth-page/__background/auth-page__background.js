import React from "react";
import "./auth-page__background.css";
import background from "files/background.png";

function AuthPageBackground() {
  return (
    <img className="auth-page__background" src={background} alt="background" />
  );
}

export default AuthPageBackground;
