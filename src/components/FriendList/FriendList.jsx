import css from "./friendList.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "components/FriendItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
          {friends.map((friend) => (
              <FriendListItem key={friend.id} {...friend} />
          ))}
         </ul>
  )
}

FriendList.propTypes = {
friends: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })
).isRequired,
};
export default FriendList;