/*tiles are global*/
var tile1 = $('#tile1');
var tile2 = $('#tile2');
var tile3 = $('#tile3');

$(document).ready(function(){
    var scrollImage = $('#about img');
    scrollImage.css({
        "margin-top": "200px"  
    });
    
    if($(window).width() > 1000){
       $('#menu .menu-item').each(function(){
            $(this).addClass('hide'); 
        }); 
    }
        
    
    var winScroll;
    /*All the stuff for scrolling*/
    $(window).scroll(function(){
        winScroll = $(window).scrollTop();
        $("#banner h1").css({
           "transform": "translateY(" + (-winScroll/1.5) + "px)" 
        });
        scrollImage.css({
           "transform": "translateY(" + (-winScroll/4) + "px)" 
        });
        if(winScroll >= 800 && $(window).width() > 1000){
            $('#menu .menu-item').each(function(){
                $(this).addClass('fade').removeClass('hide');
            });
        }
    });
    
});

