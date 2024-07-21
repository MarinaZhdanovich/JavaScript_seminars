// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const input = document.querySelector('#check');
// const form = document.querySelector('form');
// const button = document.querySelector('button');
// let errorMessage = false; // сообщения об ошибке нет
// button.addEventListener('click', (e) => {
//   e.preventDefault(); //предотвращает отправку формы по умолчанию при нажатии на кнопку.
//   // при нажатии на кнопку форма была бы отправлена на сервер сразу же, как это происходит по умолчанию при нажатии на кнопку с типом submit, даже если условия не выполнены (например, если чекбокс не отмечен).Браузер перейдёт на URL, указанный в атрибуте action формы (или перезагрузит страницу, если атрибут action пуст).
//   if(!input.checked && !errorMessage) { //Если чекбокс не отмечен и сообщения об ошибке не появилось
//     console.log(input.checked); //false
//     console.log(errorMessage); //false
//     const p = document.createElement('p');
//     p.textContent = "Необходимо согласиться с условиями";
//     p.style.color = 'red'
//     button.insertAdjacentElement('afterend', p);
//     errorMessage = true; //чтобы предотвратить создание дублирующихся сообщений об ошибке.
//   } else if (input.checked) {
//     form.submit();
//   }
// });

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести сообщение “кофе закончился”
// const drink = document.querySelectorAll('[name="drink"]');
// const button = document.querySelector('button');

// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   drink.forEach((button) => {
//     if(button.checked) {
//       if(button.id === 'cofee') {
//         const p = document.createElement('p');
//         p.textContent = 'кофе закончился';
//         button.insertAdjacentElement('afterend', p);
//       } else if (button.id === 'tea') {
//         const pa = document.createElement('p');
//         pa.textContent = 'Чай закончился';
//         button.insertAdjacentElement('afterend', pa);
//       }
//     }
//   })
// });

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   if(input.value.toLowerCase() === 'пароль') {
//     input.style.border = '1px solid green';
//     form.submit();
//   } else {
//     input.style.border = '1px solid red';
//     input.value = '';
//     input.placeholder = 'пароль неверный'
//   }
// })


// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
const input = document.querySelector('input');
const h = document.querySelector('h1');

input.addEventListener('input', () =>{
  h.textContent = input.value;
})
