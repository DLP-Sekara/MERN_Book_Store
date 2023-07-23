import * as React from 'react';
import ResponsiveAppBar from '../../components/AppBar/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './AllProducts.css';
import BookCard from '../../components/BookCard/BookCard';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AllProducts = () => {
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
              <Button variant="outlined" startIcon={<AddIcon />}>
               Add Book
              </Button>
            </div>
            <div className='content'>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
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