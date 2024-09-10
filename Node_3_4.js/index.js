// . Создайте в директории со статичными файлами файл index.js с
// содержимым alert(“Привет, Мир!!!”);
// 2. В файлах index.html и about.html подключите скрипт с src=”index.js”
// 3. Создайте в директории со статичными файлами файл index.css со
// стилем, который изменяет цвет ссылки
// 4. В файлах index.html и about.html подключите css файл index.css с
// помощью тега <link/>
// 5. Запустите сервер и попробуйте открыть любую страницу
const express = require('express');

const app = express();

app.use(express.static('static'));
const port = 3000;
app.listen(port, () => {
  console.log('Слушаем порт');
})