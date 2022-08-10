import express from "express"
import { deleteUser, getUser, update,subscribe, unsubscribe ,like ,dislike } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//update user

router.put("/:id",verifyToken , update);
router.delete("/:id",verifyToken , deleteUser);
router.get("/find/:id", getUser);
router.put("/sub/:id",verifyToken , subscribe);
router.put("/unsub/:id",verifyToken , unsubscribe);
//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);
export default router;