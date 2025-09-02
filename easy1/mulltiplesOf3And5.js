function multisum(num) {
  let result = [];

  for (let count = 3; count <= num; count += 3) {
    result.push(count);
  }

  for (let count = 5; count <= num; count += 5) {
    if(!result.includes(count)) {
      result.push(count)
    }    
  }

  return result.reduce((acc, cur) => acc + cur);
}
