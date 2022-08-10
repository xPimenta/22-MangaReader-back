import { mangaController } from "@controllers/mangaController"
import { Router } from "express"

const mangaRouter = Router()

mangaRouter.get("/mangas", mangaController.findAll)
mangaRouter.get("/mangas/:mangaKey", mangaController.findByKey)
mangaRouter.get("/ler/:mangaChapter", mangaController.findAll)

export default mangaRouter
