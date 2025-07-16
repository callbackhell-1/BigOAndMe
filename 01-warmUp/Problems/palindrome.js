//https://leetcode.com/problems/palindrome-number/

function palindrome(num) {
  let originalNum = num;

  let revNum = 0; // inf not 0 then it will be undefined
  while (num > 0) {
    rem = num % 10;
    revNum = revNum * 10 + rem;
    num = Math.floor(num / 10);
  }
  return revNum == originalNum;
}

console.log(palindrome(121));
