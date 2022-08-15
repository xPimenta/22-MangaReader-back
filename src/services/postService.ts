import { uploadChapter } from "@utils/uploadCloudinary"
import { mangaRepository } from "../repositories/mangaRepository"

import { mangas } from "@prisma/client"


export const postService = {
  async uploadChapter(uploadInfo: any) {

    const UploadUrls = await uploadChapter(uploadInfo)

    // const CreateChapter = await mangaRepository.createChapter({
    //   mangaName: uploadInfo[0],
    //   chapterNumber: uploadInfo[1],
    //   chapterUrls: UploadUrls,
    // })

    console.log(UploadUrls)
    
  },

}
