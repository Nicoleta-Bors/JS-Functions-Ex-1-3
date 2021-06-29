let raceNumber = Math.floor(Math.random() * 1000) ;
let registeredEarly = false; 
let runnerAge = prompt('Enter your age: ');

if( runnerAge >= 18 && registeredEarly){
  raceNumber += 1000;
}

if ( runnerAge >= 18 && registeredEarly){
  console.log(`Early adults run  at 9:30 am. Your race number is ${raceNumber}`);
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}`);
} else {
  console.log(`Youth registrants run at 12:30 am. Your race number is ${raceNumber}`);
}
