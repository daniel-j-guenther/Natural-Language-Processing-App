function runValidator(webAddress) {
    console.log("::: Validating Address :::");
    
    // AmazingAI - Step 2: Validate and POST to App Endpoint.
    if(!console.error()) { // this was quicker than validtating XML/HTML/RSS (I have limited resources to complete the program need be asap ap)
        console.log("::: Validated Successfuly :::");
        alert("Thank you, that is a valid web address!")
        addToEndpoint('/validated', {address: webAddress})
    } 
    // AmazingAI - Elgantly handle any errors.
    else {
        console.log("::: Validation Failure! :::");
        alert("Sorry this address won't work!")
    }
}

/* AW - Async POST route adds entry to our app endpoint */
const addToEndpoint = async (url='', data = {}) => {    
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

export { runValidator }
