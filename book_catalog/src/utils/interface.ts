import { Types } from 'mongoose';

export interface BookModel{
    _id:Types.ObjectId;
    bid:number;
    book_name:string;
    book_author:string;
    book_type:string;
    book_qty:number;
    book_price:number;
    book_image:Buffer;
}

export interface OrderModel{
    _id:Types.ObjectId;
    oid:number;
    customer_name:string;
    itemList:object;
    orderDate:Date
}

export interface CustomerModel{
    _id:Types.ObjectId;
    cid:number;
    email:string
    name:string;
    password:string;
    userRoll:string;
}