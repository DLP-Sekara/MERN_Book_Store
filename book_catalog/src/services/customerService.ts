import Customer from '../models/customer.model';
import { CustomerModel } from '../utils/interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../utils/config';

export const saveCustomerService=async(data:CustomerModel):Promise<CustomerModel>=>{
  try{
    console.log(data);
    const dataObj=new Customer();
    dataObj._id=data._id;
    dataObj.cid=data.cid;
    dataObj.name=data.name;
    const tempPassword = data.password;
    const hash = await bcrypt.hash(tempPassword, 10);
    console.log(hash);
    dataObj.password=hash;

    const saveResponse=await dataObj.save();
    return saveResponse;
  }catch(error){
    return null;
  }
};
export const getCustomer = async (data: CustomerModel):Promise<CustomerModel> => {
  try {
    console.log(data);
    const findCustomer = await Customer.findOne({ name: data.name });
    if (findCustomer) {
      const isValid = await bcrypt.compare(data.password, findCustomer.password);
      if (isValid) {
        return findCustomer;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}; 
export const refreshService = async (refreshToken: string) => {
  try {
    const verifyRefToken = jwt.verify(refreshToken, config.jwt_secretRe_key);
    if (!verifyRefToken) {
      console.log('Unauthorized');
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const tempName = verifyRefToken.name;
      const findCustomer = await Customer.findOne({ name: tempName });
      if (findCustomer) {
        return findCustomer;
      }
    }
  } catch (err) {
    console.log('Get New Access Token Eroor ', err);
    return { err: 'Cannot Get New Access Token' };
  }
};