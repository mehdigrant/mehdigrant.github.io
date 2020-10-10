var playing = false;
var score ;
var trialsleft;
var stopAction ;
var fruits = [ 'banana' , "Bucket" , "Burger" , "Cocaine" , "Coffee" , "Flare" , "Heroin" , "pineapple" , "Watermelon"];
var step ;
var action ;
$(function(){
// click on start button
$("#startreset").click(function(){
    //playing ?
    if(playing==true){
        //reload
        location.reload();
    }else{
        //not playing
        playing = true;
        score = 0;
        $("#scorevalue").html(score);
        //show trials left
        $("#trialsleft").show();
        trialsleft = 3;
        addhearts();
            //change start to reset
        $("#startreset").html("Reset Game");
        startAction();
        $("#gameOver").hide();

    }
        
            
        
})              
//slice a fruit
    //play sound
    //explode fruit
$("#fruit1").mouseover(function() {
    score++;
    $("#scorevalue").html(score);
    document.getElementById("lighterSound").play();
    clearInterval(action);
    $("#fruit1").hide("explode" , 500);
    setTimeout(startAction , 500);
    
})



function addhearts(){
    for(i=0 ; i<trialsleft ; i++) {
    $("#trialsleft").append('<img src="img/heart.png" class="heartI">');}
};

function removeHeart() {
    trialsleft-- ;
    $("#trialsleft").empty();
    addhearts();
}


function startAction(){
    // $("#fruitContainer").append('<img src="img/fruits/Flare.png" class="fruits">')    
    //1.creat random fruit
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left': Math.round(550*Math.random()) , 'top':-100});
    //define random step
    step = 1+Math.round(5*Math.random())
    //2.move fruit down on step every 30sec
    action = setInterval(function() {$("#fruit1").css('top' , $("#fruit1"). position().top + step )
    //fruit too low ?!
        if( $("#fruit1"). position().top > $("#fruitContainer").height() ){
            
        //yes-> any trials left
            if(trialsleft > 1){
                $("#fruit1").show();
                chooseFruit();
                $("#fruit1").css({'left': Math.round(550*Math.random()) , 'top':-100});
                //define random step
                step = 1+Math.round(5*Math.random())
                removeHeart() ;
                
            }else{
                //game over
                playing = false ;
                $("#gameOver").show();
                $("#trialsleft").hide();
                $("#startreset").html("Start Game");
                $("#scoreplace").html(score);
                stopAction();
                removeHeart() ;
                
            }
        }
        } , 10)
}

//creat random fruit
function chooseFruit() {
    $("#fruit1").attr('src' , 'img/fruits/'+ fruits[Math.round(8*Math.random())] +'.png');
}

function stopAction(){    
    clearInterval(action);
    $('#fruit1').hide();
}


///////////////////
});

