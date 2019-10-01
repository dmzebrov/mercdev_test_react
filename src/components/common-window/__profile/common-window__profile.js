import React from "react";
import Button from "components/button/button";
import "./common-window__profile.css";
import "./common-window__profile-avatar.css";
import "./common-window__profile-user-name.css";
import "./common-window__logout-button.css";

var pcClasses = require("utilities/pc-classes");

class CommonWindowProfile extends React.Component {
  componentDidMount() {
    pcClasses.addButtonHoverClass();
  }

  render() {
    return (
      <div className="common-window__profile">
        <img
          className="common-window__profile-avatar"
          id="avatar"
          alt="avatar"
          src={this.props.photoUrl}
        />

        <h2 className="common-window__profile-user-name">{this.props.name}</h2>

        <Button
          classNames="common-window__logout-button"
          buttonType="button"
          handleClick={this.props.logout}
        >
          Logout
        </Button>
      </div>
    );
  }
}

export default CommonWindowProfile;
