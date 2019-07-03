let result1 = [1, 3, 4, 2, 5].filter(x => {
  return x > 3;
});
console.log(`${result1}`);

// es6
let result = [1, 3, 4, 2, 5].find(x => {
  return x > 3;
});

console.log(`${result}`);
