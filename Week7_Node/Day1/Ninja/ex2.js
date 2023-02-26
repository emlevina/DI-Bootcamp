const returnNumbers = (str) => {
    let regex = /[0-9]/g
    return [...str.matchAll(regex)].map(item => item[0]).join('');
}


console.log(returnNumbers('k5k3q2g5z6x9bn'))
