import React from "react";

import "components/input/input.css";

class Form extends React.Component {
  render() {
    return (
      <form className={"form " + this.props.className}>
        {this.props.children}
      </form>
    );
  }
}

function Form({ children, className, ...otherProps }) {
  return(
    <form className={ classNames("form", className) } {...otherProps} />
  )
}

export default Form;
