const days = Number(prompt("How many days?"));
const hours = Number(prompt("How many hours?"));
const minutes = Number(prompt("How many minutes?"));

const daysToMinutes = days * 1440;
const hoursToMinutes = hours * 60;

const totalMinutes = daysToMinutes + hoursToMinutes + minutes;
console.log(`You have ${totalMinutes} minutes!`);
