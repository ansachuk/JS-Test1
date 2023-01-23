// Напишіть через світч калькулятор
// Потрібно ввести перше число в prompt, потім математичну операцію
// Тоді ввести наступне число

const firstNumber = prompt("Enter first number:");
const secondNumber = prompt("Enter second number:");
const operation = prompt("Enter +,-,*,/");

let result = 0;

switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;

  case "-":
    result = firstNumber - secondNumber;
    break;

  case "*":
    result = firstNumber * secondNumber;
    break;

  case "/":
    result = firstNumber / secondNumber;
    break;

  default:
    console.log("Error");
}

// console.log(result);

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// do {
//   let number = prompt("Enter number bigger 100:");
//   if (number > 100 || number === null) {
//     console.log(number);
//     break;
//   }
// } while (true);
