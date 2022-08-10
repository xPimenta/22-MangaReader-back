import { Router } from "express"
import mangaRouter from "./mangaRouter"
import postRouter from "./postRouter"

export const router = Router()

router.use(mangaRouter)
router.use(postRouter)


