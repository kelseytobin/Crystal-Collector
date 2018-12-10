//make crystal values available to all functions
var crystal1 = "";
var cyrstal2 = "";
var crystal3 = "";
var crystal4 = "";

//function that makes other functions available after doucument is loaded-what needs to happen before the user can start playing
$(document).ready(function(){
   
  //create the random number var and random number forumla, setting max number that could be generated to 50
  var randomNumber = Math.floor(Math.random() * 50) + 1;
  
  //insert into random-number div
  $("#number-text").text(randomNumber);
  
  //1st crystal process-generate/assign/hide
  crystal1 = Math.floor(Math.random() * 9) +1;
  $("#crystal1").data("crystal1");
  $("crystal1").hide("crystal1");
  
  //2nd crystal procss-generate/assign/hide
  crystal2 = Math.floor(Math.random() * 9) +1;
  $("#crystal2").data("crystal2");
  $("crystal2").hide("crystal2");
  
  //3rd crystal process-generate/assign/hide
  crystal3 = Math.floor(Math.random() * 9) +1;
  $("#crystal3").data("crystal3");
  $("#crystal3").hide("crystal3");
  
  //4th crystal process-generate/assign/hide
  crystal4 = Math.floor(Math.random() * 9) +1;
  $("#crystal4").data("crystal4");
  $("crystal4").hide("crystal4");
  
});

//game is ready to be played
