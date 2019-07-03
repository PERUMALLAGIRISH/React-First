function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = {
    x: 0,
    y: 0
  };

  this.draw = function() {
    console.log(`Circle draw-- ${this.defaultLocation}`);
  };
}

var circle = new Circle(10);
Object.defineProperty(this, "defaultLocation", {
  get: function() {
    console.log(`getter`);
    return defaultLocation;
  },

  set: function(value) {
    if (!value.x || !value.y) {
      throw new Error(`Invalid location`);
    }
    defaultLocation = value;
  }
});

circle.defaultLocation = 100; // setter
circle.draw();
console.log(`${circle.defaultLocation}`); // getter
