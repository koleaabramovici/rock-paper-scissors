const getUserChoice = (userInput) => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {console.log('Error!')
 }
}

const getComputerChoice = () => {
let mark = Math.floor(Math.random() * 3);
switch(mark){
case 0:
return 'rock';
case 1:
return 'paper';
case 2:
return 'scissors';
 }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'The game is a tie.';

  } else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Won!'
    } else {
      return 'User won!'
    }
  } else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer Won!'
  } else {
      return 'User won!'
    }
  } else if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
      return 'User won!'
    } else {
      return 'Computer won!'
    }
  }
}
const playGame = () =>{
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
  


