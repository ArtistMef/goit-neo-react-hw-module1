import profileCss from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={profileCss.profile}>
      <div className={profileCss.content}>
        <img src={image} alt="User avatar" className={profileCss.avatar} />
        <p className={profileCss.name}>{name}</p>
        <p className={profileCss.tag}>@{tag}</p>
        <p className={profileCss.location}>{location}</p>
      </div>

      <ul className={profileCss.statsList}>
        <li className={profileCss.stats}>
          <span className={profileCss.label}>Followers</span>
          <span className={profileCss.quantity}>{stats.followers}</span>
        </li>
        <li className={profileCss.stats}>
          <span className={profileCss.label}>Views</span>
          <span className={profileCss.quantity}>{stats.views}</span>
        </li>
        <li className={profileCss.stats}>
          <span className={profileCss.label}>Likes</span>
          <span className={profileCss.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
