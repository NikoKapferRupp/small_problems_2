const readlineSync = require('readline-sync');

let bill = Number(readlineSync.question('What is the bill? '));
let percentage = Number(readlineSync.question('What is the tip percentage? '));

let tip = Number((bill / 100 * percentage).toFixed(2));
let total = bill + tip;

console.log(`The tip is $${tip}`)
console.log(`The total is $${total}`)