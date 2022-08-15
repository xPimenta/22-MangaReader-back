import cloudinary from "../utils/cloudinary"
import { Router } from "express"
import { postController } from "@controllers/postController";

const postRouter = Router()

postRouter.post('/api/upload', postController.uploadChapter)

export default postRouter;


