// random number1 between 1 and 6
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

// random dice image
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// random number2 between 1 and 6
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// changes the text in h1 with respect to player that got a higher dice number.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "🚩Its a Draw!🚩";
}