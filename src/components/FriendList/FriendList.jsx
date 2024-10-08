import FriendListItem from "./FriendListItem";
import FriendsListCss from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={FriendsListCss.listCards}>
      {friends.map((friend) => (
        <li className={FriendsListCss.listItem} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
