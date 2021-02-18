/* AmazingAI - App Endpoint */
appEndpoint = {}
/* AmazingAI - Dependencies */
var path = require('path')
const express = require('express')
const runAnalysis = require('./meaning.js')

/* Amazing AI - Private Keys secured in environment variables */
const dotenv = require('dotenv');
dotenv.config();

/* AmazingAI - App instance */
const app = express() 

/* AmazingAI - App instance */
app.use(express.static('dist'))
console.log(__dirname)

/* AmazingAI - route to index */
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

/* AmazingAI - Localhost */
app.listen(1024, function () {
    console.log('AmazingAI on port 1024!')
})

/* AmazingAI - Server side POST Route */
app.post('/validated', (req,res) => {
    // AmazingAI - Step 3: pass validated url for processing
    let webAddress = res.body.toString;
    runAnalysis(webAddress);
})

function runAnalysis(data){

    // AmazingAI - Step 4: Process components for our API request.
    console.log("::: Running Sentiment Analysis :::\n\nThe website we will be checking: ", checkUrl.toString);
    const apiModel = "general";
    const apiLang = "en";
    let apiLink = data.toString;
    let apiPath = `/sentiment-2.1?key=<${process.env.API_KEY}>&lang=<${apiLang}>&url=<"${apiLink}">&model=<${apiModel}>`;

    // AmazingAI - Step 5: MeaningCloud Sentiment Analysis API request.
    var https = require('follow-redirects').https;
    var fs = require('fs');
    var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': apiPath,
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
            console.log(body.toString());
            /*let amazingFeedback = {
                amazingFeedback.subjectivity: body.subjectivity,
                amazingFeedback.confidence: body.confidence,
                amazingFeedback.agreement: body.agreement,
            }
            appEndpoint = amazingFeedback*/
            // console.log(appEndpoint.toString);
            // module.exports = amazingFeedback
        });
        res.on("error", function (error) {
            console.error(error);
        });
    });
    req.end();
}

/* AmazingAI - Server side GET Route */
app.get('/meaning-cloud', (req, res) => {
    // AmazingAI - Step 6: Findings GET to handler and updateUI.
    res.send(appEndpoint)
})