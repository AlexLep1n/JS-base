"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = Number.parseFloat(
  prompt("Enter number between 1 inclusive and 32")
);

if (!(dayNumber >= 1 && dayNumber < 32)) {
  console.log("Incorrect value!");
} else if (dayNumber >= 1 && dayNumber < 11) {
  const decadeNumber = 1;
  console.log(
    `The number ${dayNumber} falls into the ${decadeNumber} decade of the month`
  );
} else if (dayNumber < 21) {
  const decadeNumber = 2;
  console.log(
    `The number ${dayNumber} falls into the ${decadeNumber} decade of the month`
  );
} else {
  const decadeNumber = 3;
  console.log(
    `The number ${dayNumber} falls into the ${decadeNumber} decade of the month`
  );
}
