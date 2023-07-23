import * as React from 'react';
import ResponsiveAppBar from '../../components/AppBar/AppBar';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './AllProducts.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'red',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

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
            <div className='content'>
              content
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              <li>list $</li>
              
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