import mongoose from mongoose


const VideoSchema = new mongoose.Schema({
  

},{timestamps:true});


export default mongoose.model("Video",VideoSchema);