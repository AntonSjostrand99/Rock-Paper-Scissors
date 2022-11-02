const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const playerScore = document.querySelector(`.scoreboard .p-counter`);
const compScore = document.querySelector(`.scoreboard .c-counter`);   
let userChoice
let computerChoice
let result
let pScore = 0;
let cScore = 0;




possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

 /*  count = count + 1;
  counter.innerHTML = count
 */
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  updateScore()
}))

function generateComputerChoice() {
   
   const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'Sten'
 
  }
  if (randomNumber === 2) {
    computerChoice = 'Sax'
  
  }
  if (randomNumber === 3) {
    computerChoice = 'Påse'
   
  }
  computerChoiceDisplay.innerHTML = computerChoice
}


 function updateScore () {

    const playerScore = document.querySelector(`.scoreboard .p-counter`);
    const compScore = document.querySelector(`.scoreboard .c-counter`);   
    playerScore.innerText = pScore;
    compScore.innerText = cScore;


};
  

function getResult() {
  if (computerChoice === userChoice) {
    result = 'De blev oavgjort'
  }
  if (computerChoice === 'Sten' && userChoice === "Påse") {
    result = 'Du vann!'
    pScore + 1;
   
    
  }
  if (computerChoice === 'Sten' && userChoice === "Sax") {
    result = 'Du förlorade!'
    cScore + 1;
  
  }
  if (computerChoice === 'Påse' && userChoice === "Sax") {
    result = 'Du vann!'
    pScore + 1;
    
  }
  if (computerChoice === 'Påse' && userChoice === "Sten") {
    result = 'Du förlorade!'
    cScore + 1;
    
  }
  if (computerChoice === 'Sax' && userChoice === "Sten") {
    result = 'Du vann!'
    pScore + 1;
   
  }
  if (computerChoice === 'Sax' && userChoice === "Påse") {
    result = 'Du förlorade!'
    cScore + 1;
    
  }
  resultDisplay.innerHTML = result
  playerScore.innerText = pScore;
  compScore.innerText = cScore;


}

