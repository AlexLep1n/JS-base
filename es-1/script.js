"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

// const arr = [1, 5, 7, 9];
// console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

// function createCounter() {
//   let count = null;
//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       return count;
//     },
//   };
// }

// const counter = createCounter();
// console.log(counter);

// counter.increment();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const rootElem = document.querySelector(".root");

// ищем корень с классом "general" через функцию
const targetRoot = findElementByClass(rootElem, "general");
console.log(targetRoot);

// ищем параграф с классом "my-class"
const targetParagraph = findElementByClass(rootElem, "my-class");
console.log(targetParagraph);

// ищем вложенный див с классом "nested-div"
const targetNestedDiv = findElementByClass(rootElem, "nested-div");
console.log(targetNestedDiv);

// ищем третий див с классом "third-div"
const targetThirdDiv = findElementByClass(rootElem, "third-div");
console.log(targetThirdDiv);

function findElementByClass(rootElem, targetClass) {
  // проверяем не является ли искомый элемент корнем
  if (rootElem.classList.contains(targetClass)) {
    return rootElem;
  }
  const childArr = rootElem.children;
  let elem;
  // проходимся по потомкам текущего элемента
  ex: for (const childElem of childArr) {
    // возвращаем искомый элемент, если он был найден
    // в вложенном вызове функции
    if (elem?.classList.contains(targetClass)) {
      return elem;
    }
    // уменьшаем кол-во вложенных вызовов функции
    if (childArr.length === 0) {
      continue;
    }
    if (childElem.classList.contains(targetClass)) {
      elem = childElem;
      break ex;
    } else {
      elem = findElementByClass(childElem, targetClass);
    }
  }
  return elem;
}
