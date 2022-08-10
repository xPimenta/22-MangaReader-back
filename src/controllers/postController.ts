import { postService } from "@services/postService"
import { Request, Response } from "express"



export const postController = {
  async upload(request:Request, response:Response){
    console.log(request.file)
    return response.json({message: 'POSTED OK!'})
}
}