//Sync code example

/*function otherFunct() {
  console.log("we are in another funct");
  console.log("do some stuff");
}

console.log("Start");
otherFunct();
console.log("End");

//Async code example
console.log("Start");

setTimeout(() => {
  console.log("We are in the Timeout");
}, 2000);

console.log("End");

//Callback function

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data");
    callback({ userEmail: email });
  }, 5000);
}
function getUserVideo(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 3000);
}
function videoDetails(video, callback) {
  setTimeout(() => {
    callback("This is the title");
  }, 3000);
}

const user = loginUser("villaruzranzi@gmail.com", "aliyah22", (user) => {
  console.log(user);
  getUserVideo(user.userEmail, (video) => {
    console.log(video);
    videoDetails(video, (title) => {
      console.log(title);
    });
  });
});

console.log("End");*/

//Refactor the Callback function using promise

console.log("Start!");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 5000);
  });
}
function getUserVideo(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 3000);
  });
}
function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the title");
    }, 3000);
  });
}

// loginUser("villaruzranzi@gmail.com", "aliyah22")
//   .then((user) => getUserVideo(user.userEmail))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

//SYNC (ASYNC AWAIT)
async function displayUser() {
  try {
    const loggedUser = await loginUser("Ranzi", 12345);
    const videos = await getUserVideo(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("We could not get the videos");
  }
}

displayUser();

//console.log("End");

// const yt = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from yt");
//     resolve({ videos: [1, 2, 3, 4, 5] });
//   }, 2000);
// });

// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from fb");
//     resolve({ user: "Name" });
//   }, 3000);
// });

// Promise.all([yt, fb]).then((result) => console.log(result));
