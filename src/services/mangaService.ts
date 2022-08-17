import { mangas } from "@prisma/client"
import { mangaRepository } from "@repositories/mangaRepository"

export type mangaTemplate = Omit<mangas, "id" | "views" | "isFinished" | "createdAt" | "mangas" | "images">

export type createMangaType = mangaTemplate & {
    name: string
    description: string
    coverUrl: string
}

export const mangaService = {
    async createManga(manga: createMangaType) {
        const mangaInfo = await mangaRepository.createManga(manga)
        return mangaInfo
    }
}
