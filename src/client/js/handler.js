function runHandler(event) {
    event.preventDefault()    
    let userLink = document.getElementById('website-url').value.toString();
    console.log("::: Web Address Submitted :::");
    Client.runValidator(userLink) // Run input for validation.
    document.getElementById('nlp-overview').innerHTML = "Please be patient while we process your results...";
    setTimeout(()=>{ // Wait for Sentiment Analysis to process.
        fetch('/analysis') // Aftre 20 seconds fetch processed data.
        .then(res => res.json()) 
        .then(function(res) { // Use App Endpoint to update the UI.
            document.getElementById('nlp-overview').innerHTML = "Natural Language Processing is a subset of Artificial Intellence that provides computers the ability to process natural human speech. Machine Learning and Deep Learning techniques are used on massive amounts of data so that computers can understand human speech.";
            document.getElementById('nlp-feedback').innerHTML = "The contents of this page is " + res.subjectivity.bold() + " in nature. <br>The author is " + res.confidence.bold() + "% in " + res.agreement.bold() + " with the topic. <br>The content is "+ res.irony.bold() + "with a score tag of " + res.score_tag.bold() + ".";
            document.getElementById('nlp-scoretag').innerHTML = "A score tag indicates the sentiment of a text. The score tag values are as follows: <br><br><ul><li>P+: strong positive</li><li>P: positive</li><li>NEU: neutral</li><li>N: negative</li><li>N+: strong negative</li><li>NONE: without sentiment</li></ul>";
        })
    }, 20000)
}

export { runHandler } // Export for bundling in main.js
