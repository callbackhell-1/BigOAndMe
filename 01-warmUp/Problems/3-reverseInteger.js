//https://leetcode.com/problems/reverse-integer/

function reverseInteger(n) {
  let originalNum = n;

  // so that it will enter in while loop
  n = Math.abs(n);

  let reverseNum = 0;
  while (n > 0) {
    let rem = n % 10;
    reverseNum = reverseNum * 10 + rem;
    n = Math.floor(n / 10);
  }

  let limit = Math.pow(2, 31);
  if (reverseNum < -limit || reverseNum > limit - 1) return 0;

  return originalNum < 0 ? -reverseNum : reverseNum;
}

console.log(reverseInteger(-1234));
