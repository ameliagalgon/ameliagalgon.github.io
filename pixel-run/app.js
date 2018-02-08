var level = 1;
var score = 0;
var finalscore = 0;
var interval;
var levelupInterval;
var endofgame = false;

$(document).ready(function(){
    //set the home page to display
    addActionHandlers();
    $("#homepage").addClass("active");
    
});

function addActionHandlers(){
    $("#play").click(function(){
        $currentPage = $(".active");
        $nextPage = $("#game");
        
        $currentPage.fadeOut(0).removeClass("active");
        $nextPage.fadeIn(0).addClass("active");
        score = 0;
        level = 1;
        playgame();
    });
    $("#playAgain").click(function(){
        $currentPage = $(".active");
        $nextPage = $("#game");
        
        $currentPage.fadeOut(0).removeClass("active");
        $nextPage.fadeIn(0).addClass("active");
        score = 0;
        level = 1;
        playgame();
    });
    $("#back").click(function(){
       $currentPage = $(".active");
       $nextPage = $("#homepage");
       /*
       if($currentPage.hasClass("active")){
           alert("BITCH");
       }
       */
       $currentPage.fadeOut(0).removeClass("active");
       $nextPage.fadeIn(0).addClass("active");
    });
}

function playgame(){
    endofgame = false;
    setInterval(updateValues, 1);
    var hero = $("#game #player");
    interval = setInterval(triggerEnemy, 2000);
    levelupInterval = setInterval(function(){
        level = level + 1; //increase the level
        clearInterval(interval);
        interval = setInterval(triggerEnemy, 2000 / level);
    }, 30000);
    //get the center of the player
    var center = hero.width()/2;
    //track where the x position of the click/touch
    //using mousemove right now
    $(document).mousemove(function(e){
        var x = e.pageX;
        hero.css("left", x - center);
    });
}

function triggerEnemy(){
   //create an enemy
   var enemy = $("<div id='enemy'></div>");
   //randomly select an x position;
   var xpos = Math.floor(Math.random() * ($(window).width() - 25));
   enemy.css("display", "block");
   enemy.css("left", xpos);
   $("body #game").append(enemy);
   //enemy.addClass("falling"); //this will make the element look like it is falling
   //need to remove the enemy after the animation is complete
   //enemy.delay(5000).remove();
   enemy.animate({'top':'100vh'}, 4000 / level, "linear", function() {
    // Animation complete.
        $(this).remove();
        if(!endofgame){
            score += 100;
        }
    });
    //test collision
    setInterval(function(){
        if(collision($("#game #player"), enemy)){
            //go to the end game page
            endgame();
        }
    }, 1);
}

function endgame(){
    endofgame = true;
    $("#game").remove("#enemy");
    clearInterval(interval);
    clearInterval(levelupInterval);
    finalscore = score;
    $("#game").fadeOut(0).removeClass("active");
    $("#endgame").fadeIn(0).addClass("active");
    $("#scoreDisNum").text(finalscore);
}

function updateValues(){
    //$("#levelNum").html(level);  i don't wanna show the level
    $("#scoreNum").html(score);
}

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
        
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}