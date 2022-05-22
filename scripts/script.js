var audio_y = new Audio("./sounds/yellow.mp3");
var audio_gr = new Audio("./sounds/green.mp3");
var audio_bl = new Audio("./sounds/blue.mp3");
var audio_red = new Audio("./sounds/red.mp3");
var audio_wrong = new Audio("./sounds/wrong.mp3");



document.getElementById("green").addEventListener("click",() => {
    audio_gr.play();
});


