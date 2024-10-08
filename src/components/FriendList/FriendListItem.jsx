import clsx from "clsx";
import friendListItemCss from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div className={friendListItemCss.card}>
      <img
        className={friendListItemCss.avatar}
        src={friend.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={friendListItemCss.name}>{friend.name}</p>
      <p
        className={clsx(
          friendListItemCss.status,
          friend.isOnline
            ? friendListItemCss.isOnline
            : friendListItemCss.isOffline
        )}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
