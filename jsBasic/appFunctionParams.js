const name = "David";

function party() {
  console.log("Party Time!");
  console.log("Party Time!");
  console.log("Party Time!");
  console.log("Party Time!");
  console.log("Party Time!");
}

function adder(text) {
  const uppercased = text.toUpperCase();
  console.log(uppercased);
}

const lowerCase = () => {
  console.log("My Lower Case");
  console.log("My Lower Case");
  console.log("My Lower Case");
};

// FUNCTION DECLARATION
function add1(x, y) {
  return x + y;
}

// Call the function
const result1 = add1(4, 5);

// FUNCTION EXPRESSION
const add2 = function (x, y) {
  return x + y;
};

// Call the function
const result2 = add2(2, 3);

// ARROW FUCTION
const add3 = (x, y) => {
  return x + y;
};

// Call the function
const result3 = add3(2, 3);

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
(function (x, y) {
  // Code here
})(2, 3);

// HIGHER ORDER FUNCTIONS
function higherOrderFunction(callback) {
  // Code here
  callback();
}

// Call the function
higherOrderFunction(function () {
  // Callback function code here
});
