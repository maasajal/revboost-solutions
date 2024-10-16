import { axiosSecure } from "../../hooks/useAxiosSecure";

export const getExpenses = async (userId: string) => {
  const response = await axiosSecure.get(`/expenses/${userId}`);
  return response.data;
};
