function runValidator(webAddress) {
    console.log("::: Validating Web Address :::");
    if(!console.error()) { // Validate and POST for API Call.
        console.log("::: Validated Successfuly :::");
        alert("Thank you, that is a valid web address!");
        postData('/validata', {address: webAddress}) // POST call.
    } else { // If Validation has failed, elegantly handle errors.
        console.log("::: Validation Failure! :::");
        alert("Sorry this address won't work!");
    }
}

/* Client side POST Route */
const postData = async (url='/validata', data={}) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    try {
        let address = await response.json();
        return address;
    } catch (error) {
        console.log("::: API Request Failed! :::\n", error);
    }
};

export { runValidator } // Export for bundling in main.js
