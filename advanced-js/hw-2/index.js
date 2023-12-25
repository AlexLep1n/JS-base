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

// const library = new Library(libraryBooks);
// console.log(library.books); // books array
// console.log(library.hasBook("Гарри Поттер и философский камень")); // true
// console.log(library.hasBook("Гарри Поттер и орден феникса")); // false
// library.addBook("Гарри Поттер и философский камень"); // catch error and cl error.message
// library.addBook("Гарри Поттер и тайная комната"); // added
// console.log(library.books);
// library.removeBook("Книга, которой нет"); // catch error and cl error.message
// library.removeBook("Автостопом по галактике");
// console.log(library.books);

// Задание №2
