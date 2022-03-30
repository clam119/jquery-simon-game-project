var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}





$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function animatePress(currentColour) {
    $(this).addClass(pressed);
    
}

// $(".btn").on("click", nextSequence);
