import React from "react";
import "./common-window.css";

class CommonWindow extends React.Component {
  render() {
    return <div className="common-window">{this.props.children}</div>;
  }
}

export default CommonWindow;
