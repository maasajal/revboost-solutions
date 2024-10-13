import { axiosPublic } from "../../hooks/useAxiosPublic";

interface Payroll {
  _id: string;
  employeeName: string;
  position: string;
  salary: number;
  bonus: number;
  taxDeduction: number;
  month: string;
  __v: number;
}

export const getPayroll = async () => {
  const response = await axiosPublic.get("/payroll");
  return response.data;
};

export const createPayroll = async (data: Payroll) => {
  const response = await axiosPublic.post("/payroll", data);
  return response.data;
};
