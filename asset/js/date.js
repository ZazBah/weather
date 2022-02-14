function date(){
    let data = new Date();
    let timeArray = data.toLocaleTimeString().split(':');

    let hours = timeArray[0];
    $('#hours').text(hours);

    let minute = timeArray[1];
    $('#minute').text(minute);

    let dayArray = ["Saterday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Fridayday"]
    let dayNumber = data.getDay();
    let day = dayArray[dayNumber];
    $('#day').text(day);

    let date = data.getDate();
    $('#date').text(date)

    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let monthNumber = data.getMonth();
    let month = monthArray[monthNumber];
    $("#month").text(month);

    let year = data.getFullYear();
    $('#year').text(year);
}

setInterval(date, 60000);