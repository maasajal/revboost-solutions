export const   SET_USER = "SET_USER";
export const   SIGN_OUT = "SIGN_OUT";
export const   SET_LOADING = "SET_LOADING";
export const   SET_ERROR = "SET_ERROR";
export const   NEED_VERIFICATION = "NEED_VERIFICATION";
export const   SET_SUCCESS = "SET_SUCCESS";


export interface User {
    firstName:string;
    email:string;
    id:string;
    createdAt:number | boolean ;
}