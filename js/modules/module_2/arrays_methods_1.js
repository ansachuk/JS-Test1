// Method Join, Split and For...It loop
//Function and return

// const string = prompt("Enter your word:");

// let newString = "";

// const letters = string.split("");
// // console.log(letters);

// for (const letter of letters) {
//   newString +=
//     letter === letter.toUpperCase()
//       ? letter.toLowerCase()
//       : letter.toUpperCase();
// }

//ANOTHER OPTION

// for (const letter of letters) {
//   if (letter === letter.toUpperCase()) {
//     newString += letter.toLowerCase();
//   } else {
//     newString += letter.toUpperCase();
//   }
// }

const reversCase = function (string) {
  switch (string) {
    case null:
      return "Operation is cancelled!";

    case "":
      return "You not enter a word!";

    default:
      let reversString = "";
      const letters = string.split("");

      for (const letter of letters) {
        reversString +=
          letter === letter.toUpperCase()
            ? letter.toLowerCase()
            : letter.toUpperCase();
      }

      return reversString;
  }
};

console.log(reversCase(prompt("Enter your word:")));
