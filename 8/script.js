"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", function () {
  console.log("Все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", function () {
  console.log("Страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("super_element")) {
    console.log(
      `Класс 'super_element' присутствует в элементе ${event.target.tagName.toLowerCase()}`
    );
  } else {
    console.log(
      `Класс "super_element" отсутствует в элементе "${event.target.tagName.toLowerCase()}"`
    );
  }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

document
  .querySelector("textarea")
  .addEventListener("mouseover", () => console.log("Вы навели на textarea."));

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  let btn = e.target.closest("button");

  if (btn.tagName !== "BUTTON") {
    return;
  }

  if (!ul.contains(btn)) {
    return;
  }

  console.log(`${btn.textContent}`);
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// События обрабатываются ассинхронно, синхронно выполняются только вложенный события. В нашем случае целевым элементом события является кнопка (button) в списке (ul), сначала обрабатывается текущее событие, после его обработки, оно всплывает, по пути вызывая обработчики, внашем случае оно доходит до document и вызывает обработчик уже на нем.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const secondLi = document.querySelectorAll("ul >li:nth-child(2n)");
for (const li of secondLi) {
  li.style.backgroundColor = "green";
}
