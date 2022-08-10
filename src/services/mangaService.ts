import { getBaseUrl } from "@utils/apiPaths"
import axios from "axios"

export const mangaService = {
  async findAll() {
    const API_URL = `${getBaseUrl()}/mangas.json`
    const result = await axios.get(API_URL)

    const mangas = result.data

    return mangas
  },

  async findByKey(mangaKey: string) {
    const API_URL = `${getBaseUrl()}/mangas/${mangaKey}.json`

    const result = await axios.get(API_URL)

    const manga = result.data

    return manga
  },
}
