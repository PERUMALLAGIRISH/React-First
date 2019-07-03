let names = new Set();
names.add("Jack");
names
  .add("Jill")
  .add("Jane")
  .add("Jessica")
  .add("Justin");

console.log(names);

console.log(names.delete("Jane"));

for (let name of names) {
  console.log(name);
}

