//Audio files
var audioGreen = new Audio("./sounds/green.mp3");
var audioRed = new Audio("./sounds/red.mp3");
var audioYellow = new Audio("./sounds/yellow.mp3");
var audioBlue = new Audio("./sounds/blue.mp3");
var audioWrong = new Audio("./sounds/wrong.mp3");

//buttons
const buttonGreen  = document.getElementById("green");
const buttonRed  = document.getElementById("red");
const buttonYellow  = document.getElementById("yellow");
const buttonBlue  = document.getElementById("blue");

var array =[]
var player_array = []

document.addEventListener("keydown",start);

function start(){
    console.log("start is working");
    document.removeEventListener('keydown', start);
    player_array = [];
    randomButton();
    clickedButton();
    console.log("Player:"+ player_array);
}


function randomButton(){
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    if (randomNumber==1){
        audioGreen.play();
        changeOpacity(buttonGreen);
        array.push(1);
    }
    else if (randomNumber==2){
        audioRed.play();
        changeOpacity(buttonRed);
        array.push(2);
    }
    else if (randomNumber==3){
        audioYellow.play();
        changeOpacity(buttonYellow);
        array.push(3);
    }
    else {
        audioBlue.play();
        changeOpacity(buttonBlue);
        array.push(4);
    }
}

function changeOpacity(btn){
    btn.style.opacity = "0.2";
    setTimeout(() =>{
        btn.style.opacity = "1";
    }, 200);
}

function clickedButton(){
    if (buttonGreen.addEventListener('click',function(){
        audioGreen.play();
        player_array.push(1);
        checker();
    }));

    else if(buttonRed.addEventListener('click',function(){
        audioRed.play();
        player_array.push(2);
        checker();
    }));

    else if(buttonYellow.addEventListener('click',function(){
        audioYellow.play();
        player_array.push(3);
        checker();
    }));

    else if(buttonBlue.addEventListener('click',function(){
        audioBlue.play();
        player_array.push(4);
        checker();
    }));
}

function checker(){
    console.log(`array: ${array}, player: ${player_array}`);
    if (array[player_array.length-1] == player_array[player_array.length-1]){
        if (array.length == player_array.length){
        console.log("round finished")
          setTimeout(function() {
            start();
          }, 1000);
        }
    }
    else{
        endGame();
    }
}

function endGame(){
    audioWrong.play();
    array = [];
    player_array = [];
    document.getElementById("status").innerHTML = "Game Over, Press Any Key to Restart";
    document.body.style.backgroundColor = "red";
    setTimeout(function() {
        document.body.style.backgroundColor = "rgb(19, 1, 83)";
      }, 500);
    document.addEventListener("keydown",start);
}
