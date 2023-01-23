// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
let clientZip = prompt('Enter your ZIP-code');
let regexp = /^\d{5}$/
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length
if(clientZip.match(regexp)){
    console.log('success')
} else {
    console.log('error')
}