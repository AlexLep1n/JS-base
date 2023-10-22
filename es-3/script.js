"use strict";

// Задание 1: "Управление персоналом компании"

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя) в консоль.

class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Employee name: ${this.name}`);
  }
}

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    console.log(`Employee name: ${this.name}, Department: ${this.department}`);
  }
}

// // Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo(); // "Employee name: John Smith"

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo(); // "Employee name: John Doe, Department: Sales"

// Задание 2: "Управление списком заказов"

// Реализуйте класс Product (товар), который имеет следующие свойства и методы:
// Свойство name - название товара.
// Свойство price - цена товара.
// Свойство quantity - количество товара.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }
}

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство id (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
  products = [];
  constructor(id) {
    this.id = id;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    return this.products.reduce(
      (sum, cur) => sum + cur.getPrice() * cur.getQuantity(),
      0
    );
  }
}

// // Пример использования:
const order = new Order(12345);

const product1 = new Product("Phone", 500, 2);
order.addProduct(product1);

const product2 = new Product("Headphones", 100, 1);
order.addProduct(product2);

console.log(`Total order price: ${order.getTotalPrice()}`); // Total order price: 1100
