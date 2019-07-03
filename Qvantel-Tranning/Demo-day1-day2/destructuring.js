let numbers = [1, 2, 3];
let [a, b] = numbers;
console.log(`a is ${a} and ${b}`);
console.log(`original array is ${numbers}`);

let [c, d, e, f] = numbers;
console.log(`f is ${f}`);

let [g, ...h] = numbers; // using REST
console.log(`h is  ${h}`); // h is a sub-array

let [i, , j] = numbers;
console.log(`i and j are ${i} and ${j}`);
// destrucing is happening via position

// destruture objects. pull out by property Name

// Enhance object properties
let name1 = "Anna";
let age1 = 25;

let obj = {
  name: name1,
  age: age1,
  "greet Me": function() {
    console.log(`Hello--`);
  }
};

let { name } = obj;
console.log(name);
//greet();

obj["greet Me"]();
