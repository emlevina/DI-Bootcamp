let root = document.getElementById('root')
let loading1 = document.getElementById('loading1')
let loading2 = document.getElementById('loading2')

let arr = ['l', 'o', 'a', 'd', 'i', 'n', 'g']

for (let letter of arr) {
    let p = document.createElement('span')
    p.append(letter)
    p.style.visibility = 'hidden'
    loading2.append(p)
}

setInterval(() => {
    if (loading1.textContent.slice(-3) === '...') {
        loading1.textContent = loading1.textContent.slice(0, -3)
    } else {
        loading1.append('.')
    }
}, 500)

let index = 0
setInterval(() => {
    let nodeToFade = loading2.childNodes[index - 2] || loading2.childNodes[index + arr.length - 2]
    let nodeToAppear = loading2.childNodes[index]
    
    nodeToAppear.classList.add('fade')
    nodeToAppear.style.visibility = 'visible'

    nodeToFade.style.visibility = 'hidden'
    nodeToFade.classList.remove('fade')

    index = index == arr.length - 1 ? 0 : index + 1
}, 1000)