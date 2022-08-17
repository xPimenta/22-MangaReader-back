import { uploadChapter } from "@utils/uploadCloudinary"
import { chapterRepository } from "@repositories/chapterRepository"
import { chapters } from "@prisma/client"

export type chapterTemplate = Omit<chapters, "id" | "createdAt" | "mangas" | "images">

export type createChapterType = chapterTemplate 

export const chapterService = {
  async uploadChapter(uploadInfo: any) {
    const UploadUrls = await uploadChapter(uploadInfo)
    return UploadUrls
  },
  
  async createChapter(chapterData: createChapterType) {
    const chapterInfo = await chapterRepository.createChapter(chapterData)
    return chapterInfo
  }
}
