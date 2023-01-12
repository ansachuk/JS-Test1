let password = "";

do {
  password = prompt("Enter password more 4 litters", "");
} while (password.length < 5);

console.log("Your password:", password);
