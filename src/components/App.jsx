import Profile from './profile/Profile.js';
import user from './User.json';
import Statistics from './statistics/Statistics.js';
import data from './data.json';
import FriendList from './friendList/FriendList.js';
import friends from './friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
