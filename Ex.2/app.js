const getUserChoice = (userInput) => {
  if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
    console.log("You didn't choose ‘rock’, ‘paper’, or ‘scissors’");
  } else {
    return userInput;
  }
};

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'the computer won';
    } else {
      return 'the user won';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'the computer won';
    } else {
      return 'the user won';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'the computer won';
    } else {
      return 'the user won';
    }
  }
};

const playGame = () => {
  const userInput = prompt('Choose: ‘rock’, ‘paper’, or ‘scissors’').toLowerCase();

  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  console.log(
    `user choice: ${userChoice}\ncomputer choice: ${computerChoice}\n${determineWinner(
      userChoice,
      computerChoice,
    )}`,
  );
};

playGame();
