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