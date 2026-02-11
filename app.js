// Manual version of the FILTER utility
function myFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// list of array numbers
let arrayOfNumbers = [1, 2, 3, 4];

// funciton for the less then number
let lessThanThreeFunction = (num) => {
  return num < 3;
};

// displaying the filter
console.log(myFilter(arrayOfNumbers, lessThanThreeFunction));

// now here wil recreate the MAP utility
function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

console.log(
  "Mapp result: ",
  myMap(arrayOfNumbers, (num) => num * 2),
);

// here is the reduce utility
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}
console.log(
  "reduce here: ",
  myReduce(arrayOfNumbers, (acc, num) => acc + num, 0),
);
