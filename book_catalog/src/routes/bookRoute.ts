import express from 'express';
import { deleteBook, fetchBook, getAllBook, saveBook, searchBook, updateBook } from '../controllers/bookController';
const route=express.Router();

route.get('/',getAllBook);
route.get('/:book_name',searchBook);
route.get('/details/:bid',fetchBook);
route.post('/',saveBook);
route.put('/',updateBook);
route.delete('/:id',deleteBook);
export default route;