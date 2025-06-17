require('dotenv').config();
const express = require('express');
const { Server } = require('node:http');
const { join } = require('node:path')

const app = express();
const server = Server(app);

app.get('/api', (req, res, next) =>{
    res.json('Hello Worls1!11!');
})

const PORT = process.env.PORT;





server.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})