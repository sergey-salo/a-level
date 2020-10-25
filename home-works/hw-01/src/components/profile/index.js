import React from "react";
import ProfileHeader  from "./profile-header";
import userAvatar from "../../images/252.png";
import ProfileFollowers from "./profile-followers";

function Profile(props) {
  return (
    <div id="profile">
      <ProfileHeader userNames={props.userNames} />
      <hr id="hr" />
      <img id="userAvatar" src={userAvatar} alt="user avatar"/>
      <ProfileFollowers />
    </div>
  );
}

export default Profile;