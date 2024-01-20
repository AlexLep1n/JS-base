"use strict";
// Цель: Разработать веб-приложение, которое будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// Дополнительные задачи (по желанию):
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const container = document.querySelector(".container");
let randomNumber = Math.floor(Math.random() * 100);
let count = 0;

async function randomPhoto() {
  const response = await fetch(
    `https://api.unsplash.com/photos?page=${randomNumber}&per_page=${2}&client_id=qCmWuqDflF1vSryA7xG6Zp4OqR6e8n_z0-NVgVxK3RU`
  );
  if (!response.ok) {
    throw new Error("Ошибка загрузки данных!");
  }
  const data = await response.json();
  console.log(data);
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="photo">
    <img class="photo__img" src="${data[0].urls.raw}" alt="${data[0].alt_description}">
    <p class="author">Author: ${data[0].user.name}</p>
    <p class="count">Likes: ${count}</p>
    <button class="like">Like</button>
    </div>
    `
  );
}

randomPhoto();

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("like")) {
    const likeCounter = document.querySelector(".count");
    likeCounter.textContent = `Likes: ${++count}`;
  }
});
