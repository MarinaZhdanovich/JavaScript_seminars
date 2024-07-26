// Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

const div = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(div);

const parseData = JSON.parse(data);
console.log(parseData);

parseData.message.forEach(element => {
  div.insertAdjacentHTML('beforeend', `
    <figure>
    <img src="${element}" />
    <figcaption>An elephant at sunset</figcaption>
    </figure>`)
});

const url = "https://jsonplaceholder.typicode.com/users";
async function getData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

try {
  const myData = await getData(url);
  console.log(myData);
  myData.forEach(user => {
    div.insertAdjacentHTML('beforeend', `
      <h2>${user.name}</h2>
      <p>${user.email}</p>`)
  })
} catch (error) {
  console.log(`Ошибка ${error.message}`);
}

