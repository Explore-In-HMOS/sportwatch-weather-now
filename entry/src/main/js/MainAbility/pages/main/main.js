import router from '@system.router';
import geolocation from '@system.geolocation';

export default {
    data: {
        responseData: '',
        isLoading: false,
        errorMessage: '',
        geolocationGetData: ''
    },
    currentLocation() {
        router.replace({
            uri: 'pages/current/current',
        });
    },
    getLocation() {
        this.geolocationGetData = 'Loading...'
        setTimeout(() => {
            geolocation.getLocation({
                timeout: 3000,
                success: function(data) {
                    console.info(`Success: ${data.longitude}`);
                    this.geolocationGetData = `${data.latitude}\n${data.longitude}`;
                }.bind(this),
                fail: function(data, code) {
                    console.error(`Fail: ${data} ${code}`);
                    this.geolocationGetData = `${code} ${data}`;
                }.bind(this),
                complete: function () {
                    console.info('Complete')
                }
            });
        }, 3000);
    }

};
