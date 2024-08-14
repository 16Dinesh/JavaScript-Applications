const locationBtn = document.querySelector('button');
const text = document.querySelector('.location');

const showPosition = (pos) => {text.innerHTML = `Latitude: ${pos.coords.latitude} <br>Longitude: ${pos.coords.longitude}`}

const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition)
}

locationBtn.addEventListener('click', getUserLocation)