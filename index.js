'use strict';

// 1. Вывести # столько раз, сколько указал пользователь.

const count = Number(prompt('Please enter your number'));

let i = 0;
while ( i++ < count) {
    console.log('#');
}

// 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

i = count;
while ( i >= 0) {
    console.log(i--);
}

// 3. Запросить число и степень. Возвести число в указанную степень и вывести результат.
const base = Number(prompt('Please enter the base number'));
const power = Number(prompt('Please enter the power number'));

let result = base;
i = 0;
while ( i++ < (power - 1)) {
    result *= base;
}

console.log(result);


// 4. Запросить 2 числа и найти все общие делители.
const num1 = Number(prompt('Please enter the first number'));
const num2 = Number(prompt('Please enter the second number'));

i = 0;
if (num1 < num2) {
    i = num1;
} else {
    i = num2;
}

while (i > 0) {
    if (num1 % i === 0 && num2 % i === 0) {
        console.log(i);
    }
    i--;
}

// 5. Посчитать факториал введенного пользователем числа.

const factorial = Number(prompt('Please enter factorial number'));

function fac(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fac(n - 1);
}

console.log(fac(factorial));

/*
Задания, в которых необходимо использовать DO WHILE.
  1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
  пор, пока он не решит его правильно.
*/

let userInput = null;
do {
    userInput = Number (prompt(' Please solve the following problem 2 + 2 * 2'));
} while (userInput !== 2 + 2 * 2);

/*
 2. Делить число 1000 на 2 до тех пор, пока не получится число
 меньше 50. Вывести это число и сколько делений произвели.
*/

let n = 1000;
let counter = 0;
do {
    n /= 2;
    counter++;
} while (n >= 50);

console.log(`Result: ${n}, Number of divisions: ${counter}`);

/*
 Задания, в которых необходимо использовать FOR.
 3. Вывести все числа от 1 до 100, которые кратные указанному
 пользователем числу.
*/

const numberGivenByUser = Number(prompt('Please enter your number'));

for(let i = 1; i <= 100; i++) {
    if (i % numberGivenByUser === 0) {
        console.log(i);
    }
}