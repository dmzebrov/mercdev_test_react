import React from "react";

import "./form__error.css";

function FormError(props) {
  return (
    <div id="inputError" className={"form__error " + props.className}>
      <h4>{props.children}</h4>
    </div>
  );
}

export default FormError;
