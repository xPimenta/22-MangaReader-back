import { postService } from "@services/postService"
import { Request, Response } from "express"

import { mangaRepository } from "@repositories/mangaRepository"
import { mangaService } from "@services/mangaService"


export const postController = {
  async uploadChapter(req:Request, res:Response){

    const MangaExists = await mangaRepository.getMangaByName(req.body[0])

    if(!MangaExists) {
      const CreateManga = await mangaService.createManga(req.body[0])
    }

    const chapterUrls = await postService.uploadChapter(req.body)
    
  // return res.status(201).send({chapterId});
  }

}