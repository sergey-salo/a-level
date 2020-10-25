import ProfileFollower from "./profile-follower";

const ProfileFollowers = (props) => {
  return (
    <div className="profile-followers">
      <ProfileFollower classNameValue="followers" followersNumber="4356" heading="Followers" />
      <ProfileFollower classNameValue="following" followersNumber="532" heading="Following" />
    </div>
  )
}

export default ProfileFollowers