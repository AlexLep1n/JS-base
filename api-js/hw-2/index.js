"use strict";
// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const slider = document.querySelector(".slider");
const imgs = document.querySelectorAll(".slider__img");
const sliderDots = document.querySelector(".slider__dots");
const dots = document.querySelectorAll(".slider__dot");
let currentIndex = 0;

function showImage(index) {
  imgs[currentIndex].classList.remove("active");
  imgs[index].classList.add("active");
  currentIndex = index;
}

function chooseActiveDot(index) {
  dots[currentIndex].classList.remove("active-dot");
  dots[index].classList.add("active-dot");
}

slider.addEventListener("click", function (e) {
  const btn = e.target;
  if (btn.classList.contains("prev")) {
    let index = currentIndex - 1;
    if (index < 0) {
      index = imgs.length - 1;
    }
    chooseActiveDot(index);
    showImage(index);
  }
  if (btn.classList.contains("next")) {
    let index = currentIndex + 1;
    if (index >= imgs.length) {
      index = 0;
    }
    chooseActiveDot(index);
    showImage(index);
  }
});

sliderDots.addEventListener("click", function (e) {
  const btn = e.target;
  if (btn.classList.contains("slider__dot")) {
    let index = [...dots].indexOf(btn);
    if (index !== currentIndex) {
      chooseActiveDot(index);
    }
    showImage(index);
  }
});
