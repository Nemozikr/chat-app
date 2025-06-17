require('dotenv').config();
const express = require('express');
const { Server } = require('node:http');
const { join } = require('node:path')

const app = express();
const server = Server(app);

app.use(express.static(join(__dirname, '../chat-client/dist')))

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../chat-client/dist/index.html'))
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/api/message', (req, res, next) =>{
    res.json('Hello Worls1!11!');
})

const PORT = process.env.PORT;





server.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})