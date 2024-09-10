// Инициализируйте проект NPM.
// 2. Установите библиотеку express.
// 3. Создайте файл index.js.
// 4. В файле напишите код который реализует два обработчика по URL “/” и URL
// “/about”.
// 5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка
// на соседнюю страницу.
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Добро пожаловать!</h1><a href="/about">To about</a>');
})
app.get('/about', (req, res) => {
  res.send('<h1>Здесь About</h1><a href="/">To home</a>');
})

const port = 3000;
app.listen(port, () => {
  console.log('Слушаем порт');
});