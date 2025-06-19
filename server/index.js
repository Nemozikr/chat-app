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

app.use(express.static(path.join(__dirname, '../chat-client/dist')))






app.all('/*{splat}', (_, res) => {
    res.sendFile(path.join(__dirname, '../chat-client/dist/index.html'));
})

app.get('/api/alive', logger, (req, res) => {
    res.send(`Server alive: ${req.host}`)
})

app.get('/api/hello-world', (req, res, next) =>{
    res.json('Hello Worls1!11!');
})

const PORT = process.env.SERVER_PORT;





server.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})