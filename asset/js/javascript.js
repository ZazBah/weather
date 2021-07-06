window.onload = function (){
    let countOn = "'F";
    let Scale = 'imperial';
    let City = 'Dhaka';

    dataEntry(City,Scale, countOn)
}

function handleSearch(){
    let countOn = "'F";
    let Scale = 'imperial';
    let inputCity = $('#inputCity').val()
    let City = inputCity;

    dataEntry(City,Scale,countOn)
}

function handleCelTmep(){
    let countOn = "'C";
    let Scale = 'metric';
    let City = $('#city').text()

    dataEntry(City,Scale,countOn)
}

function handleFerTmep(){
    let countOn = "'F";
    let Scale = 'imperial';
    let City = $('#city').text()

    dataEntry(City,Scale,countOn)
}

function dataEntry(City,Scale,countOn){
    let count = countOn;
    
    $.get("https://api.openweathermap.org/data/2.5/weather?q="+ City +"&units="+ Scale +"&appid=9334788e9645c1afc1ad3644bb22e522", function dataSubmit(data){
        var weatherData = {
            "location" : data.name + "," + data.sys.country,
            "city" : data.name,
            "country" : data.sys.country,
            "temperature" : Math.ceil(data.main.temp) + count,
            "icon" : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            "weatherType" : data.weather[0].main,
            "feelsLike" : "Feels Like " + Math.ceil(data.main.feels_like) + count,
            "minTemp" : "Minimum Temperature " + Math.ceil(data.main.temp_min) + count,
            "maxTemp" : "Maximum Temperature " + Math.ceil(data.main.temp_max) + count,
            "humidity" : "Humidity " + data.main.humidity,
            "clouds" : data.clouds.all,
            "windSpeed" : "Speed " + data.wind.speed + "ms",
            "windDirection" : "Direction " + data.wind.deg + "deg"
        }

        dataInput(weatherData)
    });
}

function dataInput(weatherData){
    let city = weatherData.city ;
    $('#city').text(city)

    let country = weatherData.country ;
    $('#country').text(country)

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