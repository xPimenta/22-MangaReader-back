import { getBaseUrl } from "@utils/apiPaths"
import axios from "axios"

export const postService = {
  async upload() {
    const API_URL = `${getBaseUrl()}/posts.json`
    const result = await axios.get(API_URL)

    const posts = result.data

    return posts
  },

  async findByKey(postKey: string) {
    const API_URL = `${getBaseUrl()}/posts/${postKey}.json`

    const result = await axios.get(API_URL)

    const post = result.data

    return post
  },
}
