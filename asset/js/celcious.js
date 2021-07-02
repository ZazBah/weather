function handleCelTem(){
    alert("clicked")
    window.onload = function (){
        let City = 'Dhaka'
        dataEntry(City)
    }
    
    function dataEntry(City){
        $.get("https://api.openweathermap.org/data/2.5/weather?q="+ City +"&units=imperial&appid=9334788e9645c1afc1ad3644bb22e522", function(data){
            
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
    
}