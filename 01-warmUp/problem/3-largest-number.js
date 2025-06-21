//  write a function that returns the largest Number in the array

function largestNumber(arr) {
  //   let largestNum = Number.NEGATIVE_INFINITY;
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

const arr = [1, -8, 2, -78, 3, 4, -5, 6, 7, -9, 10, 11, -12, 17, 18, 19, -20];
const result = largestNumber(arr);
console.log(result);
