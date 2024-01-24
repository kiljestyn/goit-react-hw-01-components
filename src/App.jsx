import user from "./data/user.json";
import Profile from "components/Profile/Profile";
import data from "./data/data.json";
import Statistics from "components/Statistics/Statistics";
import friends from "./data/friends.json";
import FriendList from "components/FriendList/FriendList";
import transaction from "./data/transaction.json";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <main>
      <Profile items={user} />
      <Statistics title="UPLOAD STATS" items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transaction} />
    </main>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
