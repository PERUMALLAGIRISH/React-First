var x = 10;
var y = x;
x = 20;
console.log(`x ${x} and y ${y}`);
//x and y are independent variables.

var a = { value: 10 };
var b = a;

a.value = 20;
console.log(`a ${a.value} and ${b.value}`);

var obj = { value: 10 };

function increase(obj) {
  obj.value++;
} // scoped to the func...independent copy

increase(obj);

console.log(`number ${obj.value}`);
