import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      <h2>Welcome {user.username}</h2>
    </div>
  );
};

export default Profile;
