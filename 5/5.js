"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

console.log(createObjFromArrays(en, ru));

/**
 * Принимает два строковых массива и объединяет их в объект.
 * @param {string[]} keysArr Массив ключей.
 * @param {string[]} valsArr Массив значений.
 * @returns Возвращает объект.
 */
function createObjFromArrays(keysArr, valsArr) {
  const obj = {};
  if (keysArr.length != valsArr.length) {
    throw new Error("Массивы разных размеров!");
  }
  for (let i = 0; i < keysArr.length; i++) {
    obj[keysArr[i]] = valsArr[i];
  }
  return obj;
}
