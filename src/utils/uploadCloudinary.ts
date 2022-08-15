import cloudinary from "@utils/cloudinary"

export async function uploadChapter(uploadInfo: any) {
  const images = uploadInfo[2]
  let chapterUrls = []

  for await (const image of images) {
    const uploadResponse = await cloudinary.uploader.upload(image[0], {
      upload_preset: "mangareader",
      folder: uploadInfo[0] + " " + uploadInfo[1],
      public_id: image[1].slice(0, -4),
    })
    chapterUrls.push(uploadResponse.url)
    chapterUrls = [...chapterUrls.sort()]
  }
  return chapterUrls
}
