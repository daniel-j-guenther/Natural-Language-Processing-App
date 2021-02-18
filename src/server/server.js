/* AmazingAI - Dependencies */
var path = require('path')
const express = require('express')

/* Amazing AI - Private Keys secured in environment variables */
const dotenv = require('dotenv');
dotenv.config();

/* AmazingAI - App Endpoint */
appEndpoint = {}

/* AmazingAI - App instance */
const app = express() 

/* AmazingAI - Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());

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
app.post('/validata', (req,res) => {
    webAddress = res;
    console.log("Server side Link: ", webAddress);    

    // AmazingAI - Step 3: Process components for our API request.
    console.log("::: Running Sentiment Analysis :::");
    let apiLink = webAddress;
    const apiModel = "general";
    const apiLang = "en";
    
    // AmazingAI - Step 4: MeaningCloud Sentiment Analysis API request.
    var https = require('follow-redirects').https;
    var fs = require('fs');
    var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${process.env.API_KEY}&url=${apiLink}&lang=${apiLang}&model=${apiModel}`,
    'headers': {
    },
    'maxRedirects': 20
    };

    // Synchronous http.request blocks the browser until complete
    var req = https.request(options, function (res) {
        var chunks = [];
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body);
            // AmazingAI - Step 5: 
            let amazingFeedback = {
                subjectivity: body.subjectivity,
                confidence: body.confidence,
                agreement: body.agreement,
            }
            appEndpoint = amazingFeedback;
            console.log(appEndpoint);
        });
        res.on("error", function (error) {
            console.error(error);
        });
    });
    req.end();
})

/* AmazingAI - Server side GET Route */
app.get('/analysis', (req, res) => {
    // AmazingAI - Step 6: Findings GET to handler.js and updateUI.
    res.send(appEndpoint)
})
