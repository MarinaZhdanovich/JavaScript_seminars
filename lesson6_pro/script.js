// Дан макет
// https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh
// op-(Copy)-(Copy)?node-id=73%3A140 в котором
// представлены товары на странице корзины
// 2. Необходимо создать файл data.js в котором создать
// переменную dataProducts в которую присвоить JSON
// данные по товарам.
// 3. Вам нужно самостоятельно создать JSON данные (не
// забыть про кавычки для ключей и значений
// 4. Добавить все данные из макета, чтобы в дальнейшим по
// ним мы смогли создать вёрстку

// Задание 2 (тайминг 30 минут)
// 1. Создаём вёрстку по данному макету
// 2. Добавляем все теги и стили для них, чтобы получилось
// один в один как в макете
// 3. Пока данные для шаблонизации использовать не нужно

// Задание 3 (тайминг 40 минут)
// 1. Создаём блоки с помощью javascript для этого используем данные
// из dataProducts
// 2. Формируем товары на основе нашей вёрстки
// 3. Проверяем, как будет выглядеть сайт, если в json данных, добавить
// еще один объект с товаром (в вёрстке должен появиться еще один
// блок, на основе этих данных)

const url = './data.json';

async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener('DOMContentLoaded', async(e) => {
  const data = await getData(url);
  const list = document.querySelector('.cards');
  data.forEach(element => {
    list.insertAdjacentHTML('beforeend', `
      <div class="card">
					<img src="${element.img}" alt="${element.title}" />
					<div class="descriprion">
						<h2>${element.title}</h2>
						<div class="list">
							<p>Price: <span class="red">$${element.price}</span></p>
							<p>Color: <span class="gray">${element.color}</span></p>
							<p>Size: <span class="gray">${element.size}</span></p>
							<p>Quantity: <input type="number" value="${element.count}" /></p>
						</div>
					</div>
					<button class="delite">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
								fill="#575757"
							/>
						</svg>
					</button>
				</div>
      `)
  });
  list.addEventListener('click', (e) => {
    if(e.target.closest('.delite')) {
      const item = e.target.closest('.card');
      if(item) {
        item.remove();
      }
    }
  })
})

