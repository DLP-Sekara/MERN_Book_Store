/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import React, { useState,useEffect } from 'react';
import ResponsiveAppBar from '../../components/AppBar/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './AllProducts.css';
import BookCard from '../../components/BookCard/BookCard';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddBookModal from '../../components/AddBookModal/AddBookModal';
import { getAllBooksService } from '../../services/BookServices';
import { useDispatch ,useSelector} from 'react-redux';
import { saveBooksAction, setUpdates } from './AllProductsSlice';

const AllProducts = () => {
  const [open, setOpen] = useState(false);
  const books=useSelector((state:any)=>state.booksState.books);
  const updates=useSelector((state:any)=>state.booksState.updates);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () =>{ 
    setOpen(false);
    fetchData();
  };
  
  useEffect(()=>{
    fetchData();
  },[updates]);

  const fetchData = async () => {
    try{
      const response = await getAllBooksService();
      dispatch(saveBooksAction(response.data));
      dispatch(setUpdates(false));
      console.log('check code...');
    }catch(e){
      console.log(e);
    }
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>

        {/* header */}
        <Grid item xs={12}>
          <ResponsiveAppBar/>
        </Grid>

        {/* body */}
        <Grid container item xs={12}>

          <Grid item xs={2}>
            <div className='sidebar'>side bar</div>
          </Grid>

          <Grid item xs={10}>
            <div className='btnArea1'>
              <Button onClick={handleOpen}variant="outlined" startIcon={<AddIcon />}>
               Add Book
              </Button>
              <AddBookModal open={open} handleClose={handleClose}/>
            </div>
            <div className='content'>
              {
                books.map((book:any)=>(
                  <BookCard
                    key={book.bid}
                    // id={book._id}
                    // bookName={book.book_name}
                    // authorName={book.book_author}
                    // bookPrice={book.book_price}
                    data={book}
                  />
                ))
              }
            </div>
          </Grid>

        </Grid>

        {/* footer */}
        <Grid item xs={12}>
          <div className='footer'>footer</div>
        </Grid>

      </Grid>
    </Box>

  );
};

export default AllProducts;