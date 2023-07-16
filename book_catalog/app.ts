import express from 'express';
import mongoose from 'mongoose';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import bookRoute from './src/routes/bookRoute';
import orderRoute from './src/routes/orderRoute';
import userRoute from './src/routes/userRoute';

dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

//routes
app.use('/book',bookRoute);
app.use('/user',userRoute);
app.use('/book',orderRoute);

//mongoDb connection 
const url='mongodb://localhost/all_books';
mongoose.connect(url);
const con=mongoose.connection;
con.on('error', console.error.bind(console, 'MongoDB connection error:'));
con.once('open', () => {
  console.log('MongoDB connected successfully');
});

app.get('/',(req,res)=>{
  console.log('get request has come');
  res.send('hello mongo');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
