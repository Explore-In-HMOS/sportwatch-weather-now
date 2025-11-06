import router from '@system.router';

export default {
    data: {
        temperature: '--',
        unit: 'C',
        iconSrc: '/icons/ic_current.png',
        bgColor: '#FFFFFF',
        weatherDesc: '--',
        humidity: '--',
        windSpeed: '--',
        mockWeatherList: []
    },

    onInit() {
        this.initMockData();
        this.loadRandomWeather();
    },

    initMockData() {
        this.mockWeatherList = [
            {
                tempC: 25,
                icon: '/icons/ic_sun.png',
                weather: 'Sunny',
                humidity: 40,
                windSpeed: 10,
                bgColor: '#ffffe770'
            },
            {
                tempC: 18,
                icon: '/icons/ic_cloud.png',
                weather: 'Cloudy',
                humidity: 55,
                windSpeed: 8,
                bgColor: '#ffcbcbcb'
            },
            {
                tempC: 15,
                icon: '/icons/ic_rain.png',
                weather: 'Rainy',
                humidity: 80,
                windSpeed: 20,
                bgColor: '#ffc6e2fc'
            }
        ];
    },

    loadRandomWeather() {
        const randomIndex = Math.floor(Math.random() * this.mockWeatherList.length);
        const selected = this.mockWeatherList[randomIndex];

        this.temperature = selected.tempC;
        this.iconSrc = selected.icon;
        this.weatherDesc = selected.weather;
        this.humidity = selected.humidity;
        this.windSpeed = selected.windSpeed;
        this.bgColor = selected.bgColor;
    },

    goBack() {
        router.replace({
            uri: 'pages/main/main',
        });
    }
};
