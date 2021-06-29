const Kelvin = 293; //The forecast today is 293 Kelvin.
const Celsius = 273 - Kelvin; //from Kelvin in Celsius
let Fahrenheit = Celsius * (9/5) + 32; //from Celsius in Fahrenheit

Fahrenheit = Math.floor(Fahrenheit); //for getting a decimal number

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
console.log(`${Kelvin} degrees Kelvin = ${Celsius} degrees Celsius = ${Fahrenheit} degrees Fahrenheit`);