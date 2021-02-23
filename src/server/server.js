/* Dependencies */
var path = require('path');
const express = require('express');
const fetch = require("node-fetch");

/* Environment Variables */
const dotenv = require('dotenv');
dotenv.config()

/* App Instance */
const app = express();

/* Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* Cross origin allowance */
const cors = require('cors');
app.use(cors())

/* Initialize App instance */
app.use(express.static('dist'))
console.log(__dirname)

/* Route to index */
app.get('/', function(req,res){res.sendFile('dist/index.html')})

/* Localhost */
app.listen(1024, function(){console.log('AmazingAI on port 1024!')})

/* App Endpoint */
amazingFeedback={}

/* Server side POST Route */
app.post('/validata', (req, res)=>{
    newAddress = req.body.address;
    console.log("::: Received Web Address :::");
    let apiRequest = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${newAddress}&lang=en&model=general`;
    runAnalysis(apiRequest)
})

/* Server side GET Route */
app.get('/analysis', (req, res)=>{
    res.send(amazingFeedback)
})

/* Fetch Request to Sentiment Analysis API */
const runAnalysis = async (request) => {
    console.log("::: API Analysis Requested :::");
    const res = await fetch(request)
    try {
        let meaningCloudData = await res.json();
        console.log("::: API Analysis Recieved :::");
        let processedData = {
            subjectivity: meaningCloudData.subjectivity.toLowerCase(),
            irony: meaningCloudData.irony.toLowerCase(),
            score_tag: meaningCloudData.score_tag.toLowerCase(),
            confidence: meaningCloudData.confidence.toLowerCase(),
            agreement: meaningCloudData.agreement.toLowerCase(),
        };
        amazingFeedback = processedData;
        console.log("::: API Analysis Processed :::");
    } catch (error) {console.log("error: ", error)}
}
