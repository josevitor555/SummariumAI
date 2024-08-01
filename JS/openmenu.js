document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector('#menu-icon');
  let navmenu = document.querySelector('.nav-menu');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');

    if (menu.classList.contains('bx-x')) {
      console.log('Menu opened!');
    } else {
      console.log('Menu its clossed!');
    }
  }
});