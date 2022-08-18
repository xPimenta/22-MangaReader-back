import { mangaService } from "@services/mangaService"
import { Request, Response } from "express"

import { chapterRepository } from "@repositories/chapterRepository"

export const readController = {
  async getLatestChapters(req: Request, res: Response) {
    const latestChapters = await chapterRepository.getLatestChapters()
    res.send(latestChapters)
  },

  async readChapter(req: Request, res: Response) {
    res.send("controller read chapter")
    console.log("chapter")
    
    // const chapter = await chapterRepository.getChapterById(req.params.chapterId)

  }
}
