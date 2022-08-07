import express from "express"
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"
dotenv.config();
const connect =()=>{
  mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to Db")
  })
  .catch(err=> console.log(err))
}
app.use(express.json());//to use json data from outside
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/auth",authRoutes)
app.listen(8800,()=>{
  connect();
  console.log("connected")
})



// mongo_url=mongodb+srv://hareesh:K4GtncXoqngIQyC1@cluster0.fkf3f.mongodb.net/social-app?retryWrites=true&w=majority