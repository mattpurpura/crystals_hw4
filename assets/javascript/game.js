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

function random(max, min){
   return Math.floor(Math.random() * (max - min) + min);
}

// console.log(crystal4, crystal1);
//game begins on click of any button
console.log(target)
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

});




});