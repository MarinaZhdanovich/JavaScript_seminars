// 1. Создайте функцию delayedMessage(message, delay),
//   которая принимает аргументы message(строка) и delay
//     (число).Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками.Например:
// a.delayedMessage("Сообщение 1", 2000)
// b.delayedMessage("Сообщение 2", 1000)
// c.delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

// Сообщение 2
// Сообщение 1
// Сообщение 3
// Конец программы


function delayedMessage(message, delay) {
  setTimeout(() => { console.log(message); }, delay);
}
delayedMessage("Сообщение 1", 2000)
delayedMessage("Сообщение 2", 1000)
delayedMessage("Сообщение 3", 3000)
console.log('Завершение программы');




const allTasks = (taskList, interval) => {
  let delay = 0;
  taskList.forEach(task => {
    setTimeout(() => {
      console.log(task.name);
    }, delay);
    delay += interval;
  });
}


const tasks = [
  { name: 'task 1', time: 1000 },
  { name: 'task 2', time: 2000 },
  { name: 'task 3', time: 3000 },
  { name: 'task 4', time: 4000 },
  { name: 'task 5', time: 5000 }
]

allTasks(tasks, 1000)



// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
//   (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса.Проверьте,
//   если readyState равен 4(успешно выполнен запрос) и status равен
// 200(успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().

function loadData(url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}

loadData('');

fetch()
  .then((result) => {
    if (result.ok) {
      return result.text()
    }
    throw new Error('Ошибка не все ок');
  })
  .then(data => {
    console.log(data);
  })
  .catch((err) => {
    console.error('Много ошибок, решай вопросы')
  });


fetch("")




// Задание 3(тайминг 35 минут)
// Напишите функцию getData, которая делает асинхронный запрос к
// API и возвращает данные в виде объекта.
// Внутри функции происходит асинхронный запрос к API с помощью
// функции fetch.Затем, с использованием оператора await, ожидается
// ответ от сервера и его парсинг в формате JSON с помощью метода
// response.json().Полученные данные возвращаются из функции.
// В случае возникновения ошибки при выполнении асинхронных
// операций, используется конструкция try/catch для обработки и
// отображения ошибки.
// В функции main вызывается функция getData с использованием
// await, чтобы получить данные асинхронно. Полученные данные
// выводятся в консоль. Если происходит ошибка, она ловится и
// выводится сообщение об ошибке. Функция main также объявлена как
// асинхронная с использованием ключевого слова async. В конце
// вызывается функция main для запуска процесса получения данных.
