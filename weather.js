class Weather {
    constructor(city) {
        this.apiKey = "388f6bd9064d0e880577e41a7d0e2fa6";
        this.city = city;
    }

    // fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;

    }

    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}


