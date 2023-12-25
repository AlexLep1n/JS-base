"use strict";
// Задание №1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  constructor(initBooks) {
    try {
      if (initBooks.length == new Set([...initBooks]).size) {
        this.#books = [...initBooks];
      } else {
        throw new Error("В массиве не должно быть дубликатов!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  addBook(title) {
    try {
      if (!this.#books.includes(title)) {
        this.#books.push(title);
      } else {
        throw new Error("Эта книга уже есть в библиотеке!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  removeBook(title) {
    try {
      if (this.#books.includes(title)) {
        this.#books.splice(this.#books.indexOf(title), 1);
      } else {
        throw new Error("Нельзя удалить книгу, которой нет в библиотеке!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  hasBook(title) {
    return this.#books.includes(title);
  }

  get books() {
    return this.#books;
  }
}

const libraryBooks = [
  "Гарри Поттер и философский камень",
  "Властелин колец",
  "Автостопом по галактике",
];

const library = new Library(libraryBooks);
console.log(library.books); // books array
console.log(library.hasBook("Гарри Поттер и философский камень")); // true
console.log(library.hasBook("Гарри Поттер и орден феникса")); // false
library.addBook("Гарри Поттер и философский камень"); // catch error and cl error.message
library.addBook("Гарри Поттер и тайная комната"); // added
console.log(library.books);
library.removeBook("Книга, которой нет"); // catch error and cl error.message
library.removeBook("Автостопом по галактике");
console.log(library.books);

// Задание №2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const textarea = document.querySelector(".feedback__txt");
const btn = document.querySelector(".feedback__btn");
const fbList = document.querySelector(".feedback__list");
fbList.style.fontSize = "24px";
textarea.style.fontSize = "20px";

addFeedBack(initialData);

btn.addEventListener("click", function () {
  try {
    if (textarea.textLength >= 50 && textarea.textLength <= 500) {
      let divProd = document.createElement("div");
      let divComment = document.createElement("div");
      let commentHeading = document.createElement("h3");
      let commentTxt = document.createElement("p");
      let initTxt = textarea.value;
      commentHeading.textContent = initTxt.slice(0, 15);
      commentTxt.textContent = initTxt.slice(16);
      divComment.append(commentHeading);
      divComment.append(commentTxt);
      divProd.append(divComment);
      fbList.append(divProd);
    } else {
      throw new Error(
        "Длина отзыва не может быть меньше 50 и больше 500 символов!"
      );
    }
  } catch (error) {
    alert(error.message);
  }
});

function addFeedBack(initialData) {
  for (const products of initialData) {
    let divProd = document.createElement("div");
    let commentHeading = document.createElement("h3");
    commentHeading.textContent = products.product;
    divProd.append(commentHeading);
    let item = products.reviews;
    for (let i = 0; i < item.length; i++) {
      let divComment = document.createElement("div");
      let comment = document.createElement("p");
      let commentId = document.createElement("p");
      commentId.textContent = `Комментарий №${item[i].id}`;
      comment.textContent = item[i].text;
      divComment.append(commentId);
      divComment.append(comment);
      divProd.append(divComment);
    }
    fbList.append(divProd);
  }
}
