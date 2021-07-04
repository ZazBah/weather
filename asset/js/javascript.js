window.onload = function (){
    let City = 'Dhaka'
    dataEntry(City)
}

function handleSearch(){
    let City = $('#inputCity').val()
    dataEntry(City)
}



function dataEntry(City){
    $.get("https://api.openweathermap.org/data/2.5/weather?q="+ City +"&units=imperial&appid=9334788e9645c1afc1ad3644bb22e522", function(data){
        var weatherDataF = {
            "location" : data.name + "," + data.sys.country,
            "temperature" : Math.ceil(data.main.temp) + "'F",
            "icon" : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            "weatherType" : data.weather[0].main,
            "feelsLike" : "Feels Like " + Math.ceil(data.main.feels_like) + "'F",
            "minTemp" : "Minimum Temperature " + Math.ceil(data.main.temp_min) + "'F",
            "maxTemp" : "Maximum Temperature " + Math.ceil(data.main.temp_max) + "'F",
            "humidity" : "Humidity " + data.main.humidity,
            "clouds" : data.clouds.all,
            "windSpeed" : "Speed " + data.wind.speed + "ms",
            "windDirection" : "Direction " + data.wind.deg + "deg"
        }

        var weatherDataC = {
            "location" : data.name + "," + data.sys.country,
            "temperature" : Math.ceil(( data.main.temp - 32 ) * 0.56 ) + "'C",
            "icon" : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            "weatherType" : data.weather[0].main,
            "feelsLike" : "Feels Like " + Math.ceil(( data.main.feels_like - 32 ) * 0.56 ) + "'C",
            "minTemp" : "Minimum Temperature " + Math.ceil(( data.main.temp_min - 32 ) * 0.56 ) + "'C" ,
            "maxTemp" : "Maximum Temperature " + Math.ceil(( data.main.temp_max - 32 ) * 0.56 ) + "'C" ,
            "humidity" : "Humidity " + data.main.humidity,
            "clouds" : data.clouds.all,
            "windSpeed" : "Speed " + data.wind.speed + "ms",
            "windDirection" : "Direction " + data.wind.deg + "deg"
        }

        dataInput(weatherDataC)

    
});
}

function dataInput(weatherData){
    let location = weatherData.location ;
    $('#location').text(location)

    let temperature =  weatherData.temperature;
    $('#temperature').text(temperature)

    let icon = weatherData.icon;
    $('#icon1').attr('src', icon)

    let weatherType =  weatherData.weatherType;
    $('#weatherType').text(weatherType)
 
    let feelsLike = weatherData.feelsLike ;
    $('#feelsLike').text(feelsLike)

    let minTemp = weatherData.minTemp ;
    $('#minTemp').text(minTemp)

    let maxTemp = weatherData.maxTemp ;
    $('#maxTemp').text(maxTemp)

    let humidity = weatherData.humidity ;
    $('#humidity').text(humidity)

    let clouds = weatherData.clouds ;
    if(clouds <= 50 ){
        var cloudsType = "Light Clouds" ;
    } else {
        var cloudsType = "Dense Clouds" ;
    }
    $('#cloudsType').text(cloudsType)

    let windSpeed = weatherData.windSpeed ;
    $('#windSpeed').text(windSpeed)

    let windDirection = weatherData.windDirection ;
    $('#windDirection').text(windDirection)
}