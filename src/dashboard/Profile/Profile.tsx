import { RootState } from "../../app/store/store";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchUsers } from "../../app/api/usersAPI";
import { getCurrentUser } from "../../app/api/currentUserAPI";
// import User from "../../app/features/users/UserType";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: RootState) => state.currentUser.user);
  const allUsers = useAppSelector((state: RootState) => state.users.users);
  const loading = useAppSelector((state: RootState) => state.users.loading);
  const error = useAppSelector((state: RootState) => state.users.error);

  const { _id, name, email, role, subscriptionPlan, subscriptionStatus } = user;

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch all users
    dispatch(getCurrentUser()); // Fetch all users
  }, [dispatch]);
  return (
    <div className="container mx-auto px-5 space-y-5">
      <h1 className="text-center">User Profile</h1>
      <div>
        {user && (
          <div className="space-y-5">
            <p>
              <strong>UserID:</strong> {_id}
            </p>
            <h3>
              <strong>Name:</strong> {name}
            </h3>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Role:</strong> {role}
            </p>
            <p>
              <strong>Subscription Plan:</strong> {subscriptionPlan}
            </p>
            <p>
              <strong>Subscription Status:</strong> {subscriptionStatus}
            </p>
          </div>
        )}
      </div>
      <h2>All Users:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {allUsers.map((u) => (
          <li key={u._id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
