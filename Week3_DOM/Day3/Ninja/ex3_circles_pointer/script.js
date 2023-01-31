let root = document.getElementById('root')

const createCircles = (e) => {
    let circle = document.createElement('div')
    circle.classList.add('circle')
    circle.style.position = 'absolute'

    circle.style.left = e.clientX + 'px'
    circle.style.top = e.clientY + 'px'
    circle.style.borderColor = `#55${((Math.random() * 0xfffff * 100000).toString(16)).slice(0,2)}ff`
    
    root.append(circle)

    setTimeout(() => {
        circle.remove()
    }, 200)
}

document.addEventListener('mousemove', createCircles)