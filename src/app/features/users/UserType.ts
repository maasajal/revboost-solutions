// Define the User interface
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
export default User;
