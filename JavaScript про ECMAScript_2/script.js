// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const Person = {
  name: " ",
  age: 0,
  gender: " ",

  introduce: function () {
    console.log(`My name is ${this.name}. I'm  ${this.age} years old and I identify as ${this.gender}.`);
  },
  changeName: function (userName) {
    this.name = userName;
  }
}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce()
Person.changeName('Mike')
Person.introduce()

// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

const Animal = {
  name: ' ',
  eat() {
    console.log(`${this.name} is eating`);
  }
}

const Dog = {
  name: 'Rex',
  bark() {
    console.log(`${this.name} is barking`);
  }
}

Dog.eat = Animal.eat; //присваиваем метод одного объекта другому объекту, одалживание
Dog.eat();

Animal.eat.call(Dog); //call позволяет вызвать метод eat с объектом Dog в качестве контекста this.
Animal.eat.apply(Dog); //apply работает аналогично call, но передает аргументы в виде массива (greet.apply(Person, ['Hi', '.']);)

const dogEat = Animal.eat.bind(Dog); //bind возвращает новую функцию, где контекст this закреплен за объектом, который вы укажете.
dogEat();  //метод eat связан с объектом Dog, и теперь вы можете вызвать dogEat в любом месте программы.

//Метод bind отличается тем, что он не вызывает функцию сразу, а создает новую функцию с фиксированным значением this.


//Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  }
}

console.log(Calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(Calculator.subtract.apply(null, [5, 3])); // Вывод: 2


// В обоих случаях (call и apply), значение this не играет роли, потому что методы add, subtract и multiply не используют this внутри себя. Поэтому передаем null. Это стандартная практика, когда this не важен для функции.


// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name}. I'm  ${this.age} years old.`);
  }
}

// constructor(name, age): Это специальный метод, который вызывается при создании нового объекта с помощью new. Он инициализирует свойства name и age объекта.
// this.name и this.age: Здесь this ссылается на текущий экземпляр класса Person, позволяя вам сохранять переданные значения в свойства объекта.

const person = new Persona("John", 25);
person.introduce();

// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890

class BankAccount {

  static bankName = "Global Bank"; //Используется для хранения названия банка, к которому относятся все счета. Это свойство принадлежит самому классу, а не конкретным экземплярам, поэтому оно определяется с помощью ключевого слова static.

  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} пополнено номер счета ${this.accountNumber} теперь на счету ${this.balance}`);
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`${amount} снятие номер счета ${this.accountNumber} теперь на счету ${this.balance}`);
    } else {
      console.log('Нет денег');
    }
  }

}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
1234567890


