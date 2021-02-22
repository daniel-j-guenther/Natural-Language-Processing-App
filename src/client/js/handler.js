function runHandler(event) {
    event.preventDefault()    
    let userLink = document.getElementById('website-url').value.toString();
    console.log("::: Web Address Submitted :::");
    Client.runValidator(userLink) // Run input for validation.
    document.getElementById('nlp-overview').innerHTML = "Please be wait while we process your results...";
    setTimeout(()=>{ // Wait for Sentiment Analysis to process.
        fetch('/analysis') // Aftre 20 seconds fetch processed data.
        .then(res => res.json()) 
        .then(function(res) { // Use App Endpoint to update the UI.
            document.getElementById('nlp-overview').innerHTML = "Natural Language Processing is a subset of Artificial Intellence that provides computers the ability to process natural human speech. Machine Learning and Deep Learning techniques are used on massive amounts of data so that computers can understand human speech.";
            document.getElementById('nlp-feedback').innerHTML = "The contents of this page is " + res.subjectivity + " in nature and " + res.confidence + "% confident on the topic.";
        })
    }, 20000)
}

export { runHandler } // Export for bundling in main.js
