// Prompt the user for a string. It must be a verb.
let verb = prompt('Please, enter a verb')
verb = verb.toLowerCase();
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
let regexp = /^.*ing$/;
if(verb.length < 3){

} else if(!verb.match(regexp)){
    verb = verb + 'ing'
} else {
    verb = verb + 'ly'
}
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.
// Example:
console.log(verb)