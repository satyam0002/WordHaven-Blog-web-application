import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://satyamfoodit:fooditSa@ac-frc9v4i-shard-00-00.knj8og2.mongodb.net:27017,ac-frc9v4i-shard-00-01.knj8og2.mongodb.net:27017,ac-frc9v4i-shard-00-02.knj8og2.mongodb.net:27017/?ssl=true&replicaSet=atlas-u8oz9v-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 