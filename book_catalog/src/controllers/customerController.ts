import { getCustomer, getUserDetails, refreshService, saveCustomerService } from '../services/customerService';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config }from '../utils/config';
/* eslint-disable @typescript-eslint/no-explicit-any */

export const saveCustomer=async(req:Request,res:Response):Promise<any>=>{
  try{
    const customer=await saveCustomerService(req.body);
    if(customer!=null){
      const dataStoredInToken ={
        email:customer.email,
        userRoll:customer.userRoll,

      };
      const newAccessToken = jwt.sign(
        dataStoredInToken,
        config.jwt_secret_key,
        {
          expiresIn: 60 * 60,
        }
      );

      const newRefreshToken = jwt.sign(
        dataStoredInToken,
        config.jwt_secretRe_key,
        {
          expiresIn: 60 * 60 * 24 * 1000,
        }
      );
      res.cookie('accessToken', newAccessToken, {
        maxAge: 60 * 60,
        httpOnly: true,
      });
      res.cookie('refreshToken', newRefreshToken, {
        maxAge: 60 * 60 * 24 * 1000,
        httpOnly: true,
      });
    }
    customer !== null ? res.json(true) : res.json(false);
  }catch(error){
    res.status(400);
  }
};

export const loginCustomer = async (req: Request, res: Response) => {
  try {
    const response = await getCustomer(req.body);
    console.log(response);
    if (response) {
 
      const dataStoredInToken = {
        email:response.email,
        userRoll:response.userRoll,
      };

      const newAccessToken= jwt.sign(dataStoredInToken, config.jwt_secret_key, {
        expiresIn: 60 * 60,
      });

      const newRefreshToken= jwt.sign(dataStoredInToken,config.jwt_secretRe_key,{
        expiresIn: 60 * 60 * 24 * 1000,
      }
      );

      res.cookie('accessToken', newAccessToken, {
        maxAge: 60 * 60,
        httpOnly: true,
      });
      res.cookie('refreshToken', newRefreshToken, {
        maxAge: 60 * 60 * 24 * 1000,
        httpOnly: true,
      });
    }
    
    response !== null ? res.json(true) : res.json(false);
  } catch (err) {
    res.status(201);
  }
};

export const refresh = async (req: Request, res: Response) => {
  try {
    const secret = config.jwt_secret_key;
    const refToken = req.cookies.refreshToken;
    
    const userToken:any = await refreshService(refToken);
    const dataStoredInToken = {
      email:userToken.email,
      userRoll:userToken.userRoll,
    };

    const newAccessToken = jwt.sign(dataStoredInToken, secret, {
      expiresIn: 60 * 60,
    });
   
    res.cookie('accessToken', newAccessToken, {
      maxAge: 60 * 60,
      httpOnly: true,
    });
    res.send(true);
    
  } catch (err) {
    res.status(401);
  }
};

export const userDetail = async (req: Request, res: Response) => {
  
  try {
    const userAccToken = req.cookies.accessToken;
    const response = await getUserDetails(userAccToken);
    if (response) {
      res.cookie('userData', response.userData, {
        maxAge: 60 * 60 * 24 * 1000,
      });
      //res.send(response);
      res.sendStatus(200);
      //res.send(true);
    } else {
      res.status(550);
    }
    // res.send(false);
  } catch (err) {
    res.status(400);
  }
};

export const logout = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    res.cookie('accessToken', '', {
      maxAge: -1,
      httpOnly: true,
    });
    res.cookie('refreshToken', '', {
      maxAge: -1,
      httpOnly: true,
    });
    res.cookie('userData', '', {
      maxAge: -1,
      httpOnly: true,
    }); 
    res.status(200).json({
      message: 'Successfully logged out',
    });
  } catch (err) {
    res.send('Error' + err);
  }
};