import { readController } from "@controllers/readController"
import { Router } from "express"

const readRouter = Router()

// readRouter.get("/mangas", readController.findAll)
// readRouter.get("/mangas/:mangaKey", readController.findByKey)
// readRouter.get("/ler/:mangaChapter", readController.findAll)

export default readRouter
