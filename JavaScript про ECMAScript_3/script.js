// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj.Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype

function getPrototypeChain(obj) {
  const prototypeChain = [];

  let currentObj = obj;
  while (currentObj !== null) {
    prototypeChain.push(currentObj);
    currentObj = Object.getPrototypeOf(currentObj);
  }

  return prototypeChain;
}

const MusicSeries = {
  model: 'music series',
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  startWipe() {
    console.log('Метод MusicSeries');
    console.log('I am starting to wipe the floor...');
  }
};

const Blues = {
  model: 'Bluees-1',
  power: 250,
  batterySize: 2500,
  workTime: 50
};

Object.setPrototypeOf(Blues, MusicSeries);


const prototypeChain = getPrototypeChain(Blues);
console.log(prototypeChain);


// Создайте класс Animal, который будет представлять животное.У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name(строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal.Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed(строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Животное ${this.name} издает звук`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  fetch() {
    console.log(`Собака ${this.name} принесла мяч`);
  }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.


// Создайте класс Product, который будет представлять товар в магазине.
// У товара должны быть следующие свойства:
// name - имя товара
//price - цена товара за 1 единицу
// создайте класс ShoppingCart, представляющий корзину интернет-магазина. Конструктор
// класс ShoppingCart должен принимать два параметра
// customerName -имя покупателя
// initialTotalCost - начальная общая стоимость заказа может быть равно 0, если корзина пуста


// У класса ShoppingCart должен быть метод addItem (product, quantity),
// который позволяет добавить товар в корзину. Метод должен принимать два
// параметра:
// product (объект класса Product) - товар, который добавляется в корзину.
// quantity(число, по умолчанию 1) - количество единиц товара, которое нужно
// добавить в корзину. Если quantity не указано, считается, что добавляется
// одна единица товара.
// У класса ShoppingCart должен быть метод getCurrentCost (), который
// возвращает текущую общую стоимость заказа.

// У класса ShoppingCart должен быть метод checkout () ‚ который оформляет заказ
// и выводит сообщение с общей стоимостью заказа и благодарностью за покупку.

// Формат вывода сообщения:
// "Заказ оформлен для {имя покупателя}. Общая стоимость заказа:
// {общая стоимость} рублей. Спасибо за покупку!".


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(customerName, initialTotalCost) {
    this.customerName = customerName;
    this.totalCost = initialTotalCost;
    this.items = [];
  }
  addItem(product, quantity = 1) {
    this.totalCost += product.price * quantity
    this.items.push({ product, quantity });
  }
  getCurrentCost() {
    return this.totalCost;
  }
  checkout() {
    console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа:
    ${this.totalCost} рублей.Спасибо за покупку!`);
  }
}

const product1 = new Product('Футболка', 1000);
const product2 = new Product('Джинсы', 2000);
const cart = new ShoppingCart('Саня', 0);
cart.addItem(product1, 2);
cart.addItem(product2);
console.log(`Общая стоимость ${cart.getCurrentCost()}`);
cart.checkout();