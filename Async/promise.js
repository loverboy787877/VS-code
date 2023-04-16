// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("We got the user.");
//     //resolve({ user: "Gordon" });
//     reject(new Error("User not logged in"));
//   }, 3000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err.msg);
//   });

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in the then " + message);
// }).catch((message) => {
//   console.log("This is in the catch " + message);
// });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
