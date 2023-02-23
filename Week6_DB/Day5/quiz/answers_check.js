// 2
// const arrNums = [1, 2, 3, 4, 5];
// console.log(arrNums.splice(2, 0))

// 3
// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]

// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers)

// 4
// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs.spain = "Real Madrid";
// console.log(football.clubs.spain);

// 5
// const myteam = "bestTeam";

// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);

// 7
// function x() {
//     a = 5;
//     console.log(a)
// }

// x()

// 8
// function sayHello() {
//     return "Hello, ";
// }
// function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

// 10
// function foo() {
//     function bar() {
//         return "Poppin' bottles";
//     }
//     return bar;
// }

// console.log(foo()())

// 15
// const marks = [67, 60, 89, 90, 67, 42];

// const passed = marks.every(function (m) {
//     return m >= 50;
// });

// console.log(passed)

// 16
// const nums = [10, 50, 88];

// const bignums = nums.filter(function (n) {
//     return n > 10;
// });

// console.log(bignums);

// 19
// const input = 'George Raymond Richard Martin';
// //code 
// const initials = input.split(' ').map(word => word[0]).join('')
// console.log(initials)//'GRRM'


// 20
// function changeTshirt (myshirt){
//     console.log("myshirt", myshirt);
//     myshirt.color = "red"
//     console.log("myshirt", myshirt); //this is the parameter
//     console.log("tshirt", tshirt);   //this is the global variable
// }


// const tshirt = {
//     color : "blue",
//     price : 10
// }

// changeTshirt(tshirt)

// 21
// function changeTshirt ({...myshirt}){
//     console.log("myshirt", myshirt);
//     myshirt.color = "red"
//     console.log("myshirt", myshirt); //this is the parameter
//     console.log("tshirt", tshirt);   //this is the global variable
// }


// const tshirt = {
//     color : "blue",
//     price : 10
// }

// changeTshirt(tshirt)

// 22
// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// //answer
// const { clubs: { france, spain } } = football
// console.log(france, spain)


// 23
// function retrieveSports({ clubs: { france: franceTeam, spain: spainTeam } }) {
//     const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
//     console.log(sentence);
// }

// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// retrieveSports(football)


// 24
// class Item {
//     constructor(nameProduct, priceProduct) { 
//           this.name = nameProduct;
//           this.price = priceProduct;
//     }

//     displayInfo () {
//          console.log(this.name + " is for $ " + this.price)
//     }
//  } 

//  const cake = new Item("Chocolate Cake", 10);
//  cake.displayInfo();


// 25
// Promise.resolve('Success!')
//       .then(data => {
//         return data.toUpperCase()
//       })
//       .then(data => {
//         console.log(data)
//       })


// 26
// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        resolve("OK");
//     }, 2000);
//  });

//  p.then(function(data) {
//     console.log(data);
//  });


// 27
// async function test() {
//     let result = 'first!';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('done!'), 1000);
//     });

//     result = await promise;

//     console.log(result);
// }

// test();