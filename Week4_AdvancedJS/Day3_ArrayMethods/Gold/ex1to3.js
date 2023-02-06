// Exercise 1 : Analyzing The Map Method
// Analyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});

// Prediction: [2, 4, 6]

//Exercise 2: Analyzing The Reduce Method
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// Prediction: [1, 2, 0, 1, 2, 3]

// Exercise 3 : Analyze This Code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})
// What is the value of i ?
// Prediction: indexes from 0 to 5
