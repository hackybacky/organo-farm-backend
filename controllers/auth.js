import mongoose from "mongoose";
import User from "../models/User.js";
export const signup = async (req, res) => {
  try {
    const newUser = await new User(req.body);
    newUser.save();
    console.log(newUser);
  } catch (err) {
    console.log(err);
  }
};
