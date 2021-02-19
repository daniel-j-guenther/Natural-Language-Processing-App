/* AmazingAI - Dependencies */
var path = require('path')
const express = require('express')
const amazingFeedback = require('./analysis.js')

/* Amazing AI - Private Keys secured in environment variables */
const dotenv = require('dotenv');
dotenv.config();

/* AmazingAI - App instance */
const app = express() 

/* AmazingAI - Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* AmazingAI - Cross origin allowance */
const cors = require('cors');
app.use(cors());

/* AmazingAI - App instance */
app.use(express.static('dist'))
console.log(__dirname)

/* AmazingAI - route to index */
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

/* AmazingAI - Localhost */
app.listen(1024, function () {
    console.log('AmazingAI on port 1024!')
})

/* AmazingAI - Server side POST Route */
app.post('/validata', (req, res) => {
    newAddress = req.body.address;
    console.log("::: Server Received Address:::");
    let apiCall = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${newAddress}&lang=en&model=general`;
    apiCall.send('./analysis.js')
})

/* AmazingAI - Server side GET Route */
app.get('/analysis', (req, res) => {
    res.send(amazingFeedback)
})
