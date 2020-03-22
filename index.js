var randomNumber1 = generateRandomNumber();
var randomNumber2 = generateRandomNumber();

function generateRandomNumber(){
  return Math.floor(Math.random() * 6) + 1;
}

function setImage(){
  document.querySelector('.img1').setAttribute('src', "images/" + "dice" + randomNumber1 + ".png");
  document.querySelector('.img2').setAttribute('src', "images/" + "dice" + randomNumber2 + ".png");
}

document.onload = setImage();
decideWinner();

function decideWinner(){

  if(randomNumber1 > randomNumber2){
    //player1 wins
    document.querySelector('h1').innerText = "Player 1 Wins!";
  } else if(randomNumber1 < randomNumber2){
    //player2 wins
    document.querySelector('h1').innerText = "Player 2 Wins!";
  } else {
    //draw
    document.querySelector('h1').innerText = "Draw!";
  }



}
