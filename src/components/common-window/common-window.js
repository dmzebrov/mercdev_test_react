import React from "react";
import "./common-window.css";

import classNames from "classnames";

function CommonWindow({ className, ...ohterProps }) {
  return (
    <div className={classNames("common-window", className)} {...ohterProps} />
  );
}

export default CommonWindow;
