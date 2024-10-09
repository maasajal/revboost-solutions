import { ReactNode, useEffect, useState } from "react";
import useAxiosSecure from "../useHook/useAxiosSecure";

interface AdminRoutProps {
  children: ReactNode;
}

const AdminRout = ({ children }: AdminRoutProps) => { 
  const axiosSecure = useAxiosSecure();
  const [isAdmin, setIsAdmin] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    axiosSecure
      .get("/api/v1/login/admin", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      })
      .then((res) => {
        setIsAdmin(res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching admin status:", error);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (isAdmin === "admin") {
    return <>{children}</>; 
  }

  return <div>Access Denied</div>; 
};

export default AdminRout;
