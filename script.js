//Задача 1: За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач. Врахувати, що користувач може натиснути cancel або нічого не ввести

const usersName = prompt("What is your name?", "");

if (isNaN(usersName) && usersName.trim() !== "") {
  alert(`Hello, ${usersName.trim()}! How are you?`);
} else {
  alert(`It's not a valid name, please try again.`);
}

//Задача 2 : Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів. Числа вводить користувач, врахувати, що він може ввести невалідні дані

const enterValueOne = +prompt("Enter first number", "");
const enterOperation = prompt("Enter operation (+, -, *, /)", "");
const enterValueTwo = +prompt("Enter second number", "");

if (
  isNaN(enterValueOne) ||
  isNaN(enterValueTwo) ||
  !["+", "-", "*", "/"].includes(enterOperation)
) {
  alert("Invalid input. Please enter valid numbers and operation.");
} else {
  let result;

  switch (enterOperation) {
    case "+":
      result = enterValueOne + enterValueTwo;
      break;
    case "-":
      result = enterValueOne - enterValueTwo;
      break;
    case "*":
      result = enterValueOne * enterValueTwo;
      break;
    case "/":
      if (enterValueTwo !== 0) {
        result = enterValueOne / enterValueTwo;
      } else {
        alert("Division by zero is not allowed.");
        break;
      }
      break;
    default:
      alert("Invalid operation.");
      break;
  }

  if (result !== undefined) {
    alert(`Result: ${result}`);
  }
}

// // //Задача 3 Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні

const firstValue = prompt("Enter first Value", "");

const secondValue = prompt("Enter second Value", "");

alert(firstValue === secondValue);

// // //Задача 4 Розкласти по цифрах п'ятизначне число і вивести у виcхідному порядку через пробіл (використовувати оператор “розподіл по модулю” %)

// у 4 зробить, щоб для цілих 5значних (і додатніх, і від'ємних) рахувало і виводило результат, а для нечисел, порожнього значення, нецілих чисел виводило помилку

let enterNumber = prompt("Enter a five-digit number");

const array = [];

if (
  enterNumber !== null &&
  enterNumber.trim() !== "" &&
  !isNaN(enterNumber) &&
  Number.isInteger(+enterNumber) &&
  enterNumber >= -99999 &&
  enterNumber <= 99999
) {
  const isNegative = +enterNumber < 0;
  enterNumber = Math.abs(+enterNumber);

  while (enterNumber !== 0) {
    const lastNumber = enterNumber % 10;

    array.unshift(lastNumber);

    enterNumber = Math.floor(enterNumber / 10);
  }

  alert((isNegative ? "-" : "") + array.join(" "));
} else {
  alert("This value is invalid. Please enter a non-empty five-digit integer.");
}
