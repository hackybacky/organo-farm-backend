import express from "express"
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();
router.post('/',verifyToken,addVideo)
router.put('/:id',verifyToken,updateVideo);
router.post('/:id',verifyToken,deleteVideo)
router.get('/:id',getVideo)
export default router;