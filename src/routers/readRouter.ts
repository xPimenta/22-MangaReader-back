import { readController } from "@controllers/readController"
import { Router } from "express"

const readRouter = Router()

readRouter.get("/latestChapters", readController.getLatestChapters)
readRouter.get("/chapter/:chapterId", readController.readChapter)
readRouter.get("/getMostRead", readController.getMostRead)
readRouter.get("/manga/:mangaId", readController.getMangaById)
// readRouter.get("/ler/:mangaChapter", readController.findAll)

export default readRouter
