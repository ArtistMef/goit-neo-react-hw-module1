import appCss from "./App.module.css";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div className={appCss.content}>
      <h1 className={appCss.header}>Task1 - Profile</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <h1 className={appCss.header}>Task2 - Friends list</h1>
      <FriendList friends={friends} />

      <h1 className={appCss.header}>Task3 - Transactions</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
