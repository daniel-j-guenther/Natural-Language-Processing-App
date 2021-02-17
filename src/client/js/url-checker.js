function runChecker(webAddress) {
    console.log("::: Running checkForName :::", webAddress);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(webAddress)) {
        alert("Welcome, Captain!")
    }
}

export { runChecker }
