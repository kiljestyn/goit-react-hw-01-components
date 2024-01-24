import css from "./friendList.module.css";
import PropTypes from 'prop-types';

const FriendList = ({items}) => {
    const elements = items.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id} id={id}>
          <span className={isOnline ? css.online : css.miss}></span>
          <img className={css.img} src={avatar} alt={name} />
          <h2 className={css.name}>{name}</h2>
        </li>
      ));
      return <ul className={css.list}>{elements}</ul>;
}

export default FriendList;

FriendList.defaultProps = {
  items: [],
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};