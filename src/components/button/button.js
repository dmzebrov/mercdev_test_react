import React from "react";
import "./button.css";

import classNames from "classnames";

function Button({ className, ...otherProps }) {
  return <button className={classNames("button", className)} {...otherProps} />;
}

export default Button;
