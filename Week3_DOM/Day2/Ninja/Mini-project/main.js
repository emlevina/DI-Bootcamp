let signInBtn = document.querySelector('#signInButton')
let signUpBtn = document.querySelector('#signUpButton')

const overlay_container = document.querySelector('.overlay-container')
const overlay = document.querySelector('.overlay')

const signInForm = document.querySelector('.sign-in-form')
const signUpForm = document.querySelector('.sign-up-form')

signInBtn.addEventListener('click', ()=>{
    overlay_container.style.transform = 'translateX(100%)'
    overlay.style.transform = 'translate(-50%)'
    signInForm.classList.add('active')
    signUpForm.classList.remove('active')
})
signUpBtn.addEventListener('click', ()=>{
    overlay_container.style.transform = 'translateX(0)'
    overlay.style.transform = 'translate(0)'
    signUpForm.classList.add('active')
    signInForm.classList.remove('active')
})