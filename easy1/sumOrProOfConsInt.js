const readlineSync = require('readline-sync');
let int;
let operation;
let result = 1;

while(true) {
  int = Number(readlineSync.question('Please enter an integer greater than 0: '));
  
  if (Number.isInteger(int) && int > 0) { break }
  console.log('Invalid input!');
}

while (true) {
  operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  
  if (operation === 's' || operation === 'p') { break }
  console.log('Invalid input.')
}

for (let num = 2; num <= int ; num++) {
    operation === 's' ? result += num : result *= num;
}

console.log(result)