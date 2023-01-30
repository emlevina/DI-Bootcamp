// Retrieve the form and console.log it.
let form = document.forms[0]
console.log(form)

// Retrieve the inputs by their id and console.log them.
let fnameById = document.getElementById('fname')
let lnameById = document.getElementById('lname')
let submitById = document.getElementById('submit')

console.log(fnameById, lnameById, submitById)

// Retrieve the inputs by their name attribute and console.log them.
let fnameByName = document.forms[0].fname
let lnameByName = document.forms[0].lname
let submitByName = document.forms[0].submit

console.log(fnameByName, lnameByName, submitByName)

// When the user submits the form (ie. submit event listener)
const callBack = (e) => {
    e.preventDefault()
    let fnameVal = fnameByName.value
    let lnameVal = lnameByName.value

    if (fnameVal && lnameVal) {
        let ul = document.querySelector('.usersAnswer')
        let li1 = document.createElement('li')
        li1.append(document.createTextNode(fnameVal))
        let li2 = document.createElement('li')
        li2.append(document.createTextNode(lnameVal))
        ul.appendChild(li1)
        ul.appendChild(li2)
        fnameByName.value = ''
        lnameByName.value = ''
    }

}

document.addEventListener('submit', callBack)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.