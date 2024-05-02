// random number1 between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// random dice image
var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// random number2 between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

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