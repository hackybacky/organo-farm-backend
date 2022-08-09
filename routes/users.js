import express from "express"
import { deleteUser, getUser, update,subscribe } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//update user

router.put("/:id",verifyToken , update);
router.delete("/:id",verifyToken , deleteUser);
router.get("/find/:id", getUser);
router.put("/sub/:id",verifyToken , subscribe);
export default router;