/* Dependencies */
var path = require('path')
const express = require('express')
const fetch = require("node-fetch")
// const amazingFeedback = require('./analysis.js')

/* Environment Variables */
const dotenv = require('dotenv');
dotenv.config();

/* App instance */
const app = express() 

/* Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Cross origin allowance */
const cors = require('cors');
app.use(cors());

/* Initialize App instance */
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
    console.log("::: Server Received Address::: ", newAddress);
    let apiRequest = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${newAddress}&lang=en&model=general`;
    console.log("::: API Analysis Requested :::");
    runAnalysis(apiRequest)
    amazingFeedback = {
        subjectivity: meaningCloudData.subjectivity,
        confidence: meaningCloudData.confidence,
        sentiment: meaningCloudData.sentiment
    }
})

const runAnalysis = async (request) => {
    console.log("::: Running Sentiment Analysis :::\nfetching feedback from",request);
    const res = await fetch(request)
    try {
        let meaningCloudData = await res.json();
        console.log("::: Sentiment Analysis Recieved :::");
        return meaningCloudData
    } catch (error) {
        console.log("error: ", error);
    }
}

/* AmazingAI - Server side GET Route */
app.get('/analysis', (req, res) => {
    res.send(amazingFeedback)
})
