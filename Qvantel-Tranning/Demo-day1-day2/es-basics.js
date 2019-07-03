let age = 27;
console.log(`${age}`);
//age = "Annbelle";
//console.log(`${age}`);

const num = 30;
//num = 31;
console.log(`${num}`);

const AGES = [27, 29, 31];
console.log(`${AGES}`);
AGES.push(25);
console.log(`${AGES}`);

const obj = {
  age: 27
};

obj.age = 30;
console.log(`${obj.age}`);

function myFunction() {
  let x = 5;
  console.log(`${age} and ${x}`);
}

myFunction();
//console.log(`${x}`);

// block scope
{
  var y = 10;
  let z = 30;
}

console.log(`${y} `);

let i = 5;
for (let i = 0; i < 10; i++) {
  console.log(`${i}`);
}

console.log(`Out side for loop ${i}`);
