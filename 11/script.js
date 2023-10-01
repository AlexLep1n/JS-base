"use strict";

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const insertAfterText = document.querySelector(".futured__text");
    const futuredItems = document.createElement("div");
    futuredItems.classList.add("futured__items");
    insertAfterText.after(futuredItems);
    data.forEach(({ imgUrl, imgAlt, itemHeading, itemText, itemPrice }) => {
      const futuredItem = `
      <div class="futured__item">
      <img src="${imgUrl}" alt="${imgAlt}">
      <div class="futured__desc">
        <h3 class="futured__desc-heading">${itemHeading}</h3>
        <p class="futured__desc-txt">${itemText}</p>
        <p class="futured__desc-price">${itemPrice}</p>
      </div>
    </div>
      `;
      futuredItems.insertAdjacentHTML("beforeend", futuredItem);
    });
  });
