export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const NEED_VERIFICATION = "NEED_VERIFICATION";
export const SET_SUCCESS = "SET_SUCCESS";

export interface User {
  id: string | null;
  companyName: string | null;
  email: string | null;
  name: string | null;
  photo: string | null;
  subscriptionStatus?: string;
  selectedPackage?: string;
  createdAt: number | boolean;
}
