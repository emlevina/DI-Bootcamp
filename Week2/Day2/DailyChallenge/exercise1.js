// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.
let sentence = 'My life is not so bad!';

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let regexp = /not/;
let wordNot = sentence.match(regexp)?.index;
// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
regexp = /bad/;
let wordBad = sentence.match(regexp)?.index;
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if(wordNot < wordBad){
    regexp = /not.*bad/
    sentence = sentence.replace(regexp, 'good')
}

console.log(sentence);
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
