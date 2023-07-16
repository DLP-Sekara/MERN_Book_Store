import Order from '../models/order.model';
import { OrderModel } from '../utils/interface';

export const getAllOrderService=async():Promise<object | string>=>{
  try{
    const order=await Order.find();
    return order;
  }catch(error){
    return ('error :'+error);
  }
};

export const saveOrderService=async(data:OrderModel):Promise<object | string>=>{
  try{
    const dataObj=new Order(data);
    const saveResponse=await dataObj.save();
    return {message:'Order added successfully !',saveResponse};
  }catch(error){
    return ('error :'+error);
  }
};

export const searchOrderService=async(data:string):Promise<object | string>=>{
  try{
    const searchedOrder = await Order.find({customer_name:data});
    return searchedOrder;
  }catch(error) {
    return ('error :'+error);
  }
};