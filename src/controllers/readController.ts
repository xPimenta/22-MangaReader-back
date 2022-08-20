import { mangaService } from "@services/mangaService"
import { Request, Response } from "express"

import { chapterRepository } from "@repositories/chapterRepository"

export const readController = {
  async getLatestChapters(req: Request, res: Response) {
    const latestChapters = await chapterRepository.getLatestChapters()
    res.send(latestChapters)
  },

  async readChapter(req: Request, res: Response) {
    const chapterId = req.params.chapterId
    const readChapter = await chapterRepository.getChapterById(chapterId)
    res.send(readChapter)
  },

  async getMangaByName(req: Request, res: Response) {
    const mangaName = req.params.mangaName
    const manga = await mangaService.getMangaByName(mangaName)
    res.send(manga)
  },

  async getMangaById(req: Request, res: Response) {
    const mangaId = req.params.mangaId
    const manga = await chapterRepository.getMangaById(mangaId)
    res.send(manga)
  },

  async getMostRead(req: Request, res: Response) {
    const mostRead = await chapterRepository.getMostRead()
    res.send(mostRead)
  }  
}
