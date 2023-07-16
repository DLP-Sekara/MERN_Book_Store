import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const orderSchema=new mongoose.Schema({
  oid:{
    type:Number,
    required:true
  },
  customer_name:{
    type:String,
    required:true
  },
  itemList: [itemSchema],
  orderDate: {
    type: Date,
    required:true,
    default: Date.now,
  },
}
);
module.exports=mongoose.model('Order',orderSchema);