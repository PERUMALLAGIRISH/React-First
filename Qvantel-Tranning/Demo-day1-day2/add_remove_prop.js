function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = {
    x: 0,
    y: 0
  };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.computeOptimumLocation = function(factor) {
    // logic to calculat optimum location...
  };

  this.draw = function() {
    console.log(`Circle draw--`);
    this.computeOptimumLocation(0.1);
  };
}

var circle = new Circle(10);
circle.location = { x: 1 };
// or
circle["location"] = { x: 1 };

circle.getDefaultLocation();

delete circle.location;

// Enumerate over the keys in a circle...
// properties of the object. methods as well
for (var key in circle) {
  console.log(`${key} , ${circle[key]}`);
}
