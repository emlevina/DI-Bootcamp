let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)
// i thought
// 4seconds wait
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is odne
// slow

// fact
//==CONCURRENT START with await==
// VM863:2 starting slow promise
// VM863:12 starting fast promise
// VM863:16 fast promise is done
// VM863:6 slow promise is done
// VM863:25 slow
// VM863:26 fast