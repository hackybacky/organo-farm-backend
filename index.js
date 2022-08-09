import express from "express"
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"
dotenv.config();
const connect =()=>{
  mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to Db")
  })
  .catch(err=> console.log(err))
}
app.use(cookieParser())
app.use(express.json());//to use json data from outside
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/auth",authRoutes);
app.use((err,req,res,next)=>{
  const status = err.status || 500 ;
  const message = err.message || "something went wrong !";
  return res.status(status).json({
    success:false,
    status,
    message,
  })
})
app.listen(8800,()=>{
  connect();
  console.log("connected")
})



