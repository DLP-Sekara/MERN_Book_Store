import * as React from 'react';
import ResponsiveAppBar from '../../components/AppBar/AppBar';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import dashboard from '../../assets/images/dashboard.jpg';
import BookCard from '../../components/BookCard/BookCard';
import { getAllBooksService } from '../../services/BookServices';
import { saveBooksAction } from '../AllProducts/AllProductsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const books=useSelector((state:any)=>state.booksState.books);
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.signIn.user);
  
  React.useEffect(() => {
    if (user === false) {
      navigate('/');
    }
  });
  React.useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try{
      const response = await getAllBooksService();
      dispatch(saveBooksAction(response.data));
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

          {/* view one */}
          <Grid item xs={12} >
            <img src={dashboard} style={{width:'100%',height:'100%'}} alt="" />
            <div style={{
              position: 'absolute',
              top: '45%', 
              left: '25%', 
              transform: 'translate(-50%, -50%)', 
              fontSize: '24px', 
              fontWeight: 'bold',  
            }}>
              <Typography variant="h3" sx={{textAlign: 'left',color:'red',fontWeight:'bold',fontFamily:'initial'}}>Get 65% Off For All <br/>Design Books</Typography>
              <br/>
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
        Quos blanditiis tenetur unde suscipit, quam beatae rerum<br/> 
        inventore consectetur,neque doloribus, cupiditate numquam<br/> 
        dignissimos laborum fugiat deleniti? 
                <br/>
                <br/>
                <button style={{
                  width:'20%',
                  height:'20%',
                  fontSize:'18px',
                  backgroundColor:'red',
                  border:'1px solid red',
                  color:'white',
                  cursor:'pointer'
                }}>Shop Now</button>
              </Typography>
             
            </div>
          </Grid>

          {/* view two */}
          <Grid xs={12}>
            <div className="books">{ 

              books.map((book:any)=>(
                <BookCard
                  key={book.bid}
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

export default Dashboard;