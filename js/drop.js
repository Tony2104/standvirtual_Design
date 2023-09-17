
$(document).ready(function () {

    let drop = document.querySelector(".drop");

    $('.light').mouseenter(function() {

        $(".light").css({
            "color": "#0071ce",
            "background-color": "white"
        });

        $(drop).show();
        
    }),$(drop).mouseenter(function () {
         
        $(".light").css({
            "color": "#0071ce",
            "background-color": "white"
        });

        $(drop).css("display","block");

    }),$('.light').mouseleave(function() {   

            $(".light").css({
                "color": "black",
                "background-color": "#f5f5f8"
    
            });

            $(drop).hide();

    }),$(drop).mouseleave(function() {   

            $(".light").css({
                "color": "black",
                "background-color": "#f5f5f8"
    
            });
            
            $(drop).hide();

    });
    
})