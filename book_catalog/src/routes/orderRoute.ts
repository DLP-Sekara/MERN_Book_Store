import express from 'express';
import { getAllOrder, saveOrder, searchOrder } from '../controllers/orderController';
const route=express.Router();
route.get('/',getAllOrder);
route.get('/:customer_name',searchOrder);
route.post('/',saveOrder);
export default route;