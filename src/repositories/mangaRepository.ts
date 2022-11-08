import { prisma } from "../config/database"

import { createMangaType } from "../services/mangaService"


export const mangaRepository = {

    async createManga (createMangaData: createMangaType) {
        
        const mangaInfo = await prisma.mangas.create({
            data: {
                name: createMangaData[0],
                description: createMangaData[1],
                coverUrl: "https://res.cloudinary.com/dlua7rfnv/image/upload/v1661138030/MANGA-COVER_fbx2to.jpg",
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
    },

    async getMangaById(mangaId: string) {
        const manga = await prisma.mangas.findFirst({
            where: {
                id: Number(mangaId),
            }
        })
    
        const chapters = await prisma.chapters.findMany({
            where: {
                mangaId: Number(mangaId),
            },
			take: 10,
        })
    
        let mangaInfo = [manga.name, chapters]
        console.log(mangaInfo)
        return mangaInfo
    },
    
    async getMostRead() {
        const mostRead = await prisma.mangas.findMany({
            orderBy: {
                // views: "desc"
                id: "desc"
            },
            take: 10,
        })
        return mostRead
    }
}
