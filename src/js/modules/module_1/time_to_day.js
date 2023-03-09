// const userMinutes = Number(prompt("How many minutes you have?"));

const transformMinutesToDays = function (userMinutes) {
  const minutes = userMinutes % 60;
  const fullHours = Math.floor(userMinutes / 60);
  const hoursFloor = fullHours % 24;
  const fullDays = Math.floor(fullHours / 24);

  return ` You have ${fullDays} days, ${hoursFloor} hours, ${minutes} minutes.`;
};

const enteredMinutes = Number(prompt("How many minutes you have?"));

console.log(transformMinutesToDays(enteredMinutes));
