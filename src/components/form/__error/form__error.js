import React from "react";
import "./form__error.css";

import classNames from "classnames";

function FormError({ className, children, ...otherProps }) {
  return (
    <div
      className={classNames("form__error", className)}
      {...otherProps}
    >
      <p>{children}</p>
    </div>
  );
}

export default FormError;
