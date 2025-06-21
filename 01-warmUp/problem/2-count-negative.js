// write a function that returns the count of negative numbers in an array
const arr = [1, -8, 2, -78, 3, 4, -5, 6, 7, -9, 10, 11, -12, 17, 18, 19, 20];

const countNegative = (arr) => {
  let countOfNegative = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countOfNegative++;
    }
  }
  return countOfNegative;
};

let result = countNegative(arr);
console.log(result);
