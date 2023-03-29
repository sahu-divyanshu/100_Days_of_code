var randomNo1 =  Math.floor(Math.random() * 6) +1;
var diceImage1 = "images/dice" + randomNo1 + ".png"
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImage1);


var randomNo2 = Math.floor(Math.random() *6 ) +1;
var diceImage2 = "images/dice" + randomNo2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",diceImage2);


if(randomNo1 >randomNo2) 
    document.querySelector("h1").innerHTML = "👑Player 1 Wins";
else if(randomNo2 > randomNo1)
    document.querySelector("h1").innerHTML = "Player 2 Wins👑";
else 
    document.querySelector("h1").innerHTML = "DRAW";