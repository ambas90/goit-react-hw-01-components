import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/FriendListItem.js';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
};

FriendList.poppTypes = {
  friends: PropTypes.object.isRequired,
};

export default FriendList;
