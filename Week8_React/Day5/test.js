let b = 3, d = b, u = b // b = 3, d = 3, u = 3
const tree = ++d * d * b * b++ + // 4 * 4*3 * 3  = 4 * 12 * 3 = 48 * 3 = 144 // b = 4, d = 4, u = 3
    + --d + b-- + // + 3 + 4 + // d = 3, b = 3, // 144 + 7 = 151
    + +d * b + + // + 3 * 3 + // 151 + 9 = 160
    u // + 3 // 163

console.log(tree)


const calcDigit = (num) => {
    if (num < 10) {
        return num
    } else {
        const reduced = num.toString().split('').reduce((acc, num) => acc + +num, 0)
        return calcDigit(reduced)
    }
}

console.log(calcDigit(132189))
console.log(calcDigit(493193))
console.log(calcDigit(942))