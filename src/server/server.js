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

/* Processed Analysis JSON */
amazingFeedback = {}

/* AmazingAI - Server side POST Route */
app.post('/validata', (req, res) => {
    newAddress = req.body.address;
    console.log("::: Received Web Address :::");
    let apiRequest = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${newAddress}&lang=en&model=general`;
    runAnalysis(apiRequest)
})

const runAnalysis = async (request) => {
    console.log("::: API Analysis Requested :::");
    const res = await fetch(request)
    try {
        let meaningCloudData = await res.json();
        console.log("::: API Analysis Recieved :::");
        let processedData = {
            subjectivity: meaningCloudData.subjectivity.toLowerCase(),
            confidence: meaningCloudData.confidence.toLowerCase(),
        };
        amazingFeedback = processedData
        console.log("::: API Analysis Processed :::\n Our Processed Data: ",amazingFeedback);
    } catch (error) {
        console.log("error: ", error);
    }
}

/* AmazingAI - Server side GET Route */
app.get('/analysis', (req, res) => {
    res.send(amazingFeedback)
})
