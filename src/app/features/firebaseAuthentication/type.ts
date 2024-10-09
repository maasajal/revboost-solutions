export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const NEED_VERIFICATION = "NEED_VERIFICATION";
export const SET_SUCCESS = "SET_SUCCESS";

export interface User {
  _id: string;
  name: string;
  email: string;
  photo: string;
  mobile: string;
  role: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  features: string[];
}
