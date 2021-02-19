function runValidator(webAddress) {
    console.log("::: Validating Address :::");
    
    // AmazingAI - Step 2: Validate and POST to Endpoint.
    if(!console.error()) {
        console.log("::: Validated Successfuly :::");
        // console.log(webAddress);
        alert("Thank you, that is a valid web address!");
        // Client side POST Request
        postData('/validata', {
            address: webAddress
        });
    }
    // AmazingAI - Elgantly handle any errors.
    else {
        console.log("::: Validation Failure! :::");
        alert("Sorry this address won't work!");
    }
}

// Client side POST Route - please help me understand why its returning that page 👀
const postData = async (url='/validata', data ={}) => {    
    console.log("webAddress before fetch: \n\n", data);
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    try {
        let address = await response.json();
        console.log("webAddress after fetch: \n\n", address);
        return address;
    } catch (error) {
        console.log("::: API Request Failed! ::: \n\n", error);
    }
};

export { runValidator }
