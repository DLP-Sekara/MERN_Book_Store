import express from 'express';
import { deleteBook, getAllBook, saveBook, searchBook, updateBook } from '../controllers/bookController';
const route=express.Router();
route.get('/',getAllBook);
route.get('/:book_name',searchBook);
route.post('/',saveBook);
route.put('/',updateBook);
route.delete('/:id',deleteBook);
export default route;