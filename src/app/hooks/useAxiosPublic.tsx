import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export { axiosPublic };
export default useAxiosPublic;
