/* <div class="block">

</div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute) */

const block = document.querySelector('.block');
const item = document.createElement('div');
item.className = 'item';
item.textContent = 'Элемент внутри';
block.appendChild(item);

item.style.color = 'blue';
item.style.border = '1px solid black';
item.style.backgroundColor = '#f8f8f8'
item.style.padding = '16px';

item.setAttribute('class', 'item_1');

// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const text = document.querySelector('.text');
console.log(text.previousElementSibling); //<h2 class="heading">Lorem, ipsum dolor.</h2>
console.log(text.parentNode); // <div class="content">
console.log(text.parentNode.previousElementSibling); //   <img src="photo.png" alt="photo">
console.log(text.parentNode.parentElement);//<div class="elem">

console.log( document.documentElement.parentNode ); // выведет document
console.log( document.documentElement.parentElement ); // выведет null

/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */

const h2 = document.querySelector('.subtitle');
console.log(h2);
console.log(h2.parentNode); //<div class="info">
console.log(h2.parentNode.parentNode); //<div class="elem">
console.log(h2.parentNode.parentNode.parentNode); //<div class="item">

/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */


const button = document.querySelector('.btn');
const input = document.querySelector('input');
const form = document.querySelector('form');
let h22; 
button.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращаем отправку формы сразу
  if (input.value.trim() === "") {
    if(!h22) {
      h22 = document.createElement('h2');
      h22.textContent = 'вы не заполнили поле ввода';
      input.after(h22);
    }
    input.style.border = '1px solid red';
  } else {
    if(h22) {
      h22.remove();
      h22 = null;
    }
    input.style.border = '1px solid black';
    form.submit();
    form.reset();
  }
})




