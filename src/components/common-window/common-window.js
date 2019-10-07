import React from "react";
import "./common-window.css";

var classNames = require("classnames");

function CommonWindow({ className, ...ohterProps }) {
  return (
    <div className={classNames("common-window", className)} {...ohterProps} />
  )
}

export default CommonWindow;
