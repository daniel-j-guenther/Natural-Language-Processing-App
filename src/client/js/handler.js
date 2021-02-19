function runHandler(event) {
    event.preventDefault()    
    let userLink = document.getElementById('website-url').value.toString();
    console.log("::: Web Address Submitted :::");
    Client.runValidator(userLink)
    fetch('/analysis')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('nlp-overview').innerHTML = "Natural Language Processing is a subset of Artificial Intellence that provides computers the ability to process natural human speech. Machine Learning and Deep Learning techniques are used on massive amounts of data so that computers can understand human speech.";
        document.getElementById('nlp-feedback').innerHTML = "The website you provided is " + res.subjectivity + " and " + res.confidence + "% confident on the topic.";
    })
}

export { runHandler }
