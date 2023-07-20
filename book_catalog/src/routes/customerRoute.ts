import express from 'express';
import { loginCustomer, logout, refresh, saveCustomer, userDetail } from '../controllers/customerController';
const route=express.Router();
route.post('/register', saveCustomer);
route.get('/login', loginCustomer);
route.get('/logout', logout);
route.post('/refresh', refresh);
route.get('/userDetail', userDetail);
export default route;