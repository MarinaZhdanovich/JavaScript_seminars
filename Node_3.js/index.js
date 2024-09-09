const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Поступил запрос', req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Добро пожаловать на мой сайт</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Страница обо мне</h1>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
