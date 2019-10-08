import React from "react";
import "./form__error.css";

import classNames from "classnames";

function FormError({ className, children, ...otherProps }) {
  return (
    <div
      id="inputError"
      className={classNames("form__error", className)}
      {...otherProps}
    >
      <h4>{children}</h4>
    </div>
  );
}

export default FormError;
