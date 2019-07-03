class Person1 {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayPersonalDetails() {
    console.log(`${this.name} and ${this.age}`);
  }
}

export class Programmer1 extends Person1 {
  language;

  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  displayLanguage() {
    console.log(`${this.language}`);
  }
}
