const userMinutes = Number(prompt("How many minutes you have?"));
const minutes = userMinutes % 60;
const hours = Math.floor(userMinutes / 60);
const hoursFloor = hours % 24;
const days = Math.floor(hours / 24);

console.log(` You have ${days} days, ${hoursFloor} hours, ${minutes} minutes.`);
