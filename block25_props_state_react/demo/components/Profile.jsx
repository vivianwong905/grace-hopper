// Profile Component

// props = {user: {name, imageUrl}}

import Avatar from "./Avatar";

const Profile = ({ user }) => {
  // h2 with the name
  // image with the user's image url
  return (
    <div>
      <h2>{user.name}</h2>
      <Avatar userName={user.name} imageUrl={user.imageUrl} size={200} />
      {/* <img
                alt={`Avatar of ${user.name}`}
                className="avatar"
                src={user.imageUrl}
                width={200}
                height={200}
            /> */}
    </div>
  );
};

export default Profile;
