// init weather object
const weather = new Weather('Delhi');
// init UI object
const ui = new UI();

// change location event
document.getElementById('change-loc-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city');
    if (city.value !== '') {
        weather.changeLocation(city.value);
    }
    // get and display weather
    getWeather();
    // clear city input value
    city.value = '';
    // prevent form from submitting
    e.preventDefault();
});

// Get weatehr on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data);
            ui.show(data);
        }).catch(err => console.log(err));
}