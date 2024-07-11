 const p1 = document.querySelector('p');
console.log(p1);


const paragrafElement = document.querySelector("#block  p");
console.log(paragrafElement);


const paragrafElement2 = document.querySelector(".www");
console.log(paragrafElement2);

const pCollections = document.querySelectorAll('.www')[0];
console.log(pCollections);


// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
const url1 = document.querySelector('.link');
url1.textContent = 'link text js';
url1.href = 'https://developer.mozilla.org/ru/'

const img1 = document.querySelector('.photo');
img1.src = 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?w=826&t=st=1720720413~exp=1720721013~hmac=3adf9dfee7878602d61e1dd25f653e9a63cf03806bbcab7d4bee6d612e985942';

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

const newP = document.querySelector('.content');
const text = document.createElement('p');
text.textContent = 'Новый текстовый элемент';
newP.appendChild(text);
// newP.remove();
// newP.removeChild(text);
text.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const div = document.querySelector('.content');
// const btn = document.createElement('button');
// div.appendChild(btn);
// btn.textContent = 'Отправить';
// let count = 0;
// btn.onclick = () => { //стрелочная функция
//   count++;
//   console.log(count);
// }

// btn.addEventListener('click', () => {
//   count++;
//   console.log(count);
// })

// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const div1 = document.querySelector('.content');
const btn = document.createElement('button');
div1.appendChild(btn);
btn.textContent = 'Отправить';
// btn.onclick = () => {
//   btn.textContent = 'Текст отправлен';
// }

btn.addEventListener('click', () => {
  btn.textContent = 'Текст отправлен'
});

