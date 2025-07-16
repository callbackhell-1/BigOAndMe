function countDigit(num) {
  if (num == 0) return 1;

  // handle negative number
  num = Math.abs(num);

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let result = countDigit(-125);
console.log(result);
