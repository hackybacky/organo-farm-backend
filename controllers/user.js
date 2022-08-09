import { createError } from "../Error.js";
import User from "../models/User.js";

//update user account
export const update = async(req,res,next)=>{


  if(req.params.id===req.user.id){
    try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set:req.body
      },{new:true})
      res.status(200).json(updatedUser)
    }catch(err){
      next(err);
    }
  }
  else{
    return  next(createError(403,"You can update only your account"));
  }


  
}

// delete user account

export const deleteUser = async(req,res,next)=>{
  
  if(req.params.id===req.user.id){
    try{
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted Successfully")
    }catch(err){
      next(err);
    }
  }
  else{
    return  next(createError(403,"You can delete only your account"));
  } 
}

//get a User 


export const getUser =async(req,res,next)=>{
  try{
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  }catch(err){
    next(err);
  }
}


//subscibe

export const subscribe = async (req,res,next)=>{
  try{
    await User.findByIdAndUpdate(req.user.id,{
      $push:{subscribedUsers: req.params.id}
    });
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subscribers:1 }
    })
    res.status(200).json("subscribed successfully");
  }catch(err){
    next(err);
  }
}

//unsubscribe

export const unsubscribe = async (req,res,next)=>{
  try{
    await User.findByIdAndUpdate(req.user.id,{
      $pull:{subscribedUsers: req.params.id}
    });
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subscribers:-1 }
    })
    res.status(200).json("unsubscribed successfully");
  }catch(err){
    next(err);
  }
}