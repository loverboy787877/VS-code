// Object
const user = {
  name: "France", // Properties
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"],

  sayName: function () {
    console.log(this.name);
  },
};

user.sayName();

function sayMyAge() {
  console.log(`My age is ${this}`);
}

sayMyAge();
