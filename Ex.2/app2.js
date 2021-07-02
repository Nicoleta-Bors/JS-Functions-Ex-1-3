const userInput = prompt('Choose: ‘rock’, ‘paper’, or ‘scissors’').toLowerCase();

const getUserChoice = (userInput) =>
  userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors'
    ? "You didn't choose ‘rock’, ‘paper’, or ‘scissors’"
    : userInput;

const getComputerChoice = () => {
  //prettier-ignore
  switch (Math.floor(Math.random() * 3)) {
    case 0: console.log('computer choice: rock'); return 'rock'; break;
    case 1: console.log('computer choice: paper'); return 'paper'; break;
    case 2: console.log('computer choice: scissors'); return 'scissors'; break;
  }
};

//another version
const determineWinner = (userChoice, computerChoice) =>
  userChoice === computerChoice
    ? 'Tie'
    : (userChoice === 'rock' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'rock')
    ? 'the computer won'
    : 'the user won';

//prettier-ignore
const playGame = (userInput) => console.log(`user choice: ${getUserChoice(userInput)}\n${determineWinner(userInput, getComputerChoice())}`);

playGame(userInput);
