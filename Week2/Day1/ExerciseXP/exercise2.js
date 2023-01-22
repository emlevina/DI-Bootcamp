// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

let myWatchedSeriesLength = myWatchedSeries.length;

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]} `

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[myWatchedSeries.indexOf('the big bang theory')] = 'friends';

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push('ted lasso')

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift('Zoey\'s Extraordinary Playlist')

// Delete the series “black mirror”.
let index = myWatchedSeries.indexOf('black mirror')
myWatchedSeries.splice(index,index)

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[myWatchedSeries.indexOf('money heist')][2])

// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries)