"use strict";

// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

import { dataAPI } from "./data.js";
const data = dataAPI;
console.log(data);

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const divGeneral = document.createElement("div");
divGeneral.style.display = "flex";
divGeneral.style.justifyContent = "center";
divGeneral.style.alignItems = "center";
divGeneral.style.gap = "20px";
divGeneral.style.flexWrap = "wrap";
divGeneral.style.fontFamily = "sans-serif";
document.body.append(divGeneral);

data.forEach(({ imgCoinUrl, chartName, disclaimer, time, bpi }) => {
  const divCard = document.createElement("div");
  divGeneral.append(divCard);

  const imgCard = document.createElement("img");
  imgCard.src = imgCoinUrl;
  imgCard.width = 200;
  imgCard.height = 200;
  divCard.append(imgCard);

  const cardHeading = document.createElement("h3");
  cardHeading.textContent = chartName;
  cardHeading.style.textAlign = "center";
  cardHeading.style.fontFamily = "serif";
  divCard.append(cardHeading);

  const cardBpi = document.createElement("p");
  cardBpi.textContent = bpi.USD.code;
  divCard.append(cardBpi);

  const cardTxt = document.createElement("p");
  cardTxt.textContent = disclaimer;
  cardTxt.style.maxWidth = "200px";
  divCard.append(cardTxt);

  const timeUpdate = document.createElement("p");
  timeUpdate.textContent = time.updated;
  divCard.append(timeUpdate);
});
