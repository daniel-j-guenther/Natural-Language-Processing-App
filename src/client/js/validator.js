function runValidator(webAddress) {
    console.log("::: Validating Web Address :::\n\nThe website address to validate: ", webAddress);
    let validLinks = [
        "https://",
        "http://"
    ]
    // AmazingAI - Step 2: Validate and POST to App Endpoint.
    if(validLinks.includes(webAddress)) {
        console.log("::: Validated Successfuly :::");
        alert("Thank you, that is a valid web address!\nClick Okay to see your results...")
        addToEndpoint('/validated', webAddress)
    } 
    // AmazingAI - Elgantly handle any errors.
    else {
        console.log("::: Validation Failure! :::");
        alert("Sorry this address won't work. Try again using a valid web address?")
    }
}

export { runValidator }
