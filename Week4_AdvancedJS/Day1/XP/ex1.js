// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
// inside the funcOne function 3`
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// error because of assignment to const attempt

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
// inside the funcThree function 0
funcTwo()
// undefined
funcThree()
// inside the funcThree function 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// error after seconf call of funcThree


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
//undefined
funcFive()
//inside the funcFive function hello

//#4
// let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// inside the funcSix function test
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// no problems

//#5
// let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// in the if block 5
// outside of the if block 2

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// no problems, all the same