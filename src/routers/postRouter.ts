import { postController } from "@controllers/postController"
import { Router } from "express"
import { multerConfig } from "../config/multer"
import multer from "multer"

const postRouter = Router()

postRouter.post('/upload', multer(multerConfig).single('file'), postController.upload)

export default postRouter
