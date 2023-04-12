const schedule = ["Wake up", "Eat", "Film a video", "Watch things on netflix"];
schedule.push("Drink liquor"); //add in last
schedule.unshift("Sleep"); // add in first
schedule.pop(); // remove last
schedule.shift(); // remove first
console.log(schedule);
console.log(schedule[3]);
console.log(schedule.indexOf("Eat"));

const film = schedule.indexOf("Film a video");

console.log(film);
console.log(schedule[film]);
