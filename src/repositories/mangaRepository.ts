import { prisma } from "../config/database"

import { createMangaType } from "../services/mangaService"


export const mangaRepository = {

    async createManga (createMangaData: createMangaType) {
        
        const mangaInfo = await prisma.mangas.create({
            data: {
                name: createMangaData[0],
                description: createMangaData[1],
                coverUrl: "coverUrl",
                isFinished: false,
                createdAt: new Date(),
                views: 0,
            }
        })
        return mangaInfo.id
        console.log(mangaInfo.id, "Manga Info ID")
    },

    async getAllMangas() {
        return await prisma.chapters.findMany()
    },

    async getMangaByName(name: string) {
        const exists = await prisma.mangas.findFirst({
            where: {
                name: name
            }
        })
        if (!exists) return null
        return exists
    }
}
