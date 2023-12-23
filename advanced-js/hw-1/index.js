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
