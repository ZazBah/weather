$.get("https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=imperial&appid=9334788e9645c1afc1ad3644bb22e522", function(data){

    let location = data.name + ", Bangladesh" ;
    $('#location').text(location)

    let temperature = Math.ceil(data.main.temp) + "'F" ;
    $('#temperature').text(temperature)

    let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $('#icon1').attr('src', icon)

    let weatherType = data.weather[0].main ;
    $('#weatherType').text(weatherType)

    let feelsLike ="Feels Like " + Math.ceil(data.main.feels_like) + "'F" ;
    $('#feelsLike').text(feelsLike)

    let minTemp ="Minimum Temperature " + Math.ceil(data.main.temp_min) + "'F" ;
    $('#minTemp').text(minTemp)

    let maxTemp ="Maximum Temperature " + Math.ceil(data.main.temp_max) + "'F" ;
    $('#maxTemp').text(maxTemp)

    let humidity ="Humidity " + data.main.humidity ;
    $('#humidity').text(humidity)

    let clouds = data.clouds.all ;
    if(clouds <= 50 ){
        var cloudsType = "Light Clouds" ;
    } else {
        var cloudsType = "Dense Clouds" ;
    }
    $('#cloudsType').text(cloudsType)

    let windSpeed ="Speed " + data.wind.speed + "ms" ;
    $('#windSpeed').text(windSpeed)

    let windDirection ="Direction " + data.wind.deg + "deg" ;
    $('#windDirection').text(windDirection)
});