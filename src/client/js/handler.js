function runHandler(event) {
    event.preventDefault()    
    let userLink = document.getElementById('website-url').value.toString();
    console.log("::: Web Address Submitted :::");
    Client.runValidator(userLink)
    setTimeout(()=>{
        fetch('/analysis')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('nlp-overview').innerHTML = "Natural Language Processing is a subset of Artificial Intellence that provides computers the ability to process natural human speech. Machine Learning and Deep Learning techniques are used on massive amounts of data so that computers can understand human speech.";
            document.getElementById('nlp-feedback').innerHTML = "The contents of this page is " + res.subjectivity + " in nature and " + res.confidence + "% confident on the topic.";
        })
    }, 12000)
}

export { runHandler }
