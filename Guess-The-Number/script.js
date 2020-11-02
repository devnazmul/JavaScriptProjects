let guesses = [];
let correctNumber = getRandomNumber();
// Listen From User And Response
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}
// Main Game Function
function playGame(){
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}
// Genarate Random Number from 1 to 100
function getRandomNumber(){
  let randomNumber = Math.random();
  let correctNumber = Math.floor(randomNumber * 100 ) + 1;
  return correctNumber;
}
// Genarate Result Text
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}
// Genarate Wining Text
function showYouWon(){
  const text = "Awesome job, you got it!";
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}
// Genarate Guess Too High Text
function showNumberAbove(){
  const text = "Your guess is too high!";
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
// Genarate Guess Too Low Text
function showNumberBelow(){
  const text = "Your guess is too low!";
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
// Display The Result
function displayResult(x){
  if (x < correctNumber){
    showNumberBelow();
  }else if(x > correctNumber){
    showNumberAbove();
  }else{
    showYouWon();
  }
}
// Save Game Story
function saveGuessHistory(guess) {
  guesses.push(guess);
}
// Displaing History
function displayHistory() {
  let index = guesses.length - 1; // TODO
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list += "<li class='list-group-item'>You guessed " + guesses[index]+"</li>";
    index--;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}
// Reset Game
function initGame(){
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";
  guesses = [];
}
