import axios from 'axios';
import {  OrderModel } from '../utils/interface'; 
const baseUrl = 'http://localhost:8000/order';

export const insertOrderService = async (order: OrderModel) => {
  const res = await axios.post(baseUrl, order);
  return res;
};