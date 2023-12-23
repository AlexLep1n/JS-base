"use strict";
// Задание №1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  alboms: [
    {
      title: "Город дорог",
      artist: "Guf",
      year: 2007,
    },
    {
      title: "Дом с нормальными явлениями",
      artist: "Скриптонит",
      year: 2015,
    },
    {
      title: "Свистки и бумажки",
      artist: "Скриптонит",
      year: 2021,
    },
  ],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        return index < this.alboms.length
          ? { done: false, value: this.alboms[index++] }
          : { done: true };
      },
    };
  },
};

for (const albom of musicCollection) {
  console.log(
    `Title: ${albom.title}, Artist: ${albom.artist}, Year: ${albom.year}`
  );
}

// Задание №2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let dishes = new Map([
  ["Пицца", "Виктор"],
  ["Суши", "Ольга"],
  ["Десерты", "Дмитрий"],
]);

let Alexey = {
  name: "Alexey",
  order: new Set(["Пепперони", "Тирамису"]),
};
let Maria = {
  name: "Maria",
  order: new Set(["Калифорния", "Маргарита"]),
};
let Irina = {
  name: "Irina",
  order: new Set(["Чизкейк"]),
};

let clients = new Map([
  Object.values(Alexey),
  Object.values(Maria),
  Object.values(Irina),
]);

console.log(`Алексей заказал ${[...clients.get("Alexey")]}`);
console.log(`Мария заказала ${[...clients.get("Maria")]}`);
console.log(`Ирина заказала ${[...clients.get("Irina")]}`);
console.log(`Пиццу готовит ${dishes.get("Пицца")}`);
console.log(`Суши готовит ${dishes.get("Суши")}`);
console.log(`Десерты готовит ${dishes.get("Десерты")}`);
