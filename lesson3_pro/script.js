// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
// const body = document.querySelector('body');
// body.insertAdjacentHTML('afterbegin', `<button>Купить</button>`);
// const btn = document.querySelector('button');
// window.onload = () => console.log('страница загрузилась'); //выполнить код только после того, как всё на странице загрузилось
// btn.onclick = () => console.log('событие onclick');
// Добавление события onclick //Это более старый способ.(Если назначить новую функцию через btn.onclick, она заменит предыдущую.)
// btn.addEventListener('click', () => console.log('событие addEventListener'));//Добавление события через addEventListener
//Это более новый и гибкий способ.(Можно добавить несколько обработчиков для одного события, и все они будут выполнены.)

// Если вам нужно получить информацию о событии, например, координаты клика, элемент, на который кликнули, или предотвратить стандартное поведение события, тогда вам нужно указать event (или e).
// btn.onclick = (event) => {
//   console.log('событие onclick');
//   console.log('Тип события:', event.type); // тип события, например, "click"
//   console.log('Координаты клика:', event.clientX, event.clientY); // координаты клика
// };

// btn.addEventListener('click', (event) => {
//   console.log('событие addEventListener');
//   console.log('Тип события:', event.type); // тип события, например, "click"
//   console.log('Координаты клика:', event.clientX, event.clientY); // координаты клика
// });

// event.target - элемент, на котором произошло событие.
// event.preventDefault() - предотвратить стандартное поведение события (например, переход по ссылке при клике).

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const body2 = document.querySelector('body');
// for (let i = 0; i < 3; i++) {
//   body2.insertAdjacentHTML('afterbegin', `<button>Купить ${i + 1}</button>`);
// }
// //делегирование событий - обработки событий на родительских элементах,
// // Использование свойства event.target
// body2.addEventListener('click', (e) => {
//   if(e.target.nodeName === 'BUTTON') { //nodeName возвращает имя узла в виде строки, представленное в ЗАГЛАВНЫХ буквах (Применяется ко всем узлам DOM, включая элементы, комментарии, текстовые узлы и другие типы узлов.) аналог tagName применяется только к элементам DOM.
//     console.log(`Нажали на кнопку ${e.target.textContent}`);
//   }
// } );

// body2.insertAdjacentHTML('afterbegin', `<button class="btn4">Купить 4</button>`);
// const btn4 = document.querySelector('.btn4')
// let count = 0;
// btn4.addEventListener('click', () => {
//   count++;
//   console.log(`На кнопку нажали ${count} раз`);
// })

// body2.insertAdjacentHTML('afterbegin', `<button class="btn5">Купить 5</button>`);
// const btn5 = document.querySelector('.btn5');
// btn5.addEventListener('click', () => {
//   btn5.textContent = 'Вы нажали на эту кнопку'
// });

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const body3 = document.querySelector('body');
// body3.insertAdjacentHTML('afterbegin', `<button class="btn"">Кнопка1</button>`);
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   const h1 = document.createElement('h1');
//   h1.textContent = 'Новый заголовок'
//   btn.insertAdjacentElement('afterend', h1)  //insertAdjacentElement
// });

// body3.insertAdjacentHTML('afterend', `<button class="btn1"">Кнопка2</button>`);
// const btn1 = document.querySelector('.btn1');
// btn1.addEventListener('click', () => {
//   document.querySelector('h1').remove()
// });

// body3.insertAdjacentHTML('afterend', `<button class="btn2"">Кнопка3</button>`);
// const btn2 = document.querySelector('.btn2');
// btn2.addEventListener('mouseover', () => {
//   console.log('Навели на кнопку3');
// });
// btn2.addEventListener('mouseout', () => {
//   console.log('Наведения на кнопку больше нет');
// });

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
const ol = document.querySelector('ol');
const btn = document.createElement('button');
btn.textContent = 'Кнопка';
ol.insertAdjacentElement('afterend', btn);
btn.addEventListener('click', () =>{
  ol.insertAdjacentHTML('beforeend', "<li>Новый элемент списка</li>")
});

const btn2 = document.createElement('button');
btn2.textContent = 'Кнопка2';
ol.insertAdjacentElement('afterend', btn2);
btn2.addEventListener('click', () => {
  // ol.firstChild.remove();  //ol.firstChild.remove(), может привести к удалению текстовых узлов (пробелов и переносов строк) в <ol>
  ol.firstElementChild.remove();
})

const btn3 = document.createElement('button');
btn3.textContent = 'Кнопка3';
ol.insertAdjacentElement('afterend', btn3);
btn3.addEventListener('click', () => {
  btn3.classList.add('click')
}
);