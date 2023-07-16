import Book from '../models/book.model';
import { BookModel } from '../utils/interface';

export const getAllBookService=async():Promise<object | string>=>{
  try{
    const book=await Book.find();
    return book;
  }catch(error){
    return ('error :'+error);
  }
};

export const saveBookService=async(data:BookModel):Promise<object | string>=>{
  try{
    const dataObj=new Book(data);
    const saveResponse=await dataObj.save();
    return {message:'Book added successfully !',saveResponse};
  }catch(error){
    return ('error :'+error);
  }
};

export const updateBookService=async(data:BookModel):Promise<object | string>=>{
  try{
    const { _id, ...updateData } = data;
    const updateResponse=await Book.findOneAndUpdate({_id},updateData);
    return {message:'Book Update successfuly !',updateResponse};
  }catch(error){
    return ('error :'+error);
  }
};

export const searchBookService=async(data:string):Promise<object | string>=>{
  try{
    const searchedBook = await Book.find({book_name:data});
    return searchedBook;
  }catch(error) {
    return ('error :'+error);
  }
};

export const deleteBookService=async(data:string):Promise<object | string>=>{
  try{
    const deleteResponse=await Book.findByIdAndDelete(data);
    return {message:'Book Deleted successfuly !',deleteResponse};
  }catch(error) {
    return ('error :'+error);
  }
};