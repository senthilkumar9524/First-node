let http = require('http')
const port = 4501;

let express = require('express')
let app = express()
let router = require('./router')
var cors = require('cors');
app.use(cors());

let mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.1.116/datasecure', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router(app)

http.createServer(app).listen(port)