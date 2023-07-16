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
module.exports=mongoose.model('Customer',customerSchema);