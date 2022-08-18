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
        return chapterInfo.id
},
async getChapterByNumberAndManga(number: string, mangaId: number) {
    const exists = await prisma.chapters.findFirst({
        where: {
            number: number,
            mangaId: mangaId
        }
    })
    if (!exists) return null
    return "exists"
},

async createChapterImages(chapterUrls: string[], chapterId: number) {
    const chapterImages = await prisma.images.createMany({
        data: chapterUrls.map((url: string) => {
            return {
                url: url,
                order: chapterUrls.indexOf(url),
                chapterId: chapterId,
                createdAt: new Date(),
            }
        }),
    })
    return chapterImages
},

async getLatestChapters() {
    const latestChapters = await prisma.chapters.findMany({
        orderBy: {
            id: "desc"
        },
        take: 10,
    })
    return latestChapters
},

async getChapterById(chapterId: string) {
    const chapter = await prisma.chapters.findFirst({
        where: {
            id: Number(chapterId),
        }
    })
    console.log(chapter, "chapter")
    return chapter
}
}