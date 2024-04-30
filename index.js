// random number between 1 and 6
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 7;
randomNumber1 = Math.floor(randomNumber1);

// random dice image
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);