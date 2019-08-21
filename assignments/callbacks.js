// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

let getArrayLength = length => `The length of the array is ${length}`;

const test1 = getLength(items, getArrayLength);
console.log(test1);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

const test2 = last(items, item => {
  return `The last item in the array is ${item}`;
})
console.log(test2);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

const test3 = sumNums(4, 5, sum => `The sum is ${sum}`);
console.log(test3);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}

const test4 = multiplyNums(2, 3, product => `The product is ${product}`);
console.log(test4);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i] === item) {
  //     return cb(true);
  //   }
  // }
  // return cb(false);
  return cb(list.includes(item));
}

const test5 = contains('yoyo', items, boolean => `The item is included in the list ${boolean}`);
console.log(test5);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  // let uniqueArray = [];
  // for (let i = 0; i < array.length; i++) {
  //   if(uniqueArray.indexOf(array[i]) === -1) {
  //     uniqueArray.push(array[i]);
  //   }
  // }
  // return cb(uniqueArray);
  let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
  return cb(uniqueArray);
}

let originalArray = [1,2,4,1,3,2,5];
let test6 = removeDuplicates(originalArray, array => array);
console.log(originalArray);
console.log(test6);