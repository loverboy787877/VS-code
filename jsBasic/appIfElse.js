/*const age = 16;

if (age >= 22) {
  console.log("You are good to go!");
} else if (age <= 10) {
  console.log("Wow you are really young..why are you even here");
  // it's recommended to use the === operator for equality comparisons in JavaScript, as it avoids unexpected results due to type coercion.
} else if (age === 21) {
  console.log("your height is as is");
} else {
  console.log("You are not old enough");
}*/

const dice1 = 6;
const dice2 = 3;
// and operator
if (dice1 === 6 && dice2 === 6) {
  console.log("You rolled a double 6s");
} else {
  console.log("You didn't");
}

// or operator
if (dice1 === 6 || dice2 === 6) {
  console.log("You rolled a double 6s");
} else {
  console.log("You didn't");
}
