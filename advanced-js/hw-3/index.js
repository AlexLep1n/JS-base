"use strict";
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const fbProductName = document.querySelector(".feedback__product");
const fbText = document.querySelector(".feedback__text");
const fbBtn = document.querySelector(".feedback__btn");
const fbView = document.querySelector(".feedback__view");

const productsDiv = document.querySelector(".products");
const reviewBtn = document.querySelector(".review__btn");

if (fbBtn) {
  fbBtn.addEventListener("click", function () {
    localStorage.setItem("fbProductName", fbProductName.value);
    localStorage.setItem("fbText", fbText.value);
    fbProductName.value = "";
    fbText.value = "";
  });
}

if (fbView) {
  fbView.addEventListener("click", function () {
    location.href = "review.html";
  });
}

if (reviewBtn) {
  reviewBtn.addEventListener("click", function () {
    location.href = "feedback.html";
  });
}

let products = [
  {
    productName: "Samsung",
    text: ["Good phone", "Not bad phone"],
  },
];

products.push({
  productName: localStorage.getItem("fbProductName"),
  text: [localStorage.getItem("fbText")],
});

products.forEach((product) => {
  let prodDiv = document.createElement("div");
  prodDiv.classList.add("product");
  let fbDiv = document.createElement("div");
  fbDiv.classList.add("product__feedback");
  fbDiv.hidden = true;
  prodDiv.insertAdjacentHTML(
    "beforeend",
    `<h3 class="product__name">${product.productName}</h3>`
  );
  product.text.forEach((item) => {
    fbDiv.insertAdjacentHTML(
      "beforeend",
      `
      <p>${item}
      <button class="product__delete">Delete</button>
      </p>
      `
    );
  });
  prodDiv.insertAdjacentElement("beforeend", fbDiv);
  productsDiv.insertAdjacentElement("beforeend", prodDiv);
});

let deleteBtns = document.querySelectorAll(".product__delete");
let productFeedBack = document.querySelectorAll(".product__feedback");

if (deleteBtns) {
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let deletedFeedBack = e.target.closest("p");
      deletedFeedBack.remove();
      productFeedBack.forEach((item) => {
        if (item.children.length === 0) {
          item.closest(".product").remove();
        }
      });
    });
  });
}

let productNames = document.querySelectorAll(".product__name");

if (productNames) {
  productNames.forEach((productName) => {
    productName.style.cursor = "pointer";
    productName.addEventListener("click", function () {
      let fbDiv = productName.nextElementSibling;
      fbDiv.hidden ? (fbDiv.hidden = false) : (fbDiv.hidden = true);
    });
  });
}
