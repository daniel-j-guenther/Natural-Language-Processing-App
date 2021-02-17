/* Fetch API Components */
const baseURL = "";
let getForUrl = document.getElementById('');
const apiKey = "";

meaningCloud(baseURL, getForUrl, apiKey)
.then((sentimentData) => {
    let newTone = sentimentData.tone;
    addToEndpoint('/new-entry', {
        tone: newTone,
        fact: newTemp,
        feeling: newFeels
    });
})
.then(() => {
    updateUI();
});

/* MeaningCloud Sentiment Analysis API Fetch Request */
const meaningCloud = async (baseURL, getForUrl, apiKey) => {
    const res = await fetch(baseURL + getForUrl + apiKey)
    req = req.json()
}
try {
    let sentimentData = await res.json();
    return sentimentData;
} 
catch {
    console.log("Error :", error);
}


let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

module.exports = json