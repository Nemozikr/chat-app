import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Server } from 'http';
import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors';

import api from './routes/api.js';

const app = express();
const server = new Server(app);

app.use(cors({
    origin: ['https://chat-app-0mk9.onrender.com', 'http://localhost:8080']
}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const PORT = process.env.SERVER_PORT || 5000;


const logger = (req, res, next) => {
    console.log(`host name:${req.hostname}`);
    console.log(`[${req.method}] ${req.url}`);
    next();
}

app.use(logger);

app.use('/api', api)

app.use(express.static(path.join(__dirname, '../chat-client/dist')));


app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../chat-client/dist/index.html'));
});



server.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`) 
})