const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("We got the user.");
    //resolve({ user: "Gordon" });
    reject(new Error("User not logged in"));
  }, 3000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err.msg);
  });
