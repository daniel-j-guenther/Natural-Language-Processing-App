function runValidator(webAddress) {
    
    console.log("::: Validating Web Address :::");
    
    // Validate with http/s/www as optional but exclude email.
    const regexURL = /^(?:(?:http(s)?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    let regexMatchURL = new RegExp(regexURL);
    
    // If Validation succeeds, POST to appEndpoint.
    if(webAddress.match(regexMatchURL)) {
        console.log("::: Validated Successfuly :::");
        postData('/validata', {address: webAddress})
        return "VALIDATION SUCCESS!"
    } 
    
    // If Validation fails, elegantly handle errors.
    else { 
        console.log("::: Validation Failure! :::");
        alert("This not a valid web address, please try again.");
        return "VALIDATION FAILURE!"
    }
}

/* Client Side POST Route */
const postData = async (url='/validata', data={}) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    try {
        let validURL = await response.json();
        return validURL;
    } 
    catch(error){
        console.log("::: API Request Failed! :::\n", error);
    }
}

export { runValidator }
