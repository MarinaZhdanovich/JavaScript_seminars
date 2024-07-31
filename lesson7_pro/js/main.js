// localStorage.setItem('user', 'mzhdanovich')
// console.log(localStorage.getItem('user'));
// localStorage.removeItem('user')
// localStorage.setItem('user1', 'mzhdanovich')
// localStorage.setItem('user2', 'love')
// // localStorage.clear()
// localStorage.admin = {
//   name : "Bob"
// }

// localStorage.admin = JSON.stringify ({
//   name : "Bob"
// })

// console.log(JSON.parse(localStorage.admin));
import {initializeTheme, switchTheme } from "./theme.js";

const userNameInput = document.querySelector('.usernameInput');
const searchButton =document.querySelector('.searchButton');
const reposContainer = document.querySelector('.repos');
const favouritesContainer = document.querySelector('.favourites');
const themeSwitcher = document.querySelector('.themeSwitcher');

initializeTheme()
themeSwitcher.addEventListener('click', switchTheme);

