/*const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Sven"];

/*for (name of names) {
  console.log(`Hello there ${name}`);
}

for (name of names) {
  console.log(name);
  if (name === "Maria") {
    console.log("Maria is in my list!");
    break;
  }
}*/

let loading = 0;

while (loading < 100) {
  console.log("Website is still loading");

  loading++;
}

let count1 = 0;
console.log(count1++); // prints 0
console.log(count1); // prints 1

let count2 = 0;
console.log(++count2); // prints 1
console.log(count2); // prints 1
