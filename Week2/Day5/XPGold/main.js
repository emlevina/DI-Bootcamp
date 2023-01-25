let result = 0;
let isFinal = false;

function number(num) {
    if (isFinal) {
        result = num
        isFinal = false
    } else if (typeof (result) === 'number') {
        result = result * 10 + num
    } else {
        result += num
    }
    refresh()
}
function operator(operator) {
    isFinal = false
    let lastNum = getLastNum(result)
    if (Number(lastNum)) {
        result += operator
    } else if (operator === '-' && result[result.length - 3] !== '-') {
        result += " " + operator
    } else if (lastNum !== operator && result[result.length - 2] !== " ")  {
        result = result.slice(0, -1) + operator
    }
    refresh()
}

function dot() {
    isFinal = false
    let lastNum = getLastNum(result)
    if (!Number(lastNum)) {
        result = result + 0 + '.'
    } else if (Number(lastNum) % 1 === 0) {
        result += '.'
    }
    refresh()
}

function equal() {
    let lastNum = getLastNum(result)
    while (!Number(lastNum)) {
        result = result.slice(0, -1)
        lastNum = getLastNum(result)
    }
    result = eval(result)
    result = roundToFour(result).toString()
    isFinal = true;
    refresh()
}

function reset() {
    result = 0
    refresh()
}

function refresh() {
    document.getElementById('result').innerHTML = result;
}

function roundToFour(num) {
    return +(Math.round(num + "e+4") + "e-4");
}

function getLastNum(num){
    let regex = /([\d\.]*|[\*\/\+\-]|\w)$/
    let lastNum = num.toString().match(regex)[0]
    return lastNum
}

refresh()