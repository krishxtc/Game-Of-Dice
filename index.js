var randomNumber1 = Math.floor(Math.random() * 6 + 1);


var randomDiceImage = "dice" + randomNumber1 + ".png";

var imageSource = "Images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

var mainimage1 = image1.setAttribute("src",imageSource)

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2  = "dice" + randomNumber2 + ".png"

var ImageSorce2 = "Images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img") [1];

var mainimage2 = image2.setAttribute("src", ImageSorce2)

if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = ("🚩 Player 1 Win")
}

else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = ("🚩 Player 2 Win")
}

else{
    document.querySelector('h1').innerHTML = ("Game Tie !");
}