var Locations = ["London","Rangpur" , "Rajshahi", "Saidpur"];

function handleLocations(city){
    Locations.unshift(city);
    Locations.pop()
    

    $('#location1').text(Locations[0]);
    $('#location2').text(Locations[1]);
    $('#location3').text(Locations[2]);
    $('#location4').text(Locations[3]);
}