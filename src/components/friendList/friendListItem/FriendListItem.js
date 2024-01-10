import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.poppTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default FriendListItem;
