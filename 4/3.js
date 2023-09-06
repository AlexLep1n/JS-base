"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(Math.trunc(Math.random() * 10));
}

console.log(arr);
// 1.
console.log(arr.reduce((acc, cur) => acc + cur, 0));

// 2.
console.log(arr.reduce((prev, cur) => Math.min(prev, cur)));
// console.log(arr.slice().sort((a, b) => a - b)[0]); // второй вариант поиска минимального значения в массиве (костыль)

// 3.
const indexArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    indexArr.push(i);
  }
}

console.log(indexArr); // пробовал делать через filter, но не придумал как возвращать индексы элементов, а не сами элементы
