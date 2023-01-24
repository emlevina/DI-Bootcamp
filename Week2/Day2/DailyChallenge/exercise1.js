let sentence = 'My life is not so bad!';

regexp = /not.*bad/i
sentence = sentence.replace(regexp, 'good')

console.log(sentence);
