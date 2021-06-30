let userName = prompt('Your ursername is: ');

userName ? console.log(`Hello ${userName} !`) : console.log('Hello!');

let userQuestion = prompt('Write your question: '); //the question the user wants to ask the Magic Eight Ball

const answerMyQuestion = (userName, userQuestion) => {
  userName
    ? console.log(`The ${userName}'s question is: ${userQuestion}`)
    : console.log(`The question is: ${userQuestion}`);

  let randomNumer = Math.floor(Math.random() * 8);
  let eightBall = '';

  switch (randomNumer) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
    default:
      break;
  }

  return eightBall;
};

console.log(`${answerMyQuestion(userName, userQuestion)}`);
