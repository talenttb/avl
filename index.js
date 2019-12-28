const dotenv = require('dotenv')
dotenv.config()

const db = require('./model/db')

const express = require('express')
const app = express()
// const path = require('path')
// const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// const session = require('express-session')

// app.use(express.static(path.join(__dirname, 'public')))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
// app.get('/', (req, res) => res.render('pages/index'))
// app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(session({secret: 'abc'}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(require('./routes'))

app.listen(
    process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))