import axios from 'axios';
import { LoginDetails } from '../utils/interface';
const baseUrl = 'http://localhost:8000/customer';

export const insertCustomerService = async (user: LoginDetails) => {
  const res = await axios.post(baseUrl + '/register', user, {
    withCredentials: true,
  });
  return res;
};