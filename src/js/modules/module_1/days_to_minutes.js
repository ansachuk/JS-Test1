// const daysToMinutes = days * 1440;
// const hoursToMinutes = hours * 60;

// const totalMinutes = daysToMinutes + hoursToMinutes + minutes;
// console.log(`You have ${totalMinutes} minutes!`);

const transformDaysToMinute = function (days, hours, minutes) {
  days *= 1440;
  hours *= 60;
  return `You have ${days + hours + minutes} minutes!`;
};

const days = Number(prompt("How many days?"));
const hours = Number(prompt("How many hours?"));
const minutes = Number(prompt("How many minutes?"));

console.log(transformDaysToMinute(days, hours, minutes));
