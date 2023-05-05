import express from 'express';
import cors from 'cors';
import url from 'url';
import dotenv from 'dotenv';
import needle from 'needle';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();

//Enable CORS
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;
const API_URL = "https://itunes.apple.com/search";

/* api proxy call for itunes api */
app.get("/api/search", async (req,res) => {
    try{             
        const params = new URLSearchParams({
            ...url.parse(req.url,true).query 
        })    
        const apiResponse = await needle('get',`${API_URL}?${params}`);
        const data = apiResponse.body;
        res.status(200).json(data);
    }
    catch(ex) {
        res.status(500).json({ex});
    }  
});

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public")); // if react build folder is not available this will run with public folder

app.listen(PORT, HOST, () => {
    console.log(`Proxy Started at ${HOST}:${PORT}`)
});