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
    const dataObj=new Book();
    //auto increment cid
    const highestBid = await Book.findOne().sort('-bid').select('bid').lean();
    const newBid = highestBid ? highestBid.bid + 1 : 1;

    dataObj.bid=newBid;
    dataObj.book_name=data.bookName;
    dataObj.book_author=data.bookAuthor;
    dataObj.book_qty=data.bookQty;
    dataObj.book_price=data.bookPrice;
    dataObj.book_type=data.bookType;
    dataObj.book_image='img one';

    console.log(dataObj);
    const saveResponse=await dataObj.save();
    return {message:'Book added successfully !',saveResponse};
  }catch(error){
    return ('error :'+error);
  }
};

export const updateBookService=async(data:BookModel):Promise<object | string>=>{
  try{
    // const dataObj:BookModel={
    //   bid = data.bid,
    //   book_name = data.bookName,
    //   book_author = data.bookAuthor,
    //   book_qty = data.bookQty,
    //   book_price = data.bookPrice,
    //   book_type = data.bookType,
    //   book_image = 'img one',
    //   _id: new ObjectId,
    //   bookName: '',
    //   bookAuthor: '',
    //   bookQty: 0,
    //   bookPrice: 0,
    //   bookType: ''
    // };
    console.log(data);
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