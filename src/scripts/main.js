// 'use strict';

// let counter = 0;

// for (const menu of document.querySelectorAll(".content-menu")) {
//   menu.addEventListener("click", () => {
//       menu.querySelector(".menu-text").classList.toggle("menu-text-open");
//       menu.querySelector(".list_titles").classList.toggle("active_menu");
//       if (counter % 2 === 0) {
//         menu.classList.add("active");
//       } else {
//         menu.classList.remove("active");
//       }
//       counter = counter + 1;
//       menu.querySelector(".menu-content").classList.toggle(
//           "menu-content-hidden"
//       );
//       console.log(counter)
//   });
// }

// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//   const select = dropdown.querySelector('.select');
//   const caret = dropdown.querySelector('.caret');
//   const menu = dropdown.querySelector('.menu');
//   const options = dropdown.querySelectorAll('.menu li');

//   select.addEventListener('click', () => {
//     select.classList.toggle('select-clicked');
//     menu.classList.toggle('menu-open');
//   });

//   options.forEach(option => {
//     option.addEventListener('click', () => {
//       select.classList.remove('select-clicked');
//       menu.classList.remove('menu-open');
//     });
//   });
// });
