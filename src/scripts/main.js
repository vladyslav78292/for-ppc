const html = document.querySelector('.theme-light');
const switch_theme = document.querySelector('.slider');
let counter = 0;

switch_theme.addEventListener('click', () => {
  counter++;

  if (html.classList[0] === ('theme-light') && html.classList.length === 1) {
    html.classList.remove('theme-light');
    html.className += 'theme-dark';
    console.log(12345);
  } else if (html.classList[0] === ('theme-dark')) {
    console.log(123);
    html.classList.remove('theme-dark');
    html.className += 'theme-light';
  }

});
