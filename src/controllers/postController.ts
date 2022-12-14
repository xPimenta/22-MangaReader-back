import { Request, Response } from "express"

import { mangaRepository } from "@repositories/mangaRepository"
import { mangaService } from "@services/mangaService"
import { chapterRepository } from "@repositories/chapterRepository"
import { chapterService } from "@services/chapterService"

import { createChapterType } from "@services/chapterService"

export const postController = {
  async uploadChapter(req:Request, res:Response) {
    let mangaData:createChapterType = {name: "", number: "", mangaId: 0, coverUrl: ""}

    const MangaExists = await mangaRepository.getMangaByName(req.body[0])
    console.log(MangaExists)

    if (MangaExists) {
      mangaData = {
        name: req.body[0],
        number: req.body[1],
        mangaId: MangaExists.id,
        coverUrl: "",
      }
      console.log(mangaData, "MANGA DATA")
    }
   
    if(!MangaExists) {
      const CreateManga = await mangaService.createManga(req.body)
      mangaData = {
        name: req.body[0],
        number: req.body[1],
        mangaId: CreateManga,
        coverUrl: "",
      }
    console.log(mangaData, "MANGA DATA create")
    }

    const ChapterExists = await chapterRepository.getChapterByNumberAndManga(req.body[1], mangaData.mangaId)
    console.log(ChapterExists, "CHAPTER EXISTS")

    if(!ChapterExists) {
      const chapterUrls = await chapterService.uploadChapter(req.body) // return URLs
      const createChapter = await chapterService.createChapter(mangaData) // return chapter id
      const createChapterImages = await chapterService.createChapterImages(chapterUrls, createChapter) // return chapter id
    }

    res.send("ok")
}
}

