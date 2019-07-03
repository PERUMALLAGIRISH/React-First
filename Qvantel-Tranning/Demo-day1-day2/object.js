// literal syntax
var circle = {
  radius: 1,

  location: {
    x: 1,
    y: 1
  },

  draw: function() {
    console.log(`Circle is drawn...`);
  }
};
circle.draw();

// factories:
function createCircle(radius) {
  // return an object = factory
  return {
    radius,
    draw: function() {
      console.log(`Circle is drawn with factory...`);
    }
  };
}

var c1 = createCircle(1);
c1.draw();

// constr function
function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log(`Circle is drawn with contr function...`);
  };
}

var c2 = new Circle(1);
// {}. the this keyword is now pointing to the empty object
c2.draw();

// protypical inheritance
function Student() {
  this.name = "John";
  this.gender = "Male";
}

Student.prototype.age = 15;

var s1 = new Student();

console.log(`Age ${s1.age}`);

var s2 = new Student();
console.log(`Age ${s2.age}`);

console.log(Student.prototype);
console.log(s1.prototype); 
console.log(s1.__proto__);
