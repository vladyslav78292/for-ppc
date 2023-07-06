'use strict';

const menu = document.getElementById('burger-menu');
const closed = document.getElementById('menu-close');
const open = document.getElementById('open-burger');
open.addEventListener('click', () => {
  menu.classList.add('open')
})

closed.addEventListener('click', () => {
  menu.classList.remove('open')
})