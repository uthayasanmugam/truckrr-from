import mongoose from "mongoose";
const Image = mongoose.model('Image', new mongoose.Schema({

 image:{
    type:Object,
  }
  }));
export default Image;