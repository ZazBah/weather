function handleSearch(){
    let city = $('#inputBox').val();

    getData(city);
    handleLocations(city);
    
}

function handlePlace1(){
    let city = $('#location1').text();

    getData(city);
}

function handlePlace2(){
    let city = $('#location2').text();

    getData(city);
}

function handlePlace3(){
    let city = $('#location3').text();

    getData(city);
}

function handlePlace4(){
    let city = $('#location4').text();

    getData(city);
}