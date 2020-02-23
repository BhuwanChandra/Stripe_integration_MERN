const cors = require('cors');
const express = require('express');
// TODO: add a stripe key
const stripe = require('stripe');
const uuid = require('uuid/v4');

const app = express();


// middleware
app.use(express.json())
app.use(cors())


// routes

app.get('/', (req, res) => {
    res.send("THIS IS THE HOME PAGE !!! ");
})



// listen

app.listen(8282, () => {
    console.log(" ******  listening on port 8282  *****");  
})

