import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { Server } from 'http';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const server = new Server(app);
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);




const logger = (req, res, next) => {
    console.log(req.hostname);
    next();
}




app.use(express.static(join(__dirname, '../chat-client/dist')));


app.all('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../chat-client/dist/index.html'));
});

server.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})