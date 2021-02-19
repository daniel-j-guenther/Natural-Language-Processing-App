/* Dependencies */
var path = require('path')
const express = require('express')
const amazingFeedback = require('./analysis.js')

/* Private Keys secured in environment variables */
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

/* AmazingAI -  */
amazingFeedback = {}

/* AmazingAI - Server side POST Route */
app.post('/validata', (req, res) => {
    newAddress = req.body.address;
    console.log("::: Server Received Address:::");
    // API request built in variable.
    let apiRequest = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${newAddress}&lang=en&model=general`;
    // Trying to pass variable into API Call
    ()=>{runAnalysis(apiRequest)}
    const runAnalysis = async (request) => {  
        console.log("::: Running Sentiment Analysis ::: \nAPI Call = ", request);
        const res = await fetch(request)
        try {
            let meaningCloudData = await res.json();
            return meaningCloudData
        } catch (error) {
            console.log("error: ", error);
        }
    }
    amazingFeedback = {
        subjectivity: meaningCloudData.subjectivity,
        confidence: meaningCloudData.confidence,
        sentiment: meaningCloudData.sentiment
    }
})

/* AmazingAI - Server side GET Route */
app.get('/analysis', (req, res) => {
    res.send(amazingFeedback)
})
