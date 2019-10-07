import React from "react";
import "./button.css";

var classNames = require("classnames");

function Button({ className, ...otherProps }) {
  return <button className={classNames("button", className)} {...otherProps} />;
}

export default Button;
