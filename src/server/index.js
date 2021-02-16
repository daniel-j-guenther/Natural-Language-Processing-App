/* AmazingAI - Dependencies */
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

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


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})