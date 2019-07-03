let fn = function() {
  console.log("Hello--");
};

fn();

// Arrow functions, paired with async calls. Anonymous function

let fn2 = x => {
  console.log(`Value of x ${x}`);
  console.log(`Current context ${this}`);
};

fn2(10);

let fn3 = (a, b) => {
  return a + b;
};

console.log(fn3(3, 4));

setTimeout(() => {
  console.log(`In set time out functionality--`);
}, 1000);
