function runHandler(event) {
    
    event.preventDefault()

    // Store user input into variable for processing.
    let userLink = document.getElementById('website-url').value.toString();
    console.log("::: Web Address Submitted :::");
    
    // Run input data for validation.
    Client.runValidator(userLink)
    
    // Notify user to wait for feedback.
    document.getElementById('nlp-notice').innerHTML = "Natural Language Processing (NLP) provides computers the ability to process ordinary human speech. In NLP <b>Machine Learning</b> and <b>Deep Learning</b> techniques are used on massive amounts of data to establish meaning.";
    document.getElementById('nlp-header').innerHTML = "Please wait while we collect your NLP results...";
    
    // Wait for Sentiment Analysis to complete.
    setTimeout(()=>{
 
        // Fetch Sentiment Analysis from appEndpoint
        fetch('/analysis')
        .then(res => res.json())
        .then(function(res) { // Dynamically update UI.
            document.getElementById('nlp-header').innerHTML = "Your <b>AmazingAI</b> results have arrived:";
            document.getElementById('nlp-feedback').innerHTML = "The contents of this page is " + res.subjectivity + " in nature. <br>The author is " + res.confidence + " in " + res.agreement + " with the topic. <br>And, the writting is "+ res.irony + " with a score tag of " + res.score_tag + ".";
            document.getElementById('nlp-scoretag').innerHTML = "<br><br>The score tag indicates the sentiment of any given text. Score tag values are as follows:<br><b>P+</b>: strong positive | <b>P</b>: positive | <b>NEU</b>: neutral | <b>N</b>: negative | <b>N+</b>: strong negative | <b>NONE</b>: without sentiment";
        })
    }, 12000)

}

export { runHandler } // Export for bundling in main.js
