"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const userNum = Number.parseFloat(prompt("Введите размер зп", "30000"));

if (Number.isFinite(userNum) && userNum > 0) {
  salary(userNum);
} else {
  console.log("Значение задано неверно!");
}

/**
 * Рассчитывает зарплату после вычета налога 13%
 * @param {number} num - Зарплата до вычета налога
 * @returns {number} ЗП после вычета налога
 */
function salary(num) {
  num = num - num * 0.13;
  console.log(`Размер заработной платы за вычетом налогов равен ${num}`);
}
