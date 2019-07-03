const Obj = require("./person");
// obj = reference to the programmer class

let p1 = new Obj("Sally", 27, "Node JS");
let p2 = new Obj("Bucky", 29, "React JS");

p1.displayPersonalDetails();
p1.displayLanguage();

p2.displayPersonalDetails();
p2.displayLanguage();
