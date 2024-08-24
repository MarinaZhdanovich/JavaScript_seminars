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
  name: "Marina",
  age: 35,
  gender: "female",

  introduce: function () {
    console.log(`My name is ${this.name}. I'm  ${this.age} years old and I identify as ${this.gender}.`);
  },
  changeName: function (userName) {
    this.name = userName;
  }
}

console.log(Person.name);
console.log(Person.age);
console.log(Person.gender);
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
  name: 'Miami',
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

Dog.eat = Animal.eat; //присваиваем метод одного объекта другому объекту.
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


//Когда вы используете метод apply, первым аргументом вы передаете значение, которое будет использоваться в качестве контекста this внутри вызываемой функции. Обычно это объект, к которому относится метод. Однако, если вам не нужно привязывать функцию к какому-то конкретному объекту, вы можете передать null или undefined.