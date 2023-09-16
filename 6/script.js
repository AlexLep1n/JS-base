"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const link = document.getElementById("super_link");
console.log(link);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLinkElems = document.querySelectorAll(".card-link");
cardLinkElems.forEach((item) => (item.textContent = "ссылка"));

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardBodyLinks = document
  .querySelector(".card-body") // div с классом card-body
  .querySelectorAll(".card-link"); // коллекция элементов с классом card-link внутри div
console.log(cardBodyLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const firstDataNumber50 = document.querySelector("[data-number = '50']");
console.log(firstDataNumber50);

// 5. Выведите содержимое тега title в консоль.

console.log(document.querySelector("title").innerHTML);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleElem = document.querySelector(".card-title");
console.log(cardTitleElem.parentElement);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const p = document.createElement("p");
p.textContent = "Привет";

const cardElem = document.querySelector(".card");
cardElem.prepend(p);

// 8. Удалите тег h6 на странице.

const h6 = document.querySelector("h6");
h6.remove();
