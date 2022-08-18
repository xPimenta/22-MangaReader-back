import { readController } from "@controllers/readController"
import { Router } from "express"

const readRouter = Router()

readRouter.get("/latestChapters", readController.getLatestChapters)
readRouter.get("/getChapter/:chapterId", readController.readChapter)
// readRouter.get("/mangas/:mangaKey", readController.findByKey)
// readRouter.get("/ler/:mangaChapter", readController.findAll)

export default readRouter
