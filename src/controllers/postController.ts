import { Request, Response } from "express"

import { mangaRepository } from "@repositories/mangaRepository"
import { mangaService } from "@services/mangaService"
import { chapterRepository } from "@repositories/chapterRepository"
import { chapterService } from "@services/chapterService"

import { createChapterType } from "@services/chapterService"

export const postController = {
  async uploadChapter(req:Request, res:Response) {
    let mangaData:createChapterType = {name: "", number: "", mangaId: 0}

    const MangaExists = await mangaRepository.getMangaByName(req.body[0])
    if(!MangaExists) {
      const CreateManga = await mangaService.createManga(req.body)
      
    mangaData = {
      name: req.body[0],
      number: req.body[1],
      mangaId: CreateManga,
    }

    console.log(mangaData)
    }


    const ChapterExists = await chapterRepository.getChapterByNumber(req.body[1])
    if(!ChapterExists) {
      const chapterUrls = await chapterService.uploadChapter(req.body)
      const CreateChapter = await chapterService.createChapter(mangaData)
    }
}
}

