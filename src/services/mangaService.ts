import { mangas } from "@prisma/client"
import { createManga } from "@utils/createManga"

export type mangaTemplate = Omit<mangas, "id" | "views" | "isFinished" | "createdAt">

export type createManga = mangaTemplate & {
    name: string
    mangaName: string
}

export const mangaService = {

    async createManga(manga: createManga) {
        const mangaInfo = await createManga(manga)
    }
}
