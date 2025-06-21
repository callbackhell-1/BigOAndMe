//  write a function that returns the smallest Number in the array

const smallestNumberInArray = (arr) => {
  let smallestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
};

const arr = [1, -8, 2, -78, 3, 4, -5, 6, 7, -9, 10, 11, -12, 17, 18, 19, -20];
const result = smallestNumberInArray(arr);
console.log(result);
