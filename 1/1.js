"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

const cels = parseInt(prompt("Введите температуру в градусах С", "10"));
const faren = cels * 1.8 + 32;

alert(`Цельсий: ${cels}\nФаренгейт: ${faren}`);
