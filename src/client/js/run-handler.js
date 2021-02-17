function runFeedback(event) {
    event.preventDefault()

    // check what text was put into the form field
    let webAddress = document.getElementById('web-address').value
    Client.runChecker(webAddress)

    // console.log("::: Form Submitted :::")
    fetch('http://localhost:3072/meaning-cloud')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('nlp-feedback').innerHTML = res.message
    })
}

export { runFeedback }
