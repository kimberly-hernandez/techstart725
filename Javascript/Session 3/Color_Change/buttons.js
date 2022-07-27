// GETS DOM NODE FOR THE SQUARE
var square = document.getElementById("square");

// GETS DOM NODE FOR EACH BUTTON
var blueButton = document.getElementById("blue-button");
var redButton = document.getElementById("red-button");
var greenButton = document.getElementById("green-button");

// BUTTON EVENT LISTENERS
blueButton.addEventListener("click", function () {
    square.className = "box-style blue-color";
  });
  
  redButton.addEventListener("click", function () {
    square.className = "box-style red-color";
  });
  
  greenButton.addEventListener("click", function () {
    square.className = "box-style green-color";
  });