"use strict";
// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

// дописал async, чтобы явно показать что возвращает Promise (подсказка от ES-lint)
async function getUserData(id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Пользователь с id = ${id} не найден!`);
      }
    })
    .then((response) => response.data);
}

getUserData(2) // возвращает Promise c resolve(user[0]) или сообщение об ошибке
  .then((response) => console.log(response)) // выводит в консоль искомого пользователя
  .catch((error) => console.log(error.message)); // отлавливает ошибку и вывод в консоль

// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// // Пример использования функции
// const user = {
//   name: "John Doe",
//   job: "unknown",
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

async function saveUserData(obj) {
  return fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(obj),
  }).then((response) => {
    if (response.ok) {
      console.log("User data saved successfully");
      return response.json();
    } else {
      throw new Error("Ошибка! Данные не отправлены!");
    }
  });
}

const user = {
  name: "Alex Lepin",
  job: "Frontend Developer",
  // id: "1",  // можно указать свой id, заменив генерируемый, заменить createdAt не выйдет
};

saveUserData(user)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function createHtmlElements() {
  const pageStructure = `
  <div id="general">
    <ul id="1">
      <li id="1.1">1.1</li>
      <li id="1.2">1.2</li>
      <li id="1.3">1.3</li>
      <li id="1.4">1.4</li>
      <li id="1.5">1.5</li>
    </ul>
    <ul id="2">
      <li id="my-element">2.1</li>
      <li id="2.2">2.2</li>
      <li id="2.3">2.3</li>
      <li id="2.4">2.4</li>
      <li id="2.5">2.5</li>
    </ul>
    <ul id="3">
      <li id="3.1">3.1</li>
      <li id="3.2">3.2</li>
      <li id="3.3">3.3</li>
      <li id="3.4">3.4</li>
      <li id="3.5">3.5</li>
    </ul>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", pageStructure);
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";

  const div = document.querySelector("div");
  div.style.border = "5px solid green";
  div.style.width = "500px";

  const ul = document.querySelectorAll("ul");
  ul.forEach((ul) => (ul.style.border = "5px solid orange"));

  const li = document.querySelectorAll("li");
  li.forEach((li) => (li.style.fontSize = "32px"));
}

// наполняем страницу элементами
createHtmlElements();

function changeStyleDelayed(id, delay, color) {
  setTimeout(() => {
    const el = document.getElementById(id);
    el.style.color = color;
  }, delay);
}

changeStyleDelayed("1.1", 1000, "rgb(127,127,255)");
changeStyleDelayed("2.2", 2000, "rgb(127,255,127)");
changeStyleDelayed("3.3", 3000, "rgb(255,127,255)");
