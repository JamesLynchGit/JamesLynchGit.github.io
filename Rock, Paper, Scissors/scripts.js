function check() {
  var weapon = document.getElementById("formWeapon").value.toLowerCase();
  var words = ["rock", "paper", "scissors"];
  var randomNum = Math.floor(Math.random() * 3);
  var randomWord = words[randomNum];

  if (weapon === randomWord) {
    document.getElementById("rockPaper").innerHTML = "Draw!";
  } 
  else if (weapon === "rock" && randomWord === "paper") {
    document.getElementById("rockPaper").innerHTML = "You lose!";
  } 
  else if (weapon === "rock" && randomWord === "scissors") {
    document.getElementById("rockPaper").innerHTML = "You win!";
  } 
  else if (weapon === "paper" && randomWord === "scissors") {
    document.getElementById("rockPaper").innerHTML = "You lose!";
  } 
  else if (weapon === "paper" && randomWord === "rock") {
    document.getElementById("rockPaper").innerHTML = "You win!";
  } 
  else if (weapon === "scissors" && randomWord === "rock") {
    document.getElementById("rockPaper").innerHTML = "You lose!";
  } 
  else if (weapon === "scissors" && randomWord === "paper") {
    document.getElementById("rockPaper").innerHTML = "You win!";
  } 
  else {
    alert("Invalid input - please choose rock, paper or scissors.");
  }
}