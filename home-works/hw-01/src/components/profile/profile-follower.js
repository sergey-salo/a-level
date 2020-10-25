const ProfileFollower = (props) => {
  return (
    <div className={props.classNameValue}>
      <p>{props.followersNumber}<br/>{props.heading}</p>
    </div>
  )
}

export default ProfileFollower