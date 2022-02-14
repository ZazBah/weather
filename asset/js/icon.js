function getIcon(type){

    if(type == 'Clear'){
        $('#iconType').attr('class', 'ri-sun-line');
    } else if(type == 'Snow'){
        $('#iconType').attr('class', 'ri-snowy-line');
    }else if(type == 'Clouds'){
        $('#iconType').attr('class', 'ri-cloud-line');
    }else if(type == 'Dizzy'){
        $('#iconType').attr('class', 'ri-drizzle-line');
    }else if(type == 'Haze'){
        $('#iconType').attr('class', 'ri-haze-fill');
    } else{
        $('#iconType').attr('class', 'ri-rainy-line');
    }
}