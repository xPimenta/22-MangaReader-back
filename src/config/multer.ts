import { Options , diskStorage } from 'multer';
import { resolve } from 'path';
import { randomBytes } from 'crypto';

export const multerConfig: Options = {
    dest: resolve(__dirname, '../../uploads'),
    storage: diskStorage({
        destination: (request, file, callback) => {
            callback(null, resolve(__dirname, '../../uploads'));
        },
        filename: (request, file, callback) => {
            randomBytes(16, (error, hash) => {
                if (error) {
                    callback(error, file.filename);
                }
                const filename = `${hash.toString('hex')}}.png`;
                callback(null, filename);
            });
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,// 5MB
    },
    fileFilter: (request, file, callback) => {
        const formats = ['image/png', 'image/jpeg', 'image/jpg'];
        if (formats.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error('Invalid file type'));
        }
    }
} as Options