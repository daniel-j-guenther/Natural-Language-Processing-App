/* AmazingAI - Dependencies */
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./fetch-api.js')

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


appData = {};
app.get('/meaning-cloud', function (req, res) {
    res.send(mockAPIResponse)
})

/* Server side POST Route: Data received from the client side POST. 
app.post('/new-entry', updateEndpoint);
function updateEndpoint (req,res){
    newEntry = {
        datum: req.body.datum,
        tempum: req.body.tempum,
        feeling: req.body.feeling
    };
    projectData = newEntry;
}; */

/* Server side GET Route I: Return endpoint data to client
app.get('/add-entry', updateUI); 
function updateUI (req, res) {
    res.send(projectData);
    return projectData;
}; */