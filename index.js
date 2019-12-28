const dotenv = require('dotenv')
dotenv.config()

const db = require('./model/db')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('./routes'))



app.listen(
    process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))