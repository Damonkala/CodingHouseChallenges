white = true;
black = false;
$(document).ready(function(){
    $('div').click(function(){
        if (white === true) {
            $('body').css("background-color", "black");
            $('div').css("color", "white");
            black = true;
            white = false;
    } else if (black === true){
        $('body').css("background-color", "white");
            $('div').css("color", "black");
            white = true;
            black = false;
    }
    });
});
