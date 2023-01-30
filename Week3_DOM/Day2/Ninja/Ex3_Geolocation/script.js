let longitude = document.getElementById('longitude')
let latitude = document.getElementById('latitude')
let output = document.getElementById('output')
output.style.display = 'none'
let button = document.getElementById('button')

const successCallback = (position) => {
    let userLatitude = `User latitude: ${position.coords.latitude}`;
    let userLongitude = `User longitude: ${position.coords.longitude}`

    latitude.innerText = userLatitude
    longitude.innerText = userLongitude

    output.style.display = 'block'
};

const errorCallback = (error) => {
    console.log(error);
};

button.addEventListener('click', function(){
    console.log('click')
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
});