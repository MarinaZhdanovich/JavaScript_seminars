// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// function mergeArrays(array1, array2) {
//   return [...array1, ...array2]
// };


// const mergeArrays = (array1, array2) => [...array1, ...array2]

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));


// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]
function removeDuplicates(...args) {
  return args.filter((value, index) => args.indexOf(value) === index);
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));


const removeDuplicates = (...args) => args.filter((value, index) => args.indexOf(value) === index);
//filter создает новый массив, включающий только те элементы, которые удовлетворяют определенному условию.

// args.indexOf(value) возвращает первый индекс, по которому элемент value встречается в массиве args.
// Если этот индекс совпадает с текущим индексом index, это означает, что элемент value встречается в массиве первый раз.

// args будет [1, 2, 3, 2, 4, 1, 5].
// Метод filter проходит по каждому элементу массива.
// Для элемента 1 в первом случае args.indexOf(1) возвращает 0, который равен текущему индексу 0. Значит, 1 включается в новый массив.
// Для элемента 2 в следующем случае args.indexOf(2) возвращает 1, который равен текущему индексу 1. Значит, 2 включается в новый массив.
// Когда filter встречает второй 2, args.indexOf(2) возвращает 1, который не равен текущему индексу 3, поэтому второй 2 игнорируется.
// Функция продолжает этот процесс для всех элементов, в результате чего новый массив содержит только уникальные значения [1, 2, 3, 4, 5].




// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
//   содержащий только четные числа.
function getEvenNumbers(array) {
  return array.filter(element => element % 2 === 0)
}

const getEvenNumbers = (array) => array.filter(element => element % 2 === 0);

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

function calculateAverage(array) {
  const sum = array.reduce((accum, number) => accum + number, 0)
  return sum / array.length
}


const calculateAverage = array => {
  const sum = array.reduce((accum, number) => accum + number, 0);
  return sum / array.length;
};
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const capitalizeFirstLetter = (str) => {
  return str
    .split(' ') // ["hello", "world"]
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //["Hello", "World"]
    .join(" ") //"Hello World"
}

// Для каждого слова первая буква (индекс 0) преобразуется в заглавную с помощью toUpperCase(), а затем к ней добавляется оставшаяся часть слова, начиная со второго символа (slice(1)).
// .join(" "): Массив слов собирается обратно в строку, разделенную пробелами.

// word.charAt(0) берёт первый символ слова, т.е. "h".
// word.charAt(0).toUpperCase() делает его заглавным: "H".
// word.slice(1) возвращает оставшуюся часть строки начиная с индекса 1: "ello".
// Сложение двух строк "H" + "ello" даёт результат "Hello".


// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
  let value = initialValue;

  return {
    add: function (num) {
      value += num;
    },
    subtract: function (num) {
      value -= num;
    },
    getValue: function () {
      return value;
    }
  }
}

const calculator = createCalculator(10);
calculator.add(5) //15
calculator.subtract(2) //13
console.log(calculator.getValue());




// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"
function createGreeting(user) {
  return function () {
    console.log(`Hello ${user}`);
  }
}

const greeting = createGreeting('John');
greeting();

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true
function createPasswordChecker(maxLength) {
  return function (password) {
    return password.length <= maxLength;
  }
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('newpassword')); // Ожидаемый результат:false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

function sumDigits(num) {
  if (num < 10) {
    return num
  }
  return num % 10 + sumDigits(Math.floor(num / 10));
}



console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)