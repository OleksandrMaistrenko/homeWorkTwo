//Задача 1: За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач. Врахувати, що користувач може натиснути cancel або нічого не ввести

// let usersName = prompt("What is your name?", "");

// if (usersName) {
//   alert(`Hello, ${usersName}! How are you?`);
// } else {
//   alert("By By");
// }

//Задача 2 : Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів. Числа вводить користувач, врахувати, що він може ввести невалідні дані

// let enterValueOne = +prompt("Enter first Number ", "");

// let enterOperation = prompt("Enter operation ", "");

// let enterValueTwo = +prompt("Enter second Number ", "");

// if (isNaN(enterValueOne && enterOperation && enterValueTwo)) {
//   alert("You should write the numbers");
// }

// let sum = enterValueOne + enterValueTwo;

// let multiplication = enterValueOne * enterValueTwo;

// let difference = enterValueOne - enterValueTwo;

// function division() {
//   if (enterValueTwo == 0) {
//     alert(`This operation is not corect`);
//   } else {
//     return enterValueOne / enterValueTwo;
//   }
// }

// switch (enterOperation) {
//   case "+":
//     alert(`Result ${sum}`);
//     break;
//   case "-":
//     alert(`Result ${difference}`);
//     break;

//   case "*":
//     alert(`Result ${multiplication}`);
//     break;
//   case "/":
//     alert(`Result ${division()}`);
//   default:
// }

//Задача 3 Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні

// let firstValue = prompt("Enter first Value", "");

// let secondValue = prompt("Enter second Value", "");

// firstValue === secondValue ? alert(`true`) : alert(`false`);

//Задача 4 Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” %)

// let enterNumber = prompt("Enter five numbers")
//   .split("", 5)
//   .sort((a, b) => a - b);

// alert(enterNumber);

//Задачу з % не вирiшив на жаль
