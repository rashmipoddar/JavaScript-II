// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let adder = (num) => {
  return function(num2) {
    return num + num2;
  }
}

let add10 = adder(10);
// console.log(add10);
console.log(add10(5));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let count = 0;
  return counter = () => count += 1;

  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker();
console.log(myCounter());
console.log(myCounter());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMakerLimit = (limit) => {
  let count = 0;
  return counter = () => {
    count += 1;
    if (count > limit) {
      count = 1;
      return count;
    }
    return count;
  }
}

const myCounterLimit = counterMakerLimit(3);
console.log(myCounterLimit());
console.log(myCounterLimit());
console.log(myCounterLimit());
console.log(myCounterLimit());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() { 
      count += 1;
      return count;
    }, 
    decrement: function() {
      count -= 1;
      return count;
    }
  };
};

const myCounterFactory = counterFactory();
console.log(myCounterFactory);
console.log(myCounterFactory.increment());  
console.log(myCounterFactory.increment());
console.log(myCounterFactory.increment());
console.log(myCounterFactory.increment());
console.log(myCounterFactory.decrement());
console.log(myCounterFactory.decrement());
console.log(myCounterFactory.decrement());
console.log(myCounterFactory.decrement());
console.log(myCounterFactory.decrement());