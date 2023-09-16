"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dDItemElems = document.querySelectorAll(".dropdown-item");
dDItemElems.forEach((item) => item.classList.add("super-dropdown"));

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btn = document.querySelector(".btn");
btn.classList.toggle("btn-secondary");

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const dDMenuElem = document.querySelector(".menu");
dDMenuElem.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divDropDown = document.querySelector("div[class='dropdown']");
divDropDown.insertAdjacentHTML("afterend", "<a href='#'>link</a>");

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dDMB = document.querySelector("[id=dropdownMenuButton]");
dDMB.setAttribute("id", "superDropdown");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const divAriaLabel = document.querySelector(
  "[aria-labelledby='dropdownMenuButton']"
);
divAriaLabel.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropDTElem = document.querySelector(".dropdown-toggle");
dropDTElem.removeAttribute("type");
