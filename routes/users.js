import express from "express"
import { deleteUser, getUser, update,subscribe, unsubscribe } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//update user

router.put("/:id",verifyToken , update);
router.delete("/:id",verifyToken , deleteUser);
router.get("/find/:id", getUser);
router.put("/sub/:id",verifyToken , subscribe);
router.put("/unsub/:id",verifyToken , unsubscribe);
export default router;