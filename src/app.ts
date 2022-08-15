import cors from "cors"
import dotenv from "dotenv"
import express, { Request, Response } from "express"
import "express-async-errors"

import cloudinary from "./utils/cloudinary"
// import { handleError } from "@middlewares/errorHandler"
import { router } from "@routers/index"

dotenv.config()

const app = express()
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:mangareader')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file: { public_id: any }) => file.public_id);
    res.send(publicIds);
});

app.post('/api/upload', (req: Request, res: Response) => {
        const images = req.body[2]
        let chapterUrls = []

    images.forEach( async (image: any) => {
    try{
        const uploadResponse = await cloudinary.uploader.upload(image[0], {
            upload_preset: 'mangareader', 
            folder: req.body[0] + " " + req.body[1],
            public_id: image[1].slice(0, -4)
        });
        console.log(uploadResponse.url);
        chapterUrls.push(uploadResponse.url)
        }
        catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ERROR' });
    }
    chapterUrls.sort();
    console.log(chapterUrls);
});
    res.status(200).json({ msg: 'CREATED' });
});



app.get("/", (req: Request, res: Response) => res.send("Online"))
app.use(router)

// app.use(handleError)

export default app
