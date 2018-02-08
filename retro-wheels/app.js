$(document).ready(function(){
    //alert("jfdkslf");
    $("#home-page").addClass("active-page");
    doAnimations();
    $("#home").click(function(){
        $currentPage = $(".active-page");
        $nextPage = $("#home-page");
        
        $currentPage.fadeOut(0).removeClass("active-page");
        $nextPage.fadeIn(0).addClass("active-page");
        doAnimations();
    });
    $("#about").click(function(){
        $currentPage = $(".active-page");
        $nextPage = $("#about-page");
        
        $currentPage.fadeOut(0).removeClass("active-page");
        $nextPage.fadeIn(0).addClass("active-page");
        doAnimations();
    });
    $("#bikes").click(function(){
        $currentPage = $(".active-page");
        $nextPage = $("#bikes-page");
        
        $currentPage.fadeOut(0).removeClass("active-page");
        $nextPage.fadeIn(0).addClass("active-page");
        doAnimations();
    });
    $("#services").click(function(){
        $currentPage = $(".active-page");
        $nextPage = $("#services-page");
        
        $currentPage.fadeOut(0).removeClass("active-page");
        $nextPage.fadeIn(0).addClass("active-page");
        doAnimations();
    });
    $("#contactUs").click(function(){
        $currentPage = $(".active-page");
        $nextPage = $("#contact-page");
        
        $currentPage.fadeOut(0).removeClass("active-page");
        $nextPage.fadeIn(0).addClass("active-page");
        doAnimations();
    });
    
    
});


function doAnimations(){
    if($(".active-page").is("#home-page") == false){
        if($(window).width() >= 620)
            $(".active-page").addClass("animated slideInRight"); 
    }/*this slides in the entire page*/
    if($("#home-page").hasClass("active-page")){
        homeAnimation();
    }
    else if($("#bikes-page").hasClass("active-page")){
        bikeAnimation();
    }
    else if($("#about-page").hasClass("active-page")){
        aboutAnimation();
    }
    else if($("#services-page").hasClass("active-page")){
        servicesAnimation();
    }
    else if($("#contact-page").hasClass("active-page")){
        contactAnimation();
    }
}

function homeAnimation(){
    //logo
    $("#home-page img").addClass("animated fadeIn");
    //homepage-paragraph
    $("#home-page p").addClass("animated fadeInUp");
}

function bikeAnimation(){
    //alert("These are bikes");
    if($(window).width() >= 620){
        $("#bikes-page .bike").addClass("animated fadeInUp");
    }
}

function aboutAnimation(){
    //alert("This is all ABOUT ME");
    $("#about-page #textbox p").addClass("animated zoomIn");
    $("#about-page img").addClass("animated slideInUp");
}

function servicesAnimation(){
    //alert("secret services");
    $("#services-page .service").addClass("animated fadeInRight");
}

function contactAnimation(){
    //alert("pickles");
    $("#contact-page img").addClass("animated slideInLeft");
    $("#contact-page p").addClass("animated fadeIn");
}