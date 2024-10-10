import { useSelector } from "react-redux"; // Import the root state from your store
import { RootState } from "../../app/store/store";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-center">User Profile</h1>
      {user ? (
        <div>
          <p>Name: Company Name</p>
          <p>Email: Company email</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Profile;
