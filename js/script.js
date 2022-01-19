'use strict';

window.addEventListener('DOMContentLoaded', () => { 
  
  const iconMenu = document.querySelector('.header__icon-menu')

  if (iconMenu) {
    const menu = document.querySelector('.header__body')
    iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menu.classList.toggle('_active')
    })

  }
})