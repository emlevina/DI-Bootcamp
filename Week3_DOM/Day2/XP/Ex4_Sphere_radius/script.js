
let radiusInp = document.querySelector('#radius')
let volumeInp = document.querySelector('#volume')

const callBackSubmit = (e) => {
    e.preventDefault()
    let radius = radiusInp.value
    let volume = 4/3 * Math.PI * radius ** 3
    volumeInp.value = volume
}

document.addEventListener('submit', callBackSubmit)