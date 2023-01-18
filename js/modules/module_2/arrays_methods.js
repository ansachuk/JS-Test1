// Method Join, Split and For...It loop

const string = prompt("Enter your word:");

let newString = "";

const letters = string.split("");
// console.log(letters);

for (const letter of letters) {
  newString +=
    letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase();
}

//ANOTHER OPTION

// for (const letter of letters) {
//   if (letter === letter.toUpperCase()) {
//     newString += letter.toLowerCase();
//   } else {
//     newString += letter.toUpperCase();
//   }
// }

console.log(newString);
