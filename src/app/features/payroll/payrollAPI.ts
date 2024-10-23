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

interface IPayload {
  userId: string;
  userEmail: string;
  payrollEntries: {
    employeeName: string;
    position: string;
    salary: number;
    bonus: number;
    taxDeduction: number;
    month: string;
  }[];
}

export const getPayroll = async (userId: string) => {
  const response = await axiosPublic.get(`/payroll/${userId}`);
  return response.data;
};

export const createPayroll = async (data: IPayload) => {
  const response = await axiosPublic.post("/payroll", data);
  console.log(response);
  return response.data;
};

export const editPayroll = async (id: string, data: Payroll) => {
  const response = await axiosPublic.put(`/payroll/${id}`, data);
  console.log("API Response for update: ", response.data);
  return response.data;
};

export const deletePayroll = async (userId: string, payrollId: string) => {
  const response = await axiosPublic.delete(`/payroll/${userId}/${payrollId}`);
  console.log(response);
  return payrollId;
};
