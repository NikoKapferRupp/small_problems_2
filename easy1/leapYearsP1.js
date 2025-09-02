function isLeapYear(year) {

  if (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100)) {
    return true;
  }
  if (isDivisibleBy(year, 100) && isDivisibleBy(year, 400)) {
    return true;
  }
  return false;
}

function isDivisibleBy(num, div) {
  return num % div === 0;
}

