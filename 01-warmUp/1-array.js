let arr = [1, 2, 3, [4, 8, 7]];

console.log(arr["3"]); // [ 4, 8, 7 ]
console.log(arr[3][2]); // 7

let obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

console.log(obj.name);
console.log(obj['name']);
console.log(obj['address']['city']);
