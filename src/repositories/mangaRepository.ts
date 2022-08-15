import { prisma } from "../config/database"
import { chapters } from "@prisma/client"
import { mangas } from "@prisma/client"

import { createManga } from "../services/mangaService"


export const mangaRepository = {

    async createManga (name: createManga ) {
        const mangaInfo = await prisma.mangas.create({
            data: {
                name: "string",
            }
        })
    },

    async getAllMangas() {
        return await prisma.chapters.findMany()
    },

    async getMangaByName(name: string) {
        const exists = await prisma.chapters.findFirst({
            where: {
                name: name
            }
        })
        if (!exists) return null
        return exists
    }
}
