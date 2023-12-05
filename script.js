//Задача 1: За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач. Врахувати, що користувач може натиснути cancel або нічого не ввести

const usersName = prompt("What is your name?", "");

if (usersName) {
  alert(`Hello, ${usersName}! How are you?`);
} else {
  alert("By By");
}

//Задача 2 : Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів. Числа вводить користувач, врахувати, що він може ввести невалідні дані

const enterValueOne = +prompt("Enter first Number ", "");

const enterOperation = prompt("Enter operation ", "");

const enterValueTwo = +prompt("Enter second Number ", "");

if (
  isNaN(enterValueOne || enterOperation || enterValueTwo) ||
  enterOperation == "" ||
  enterValueTwo == ""
) {
  alert("You have wrote something wrong my friend");
}

const sum = enterValueOne + enterValueTwo;

const multiplication = enterValueOne * enterValueTwo;

const difference = enterValueOne - enterValueTwo;

const division = enterValueOne / enterValueTwo;

switch (enterOperation) {
  case "+":
    alert(`Result ${sum}`);
    break;
  case "-":
    alert(`Result ${difference}`);
    break;

  case "*":
    alert(`Result ${multiplication}`);
    break;
  case "/":
    alert(`Result ${division}`);
}

// //Задача 3 Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні

const firstValue = prompt("Enter first Value", "");

const secondValue = prompt("Enter second Value", "");

alert(firstValue === secondValue);

// //Задача 4 Розкласти по цифрах п'ятизначне число і вивести у виcхідному порядку через пробіл (використовувати оператор “розподіл по модулю” %)

let enterNumber = +prompt("Enter five numbers"); // 12345

const array = [];

if (
  (isNaN(enterNumber) && -100000 < enterNumber && enterNumber < -9999) ||
  (9999 < enterNumber && enterNumber < 100000)
) {
  while (enterNumber > 0) {
    let lastNumber = enterNumber % 10;

    array.push(lastNumber); //[5]

    enterNumber = Math.floor(enterNumber / 10); //1234

    array.sort((a, b) => a - b);
  }

  alert(enterNumber < 0 ? array.join("-") : array.join(" "));
} else {
  alert("This value is invalid");
}

// у 4 зробить, щоб для цілих 5значних (і додатніх, і від'ємних) рахувало і виводило результат, а для нечисел, порожнього значення, нецілих чисел виводило помилку
