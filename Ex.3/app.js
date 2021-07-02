//prettier-ignore
const daysOfTheWeek=['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
//prettier-ignore
const hoursPerDay = prompt('Introduceti numarul de ore dormite pentru fiecare zi a saptamanii, separate prin virgula').split(',').map((element) => parseInt(element));

const getSleepHours = (day) => {
  day = day.toLowerCase();
  //prettier-ignore
  switch (day) {
    case daysOfTheWeek[0]: return hoursPerDay[0]; break;
    case daysOfTheWeek[1]: return hoursPerDay[1]; break;
    case daysOfTheWeek[2]: return hoursPerDay[2]; break;
    case daysOfTheWeek[3]: return hoursPerDay[3]; break;
    case daysOfTheWeek[4]: return hoursPerDay[4]; break;
    case daysOfTheWeek[5]: return hoursPerDay[5]; break;
    case daysOfTheWeek[6]: return hoursPerDay[6]; break;
    defaul: return "You didn't choose a day of the week";
  }
};

const getActualSleepHours = (daysOfTheWeek) => {
  let totalSleepHours = 0;
  for (i = 0; i < 7; i++) {
    totalSleepHours += getSleepHours(daysOfTheWeek[i]);
  }
  return totalSleepHours;
};

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(daysOfTheWeek);
  const idealSleepHours = getIdealSleepHours(9);

  //prettier-ignore
  console.log(`Total sleep hours that you slept: ${actualSleepHours}\nTotal ideal sleep hours: ${idealSleepHours}`);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep: ' + idealSleepHours + ' hours');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} more sleep hours than needed. `);
  } else if (actualSleepHours < idealSleepHours) {
    //prettier-ignore
    console.log(`You should get some rest. You got ${idealSleepHours - actualSleepHours} less sleep hours than needed.`);
  }
};

calculateSleepDebt();
