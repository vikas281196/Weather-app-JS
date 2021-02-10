class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');

    }

    show(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = Math.ceil(weather.main.temp - 273.15) + '°';
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

        this.humidity.textContent = `Humidity : ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like : ${Math.ceil(weather.main.feels_like - 273.15)}°`;
    }
}