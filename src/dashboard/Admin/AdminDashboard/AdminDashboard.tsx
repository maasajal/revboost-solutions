import { Helmet } from "react-helmet";
import AllUsersList from "./AllUsersList";

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin Dashboard - RevBoost Solutions</title>
      </Helmet>
      <AllUsersList />
    </div>
  );
};

export default AdminDashboard;
