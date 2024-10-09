import { useAppSelector } from "../../app/hooks/useAppSelector";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchUsers } from "../../app/api/usersAPI";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log(users);

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-center">User Profile</h1>
      {users ? (
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
