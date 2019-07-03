// def parameter
function isEqualTo(number, compare = 10, value) {
  console.log(`In func call ${number} and ${compare} and ${value}`);
  return number == compare;
}

console.log(`First variation ${isEqualTo(10, 10)}`);
console.log(`Second variation ${isEqualTo()}`);
console.log(`Third variation ${isEqualTo(10)}`);
console.log(`Fourth variation ${isEqualTo(10, 20, 30)}`);

// Rest operators
let numbers = [10, 20, 30, 40, 50];
function average(...toAdd) {
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  result /= toAdd.length;
  return result;
}

//console.log(`${average(numbers)}`);
console.log(`Second variation-- ${average(100, 200, 300, 400, 500, 600)}`);

// spread operators
console.log(`MAx value from array - ${Math.max(...numbers)}`);
// loop through numbers array and split and spread the values.

let flowers = ["Jasmine", "Lilly", "Rose"];
let fruits = ["Apple", "Kiwi", ...flowers, "Berries"];
console.log(`${fruits}`);
