const readlineSync = require('readline-sync');
const SQMETERS_IN_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:')
let length = readlineSync.prompt();

console.log('Enter the width of the room in meters:')
let width = readlineSync.prompt('Enter the width of the room in meters:')

let areaMeter = (length * width).toFixed(2);
let areaFeet = (areaMeter * SQMETERS_IN_SQFEET).toFixed(2);

console.log(`The area of the room is ${areaMeter} square meters (${areaFeet})`);