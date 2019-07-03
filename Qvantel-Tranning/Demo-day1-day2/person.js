let pp = class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayPersonalDetails() {
    console.log(`${this.name} and ${this.age}`);
  }
};

let prog = class Programmer extends pp {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  displayLanguage() {
    console.log(`${this.language}`);
  }
};

module.exports = prog;
