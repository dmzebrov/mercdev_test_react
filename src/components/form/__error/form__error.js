import React from "react";

import "./form__error.css";

function FormError(props) {
  return (
    <div id="inputError" className={"form__error " + props.classNames}>
      <h4>{props.children}</h4>
    </div>
  );
}

export default FormError;
