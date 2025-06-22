//  write a function that returns the 2nd largest Number in the array

const secondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
if(arr.length<2){
  return null;
}

    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const arr = [1, -8, 2, -78, 3, 4, -5, 6, 7, -9, 10, 11, -12, 17, 19, 19, -20];
const result = secondLargest(arr);
console.log(result);
