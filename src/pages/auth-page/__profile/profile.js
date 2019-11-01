import React from "react";
import Button from "components/button/button";
import "./profile.css";

var pcClasses = require("utilities/pc-classes");

class Profile extends React.Component {
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
          className="common-window__logout-button"
          onClick={this.props.logout}
        >
          Logout
        </Button>
      </div>
    );
  }
}

export default Profile;
