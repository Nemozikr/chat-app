require('dotenv').config();
const express = require('express');
const { Server } = require('node:http');
const { join } = require('node:path')

const app = express();
const server = Server(app);

app.use(express.static(join(__dirname, '../chat-client/dist')))

const logger = (req, res, next) => {
    console.log(req.host);
    next();
}

app.get('/api/alive', logger, (req, res) => {
    res.send(req.host)
})

app.get('/api/hello-world', (req, res, next) =>{
    res.json('Hello Worls1!11!');
})

const PORT = process.env.SERVER_PORT;





server.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})