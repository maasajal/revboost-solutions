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
  console.log(response);
  return response.data;
};

export const editPayroll = async (id: string, data: Payroll) => {
  const response = await axiosPublic.put(`/payroll/${id}`, data);
  console.log("API Response for update: ", response.data);
  return response.data;
};

export const deletePayroll = async (id: string) => {
  const response = await axiosPublic.delete(`/payroll/${id}`);
  console.log(response);
  return id;
};
