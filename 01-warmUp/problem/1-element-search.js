// write a function that searches for an element in an array and returns its index, if element is not found return -1

const arr = [1, 8, 2, 78, 3, 4, 5, 6, 7, 9, 10, 11, 12, 17, 18, 19, 20];

function elementSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return - 1;
}

const indexOfElement = elementSearch(arr, 8);
console.log(indexOfElement); // 1
