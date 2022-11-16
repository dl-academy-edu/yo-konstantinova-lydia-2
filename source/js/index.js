var menuOpen = document.querySelector('.header-mob__btn')
var headerMob = document.querySelector('.header-mob')
var menuOpenFull = document.querySelector('.header-mob-open__wrap')
var closeMenu = document.querySelector('.close-btn-js')

menuOpen.addEventListener('click', function() {
     headerMob.classList.add('hidden');
     headerMob.classList.remove('header-mob-js');
     menuOpenFull.classList.remove('hidden');
  })

  closeMenu.addEventListener('click', function() {
    menuOpenFull.classList.add('hidden');
    headerMob.classList.remove('hidden');
    headerMob.classList.add('header-mob-js');
  })