import express from "express"
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js";
dotenv.config();
const connect =()=>{
  mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to Db")
  })
  .catch(err=> console.log(err))
}
app.use("/api/users",userRoutes);
app.listen(8800,()=>{
  connect();
  console.log("connected")
})



// mongo_url=mongodb+srv://hareesh:K4GtncXoqngIQyC1@cluster0.fkf3f.mongodb.net/social-app?retryWrites=true&w=majority