"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

const positive = parseFloat(prompt("Enter positive number", "5"));
const negative = parseFloat(prompt("Enter negative number", "-2"));

positive > 0 && negative < 0
  ? console.log("All values are correct!")
  : console.log("One or more values are incorrect!");
