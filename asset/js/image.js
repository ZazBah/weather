function getImage(type){

    if(type == 'Clear'){
        $('#imageType').attr('src', 'asset/image/sunny.jpg');
    } else if(type == 'Snow'){
        $('#imageType').attr('src', 'asset/image/Snow.jpg');
    }else if(type == 'Clouds'){
        $('#imageType').attr('src', 'asset/image/Dark.jpg');
    }else if(type == 'Dizzy'){
        $('#imageType').attr('src', 'asset/image/Dizzy.jpg');
    }else if(type == 'Haze'){
        $('#imageType').attr('src', 'asset/image/Haze.jpg');
    }else if(type == 'Rain'){
        $('#imageType').attr('src', 'asset/image/Rain.jpg');
    }else if(type == 'Fog'){
        $('#imageType').attr('src', 'asset/image/Fog.jpg');
    } else{
        $('#imageType').attr('src', 'asset/image/Dark.jpg');
    }
}