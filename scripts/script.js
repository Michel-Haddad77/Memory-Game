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
    //add random number to array function
    randomButton();
    clickedButton();
    console.log(player_array);
}


function randomButton(){
    console.log("random is working");
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
    buttonGreen.addEventListener('click',function(){
        audioGreen.play();
        player_array.push(1);
    })

    buttonRed.addEventListener('click',function(){
        audioRed.play();
        player_array.push(2);
    })

    buttonYellow.addEventListener('click',function(){
        audioYellow.play();
        player_array.push(3);
    })

    buttonBlue.addEventListener('click',function(){
        audioBlue.play();
        player_array.push(4);
    })
}
