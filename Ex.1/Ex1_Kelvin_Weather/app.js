const Kelvin = 293; //The forecast today is 293 Kelvin.
let Fahrenheit;

//long version

// const kelvinToFahrenheit = (Kelvin) => {
//   const Celsius = Kelvin - 273; //from Kelvin in Celsius
//   Fahrenheit = Math.floor(Celsius * (9 / 5) + 32); //from Celsius in Fahrenheit + for getting a decimal number
//   return Fahrenheit;
// };

//short version

const kelvinToFahrenheit = (Kelvin) => Math.floor((Kelvin - 273) * (9 / 5) + 32);

Fahrenheit = kelvinToFahrenheit(Kelvin);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
console.log(`${Kelvin} degrees Kelvin = ${Fahrenheit} degrees Fahrenheit`);
