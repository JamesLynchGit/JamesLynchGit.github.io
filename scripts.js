var roundsPlayed = 0;
var maxRounds = 3;

function playGame() {
  if (roundsPlayed < maxRounds) {
    var weapon = document.getElementById("formWeapon").value.toLowerCase();
    var words = ["rock", "paper", "scissors"];
    var randomNum = Math.floor(Math.random() * 3);
    var randomWord = words[randomNum];
  
    if (weapon === randomWord) {
      document.getElementById("result").innerHTML = "Draw!";
    } 
    else if (weapon === "rock" && randomWord === "paper") {
      document.getElementById("result").innerHTML = "You lose!";
    } 
    else if (weapon === "rock" && randomWord === "scissors") {
      document.getElementById("result").innerHTML = "You win!";
    } 
    else if (weapon === "paper" && randomWord === "scissors") {
      document.getElementById("result").innerHTML = "You lose!";
    } 
    else if (weapon === "paper" && randomWord === "rock") {
      document.getElementById("result").innerHTML = "You win!";
    } 
    else if (weapon === "scissors" && randomWord === "rock") {
      document.getElementById("result").innerHTML = "You lose!";
    } 
    else if (weapon === "scissors" && randomWord === "paper") {
      document.getElementById("result").innerHTML = "You win!";
    } 
    else {
      alert("Invalid input - please choose rock, paper or scissors.");
    }
    
    roundsPlayed++;
  }
  else {
    alert("You have played the maximum number of rounds.");
  }
}

function BeerSong() {
  var lyrics = "";
  for (var i = 99; i >= 1; i--) {
    if (i <= 1) {
      lyrics += i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.\n";
    } else {
      lyrics += i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.\n";
    }
  }
  return lyrics;
}

document.getElementById("printLyricsButton").addEventListener("click", function() {
  document.getElementById("lyrics").innerHTML = BeerSong();
});
