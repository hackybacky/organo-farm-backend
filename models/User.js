import mongoose  from "mongoose";


const UserSChema = new mongoose.Schema({

  name :{
    type:String,
    required:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String ,
    required:true,
  },
  subscribers:{
    type:number,
    default :0,
  },
  subscribedUsers:{
    type:[String],
  },


},{timestamps:true});

export default mongoose.model("User",UserSChema);