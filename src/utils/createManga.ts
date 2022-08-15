import { createManga } from "../services/mangaService"
import { mangaRepository } from "../repositories/mangaRepository"

export async function createManga(manga: createManga) {
    const mangaInfo = await mangaRepository.createManga(manga)
    return mangaInfo
}