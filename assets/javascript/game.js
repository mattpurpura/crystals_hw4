//set target equal=random(19-120) and crystals=random(1-12)
$(document).ready(function() {
    
var target = random (120, 19);
var crystal1 = random(12, 1);
var crystal2 = random(12, 1);
var crystal3 = random(12, 1);
var crystal4 = random(12, 1);
var score = 0;
var wins = 0;
var losses = 0;

//returns a random number between a given max and min
function random(max, min){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetNumbers(array){
    array++;
    score = 0;
    target = random (120, 19);
    crystal1 = random(12, 1);
    crystal2 = random(12, 1);
    crystal3 = random(12, 1);
    crystal4 = random(12, 1);
}

resetNumbers(wins);
console.log(wins);
// console.log(crystal4, crystal1);

// console.log(target)
$("#target").html(target);
$("#score").html(score);
$("#wins").html(wins);
$("#losses").html(losses);
//game begins on click of any button
$(".btn").on("click", function(){
    
    if ($(this).hasClass("btn-1")){
        score += crystal1;
        console.log(score);
    }

    else if ($(this).hasClass("btn-2")) {
        score += crystal2;
        console.log(score);
    }

    else if ($(this).hasClass("btn-3")) {
        score += crystal3;
        console.log(score);
    }

    else if ($(this).hasClass("btn-4")) {
        score += crystal4;
        console.log(score);
    }

    else if ($(this).hasClass("reset")) {
        losses++;
        score = 0;
        target = random (120, 19);
        crystal1 = random(12, 1);
        crystal2 = random(12, 1);
        crystal3 = random(12, 1);
        crystal4 = random(12, 1);
    }

    if (score === target){
        wins++;
        score = 0;
        target = random (120, 19);
        crystal1 = random(12, 1);
        crystal2 = random(12, 1);
        crystal3 = random(12, 1);
        crystal4 = random(12, 1);
    }

    if(score > target){
        losses++;
        score = 0;
        target = random (120, 19);
        crystal1 = random(12, 1);
        crystal2 = random(12, 1);
        crystal3 = random(12, 1);
        crystal4 = random(12, 1);
    }
// console.log("wins:", wins, "losses", losses, "score", score);
    $("#target").html(target);
    $("#score").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
});


});