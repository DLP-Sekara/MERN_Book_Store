import mongoose from 'mongoose';
const customerSchema=new mongoose.Schema({
  cid:{
    type:Number,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
}
);
const Customer=mongoose.model('Customer',customerSchema);
export default Customer;