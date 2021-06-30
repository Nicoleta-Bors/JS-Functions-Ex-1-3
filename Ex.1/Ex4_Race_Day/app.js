let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = prompt('Enter your age: ');
let time = '';

const raceTime = (runnerAge, registeredEarly) => {
  if (runnerAge >= 18 && registeredEarly) {
    raceNumber += 1000;
  }

  if (runnerAge >= 18 && registeredEarly) {
    time = `Early adults run at 9:30 am. Your race number is ${raceNumber}`;
  } else if (runnerAge >= 18 && !registeredEarly) {
    time = `Late adults run at 11:00 am. Your race number is ${raceNumber}`;
  } else {
    time = `Youth registrants run at 12:30 am. Your race number is ${raceNumber}`;
  }

  return time;
};

console.log(raceTime(runnerAge, registeredEarly));
