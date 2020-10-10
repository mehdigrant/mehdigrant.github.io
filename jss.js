var playing = false;
var score ; /*document.getElementById('scorevalue');*/
var timeRemaining ; /*document.getElementById('timeremainingvalue');*/
var correctAnswer;
var action;
var correctPosition;

// click on the start/reset button

document.getElementById('startreset').onclick = ()=>{
    if (playing==true){
        location.reload();
    }else{
        show("timeremaining");
        playing = true;
        timeRemaining= 10;
        score = 0;
        hide("gameOver");
        document.getElementById('startreset').innerHTML="Reset Game";
        document.getElementById('scorevalue').innerHTML = score ;
        startCountdown();   
        generateQA();
        

    }
}



for(i=1 ; i<=4 ; i++){
    
    document.getElementById("box"+i).onclick=function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                generateQA();
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                show("correct")
                setTimeout(()=>{hide("correct");}, 1000);   
            }else{
               show("wrong")
               setTimeout(()=>{hide("wrong")}, 1000);
            }
        }
    }
}



startCountdown = ()=>{
    action = setInterval(()=>{
        timeRemaining--;
        document.getElementById('timeremainingvalue').innerHTML= timeRemaining;
    if(timeRemaining == "0"){
        stopCountdown();
        show("gameOver");
        document.getElementById('gameOver').innerHTML="<p>Game over</p></be><p>you score is: "+score+"<p>";
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById("startreset").innerHTML = "Start Game";
    }
    } , 1000);
};

stopCountdown = ()=>{
    clearInterval(action);
}

generateQA = ()=>{
    var X = 1+Math.round(9*Math.random());
    var Y = 1+Math.round(9*Math.random());
    correctAnswer = X*Y ; 
    correctPosition = 1+Math.round(3*Math.random());
    console.log(correctPosition , correctAnswer );
    document.getElementById('box' + correctPosition).innerHTML = correctAnswer;
    document.getElementById("question").innerHTML = X + " X " + Y ;
    for(i=1; i<=4 ; i++){
        if(i != correctPosition){
        console.log(i);
        var wrongAnswer = Math.round(99*Math.random());
        document.getElementById('box' + i).innerHTML = wrongAnswer;
        }
    }
}

show = element => {document.getElementById(element).style.display = 'inline';};
hide = element => {document.getElementById(element).style.display = 'none';};
