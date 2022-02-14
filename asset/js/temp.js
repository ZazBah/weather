function getData(City){
    $.get("https://api.openweathermap.org/data/2.5/weather?q="+ City +"&units=metric&appid=9334788e9645c1afc1ad3644bb22e522", function dataSubmit(data){
        var weatherData = {
            "temperature" : Math.ceil(data.main.temp) + "'c",
            "city" : data.name,
            "weatherType" : data.weather[0].main,
            "icon" : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            "location" : data.name + "," + data.sys.country,
            "clouds" : data.clouds.all + '%',
            "humidity" : data.main.humidity + '%',
            "windSpeed" : data.wind.speed + "m/s",
            "maxTemp" : Math.ceil(data.main.temp_max) + "'c",
            "minTemp" : Math.ceil(data.main.temp_min) + "'c",
        }

        showData(weatherData);
    });
}

function showData(data){
    let temp = data.temperature;
    $('#temp').text(temp);

    let city = data.city;
    $('#city').text(city);

    let weatherType = data.weatherType;
    $('#weatherType').text(weatherType);

    getImage(weatherType);
    getIcon(weatherType);

    let clouds = data.clouds ;
    $('#clouds').text(clouds)


    let humidity  = data.humidity ;
    $('#humidity').text(humidity)

    let windSpeed = data.windSpeed ;
    $('#windSpeed').text(windSpeed)

    let maxTemp = data.maxTemp ;
    $('#maxTemp').text(maxTemp)

    let minTemp = data.minTemp ;
    $('#minTemp').text(minTemp)
}