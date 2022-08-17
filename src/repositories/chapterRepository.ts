import { prisma } from "../config/database"

import { createChapterType } from "../services/chapterService"

export const chapterRepository = {

async createChapter(chapter: createChapterType) {
    console.log(chapter)
        const chapterInfo = await prisma.chapters.create({
            data: {
                name: chapter.name,
                number: chapter.number,
                mangaId: chapter.mangaId,
                createdAt: new Date(),
            }
        })
        console.log(chapterInfo.id, "CHAPTER INFO ID")
        console.log(chapterInfo)
        return chapterInfo.id
},
async getChapterByNumber(number: string) {
    const exists = await prisma.chapters.findFirst({
        where: {
            number: number
        }
    })
    if (!exists) return null
    return exists
}
}