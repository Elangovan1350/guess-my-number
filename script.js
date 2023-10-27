'use strick';
const again = document.getElementsByClassName('again');
const number = document.getElementsByClassName('number');
const guess = document.getElementsByClassName('guess');
const check = document.getElementsByClassName('check');
const message = document.getElementsByClassName('message');
const score = document.getElementsByClassName('score');
const highscore = document.getElementsByClassName('highscore');

let randomNumber = randomNumberGenerator();
let scoreNumber = 20;
let highScoreNumber =Number(localStorage.getItem("highScore")) || 0 ;
highscore[0].textContent=highScoreNumber

function checkResult () {
    let guessedNumber = Number(guess[0].value);
    if (isNaN(guessedNumber) || guessedNumber <= 0 || guessedNumber > 20) {
      messageData('INVALID NUMBER , Enter the number between 1 to 20');
      guess[0].value = '';
      return;
    }
    if (randomNumber == guessedNumber) {
      number[0].textContent = randomNumber;
      messageData('GUESS CORRECT');
      if (highScoreNumber < scoreNumber) {
        highScoreNumber = scoreNumber;
        localStorage.setItem('highScore', highScoreNumber.toString());
        highscore[0].textContent = highScoreNumber;
      }
    } else if (randomNumber > guessedNumber) {
      messageData('TOO LOW');
      scoreNumber--;
      score[0].textContent = scoreNumber;
    } else {
      messageData('TOO HIGH');
      scoreNumber--;
      score[0].textContent = scoreNumber;
    }
  
    guess[0].value = '';
  }

check[0].addEventListener('click', checkResult);
guess[0].addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        checkResult()
    }
})

again[0].addEventListener('click', () => {
  messageData('Start guessing...');
  scoreNumber = 20;
  score[0].textContent = 20;
  randomNumber = randomNumberGenerator();
  number[0].textContent = '?';
  guess[0].value = '';
  console.log(randomNumber);
});

console.log(randomNumber);

function messageData(e) {
  message[0].textContent = e;
}

function randomNumberGenerator() {
  return Math.ceil(Math.random() * 20);
}
