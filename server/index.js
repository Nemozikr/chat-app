require('dotenv').config();
const express = require('express');
const { Server } = require('node:http');
const { join } = require('node:path')
import { fileURLToPath } from 'url';

const app = express();
const server = Server(app);
const __dirname = path.dirname(fileURLToPath(import.meta.url));



const logger = (req, res, next) => {
    console.log(req.host);
    next();
}

app.use(express.static(join(__dirname, '../chat-client/dist')))

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