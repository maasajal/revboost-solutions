import { axiosPublic } from "../../hooks/useAxiosPublic";

export const getPayroll = async () => {
  const response = await axiosPublic.get("/payroll");
  return response.data;
};
