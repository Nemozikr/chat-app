const app = require('express')();
require('dotenv').config();


const PORT = process.env.PORT;



app.listen((PORT) => {
    console.log(`Server listening at port:${PORT}`)
})