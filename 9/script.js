"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputFrom = document.querySelector("#from");
const span = document.querySelector("span");

inputFrom.addEventListener("input", function () {
  span.textContent = inputFrom.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnMessage = document.querySelector(".messageBtn");
const divMessage = document.querySelector(".message");
btnMessage.addEventListener("click", function () {
  divMessage.classList.add("animate_animated", "animate_fadeInLeftBig");
  // divMessage.style.visibility = "visible"; // по заданию
  divMessage.hidden = !divMessage.hidden; // так логичнее
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");
const inputForm = form.querySelector("input");
const selectForm = form.querySelector("select");

form.addEventListener("submit", function (event) {
  if (inputForm.value.trim() === "" || selectForm.value === "") {
    event.preventDefault();
  }
  if (inputForm.value.trim() === "") {
    inputForm.classList.add("error");
  }
  if (selectForm.value === "") {
    selectForm.classList.add("error");
  }
});

inputForm.addEventListener("input", function () {
  if (inputForm.value.trim() === "") {
    inputForm.setCustomValidity("Необходимо заполнить поле!");
    inputForm.classList.add("error");
  } else {
    inputForm.classList.remove("error");
    inputForm.setCustomValidity("");
  }
});

selectForm.addEventListener("change", function () {
  if (selectForm.value === "") {
    selectForm.classList.add("error");
    selectForm.setCustomValidity("Необходимо выбрать!");
  } else {
    selectForm.classList.remove("error");
    selectForm.setCustomValidity("");
  }
});
