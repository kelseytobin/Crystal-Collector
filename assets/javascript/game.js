//make crystal values available to all functions
var crystal1 = 0;
var cyrstal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var totalScore = 0;
var randomNumber = "";

//function that makes other functions available after doucument is loaded-what needs to happen before the user can start playing
$(document).ready(function() {
  //create the random number var and random number forumla, setting max number that could be generated to 50
  randomNumber = Math.floor(Math.random() * 100) + 1;

  //insert into random-number div
  $("#number-text").text(randomNumber);

  //1st crystal process-generate/assign/hide
  crystal1 = Math.floor(Math.random() * 11) + 1;
  $("#crystalbutton1").data("crystal1");
  $("crystal1").hide("crystal1");
  
  console.log(crystal1);

  //2nd crystal procss-generate/assign/hide
  crystal2 = Math.floor(Math.random() * 11) + 1;
  $("#crystalbutton2").data("crystal2");
  $("crystal2").hide("crystal2");

  //3rd crystal process-generate/assign/hide
  crystal3 = Math.floor(Math.random() * 11) + 1;
  $("#crystalbutton3").data("crystal3");
  $("#crystal3").hide("crystal3");

  //4th crystal process-generate/assign/hide
  crystal4 = Math.floor(Math.random() * 11) + 1;
  $("#crystalbutton4").data("crystal4");
  $("crystal4").hide("crystal4");
});

//game is ready to be played

//creat crystal 1 click function
$("#crystalbutton1").click("click", function() {
  //add crystal1 value to total score var
  totalScore += crystal1;
  $("#score-text").text(totalScore);
});

//crystal 2 click function
$("#crystalbutton2").click("click", function() {
  totalScore += crystal2;
  $("#score-text").text(totalScore);
});


//crystal 3 click function
$("#crystalbutton3").click("click", function() {
  totalScore += crystal3;
  $("#score-text").text(totalScore);
});

//crystal 4 click function
$("#crystalbutton4").click("click", function() {
  totalScore += crystal4;
  $("#score-text").text(totalScore);
});

//create win-lose function