console.log("Текст из script.js!");
const num = 123;
console.log(`Переменная num = ${num}`);
let a = 5;
a = 7;
console.log(`Переменная a = ${a}`);
const b = 1 + 2 + 3;
console.log(b);
/* Задание 3
1. Создайте переменную c со значением 10 и переменную d со
значением 2.
a. Все созданные переменные должны быть логично названы
b. Создайте переменную суммы и присвойте сумму чисел (c,d)
c. Создайте переменную разности и присвойте разность чисел
(c,d)
d. Создайте переменную прозведения и присвойте произведение
чисел (c,d)
e. Создайте переменную частного и присвойте деление чисел
(c,d)
f. Выведите в консоль все созданные переменные
g. Сложите все созданные переменные и выведите результат в
консоль
*/
const c = 10;
const d = 2;
let sum = c + d;
let difference = c - d;
let multiplication = c * d;
let division = c / d;
console.log(`Переменная с = ${c}`);
console.log(`Переменная d = ${d}`);
console.log(`Сумма = ${sum}`);
console.log(`Разность = ${difference}`);
console.log(`Произведение = ${multiplication}`);
console.log(`Деление = ${division}`);
const result = c + d + sum + difference + multiplication + division;
console.log(`Результат сложения всех переменных ${result}`);
// Запишите в переменную a число 1.5, а в переменную b - число 0.75.
// Найдите сумму значений этих переменных и выведите ее на экран.
// 2. Создайте переменную a, запишите в нее какое-нибудь
// положительное или отрицательное число. Выведите на экран это
// число с обратным знаком.
const aa = 1.5;
const bb = 0.75;
let suma = aa + bb;
console.log(`Сумма значений = ${suma}`);
let aaa = -5;
console.log(`Число с обратным знаком ${-aaa}`);
// Создайте строку с вашем именем и строку с вашей фамилией.
// Выведите эти данные в консоль
// 2. Создайте переменную с текстом 'java' и переменную с текстом
// 'script'. С помощью этих переменных и операции сложения строк
// выведите в консоль строку 'javascript'.
// 3. Создайте переменную с текстом 'hello' и переменную с текстом
// 'world'. С помощью этих переменных и операции сложения строк
// выведите в консоль строку 'hello world'.
const firstName = 'Марина';
const lastName = 'Жданович';
const text1 = 'java';
const text2 = 'script'
console.log(text1 + text2);
const text3 = 'hello';
const text4 = 'world';
console.log(`${text3} ${text4}`);
// console.log(text3 + ' ' + text4);