const openMobMenu = document.querySelector('.header__mob-nav');
const mobMenu = document.querySelector('.header__mob-menu');
const mobManuActive = document.querySelector('.header__mob-menu--active');

openMobMenu.addEventListener('click', function (evt) {
  evt.preventDefault();
  mobMenu.classList.add('header__mob-menu--active');
});

// const btnMenu = document.querySelector('.btn');
// const menu = document.querySelector('.menu');
// const toggleMenu = function() {
//     menu.classList.toggle('open');
// }

// btnMenu.addEventListener('click', function(e) {
//     e.stopPropagation();
//     toggleMenu();
// });

// document.addEventListener('click', function(e) {
//     const target = e.target;
//     const its_menu = target == menu || menu.contains(target);
//     const its_btnMenu = target == btnMenu;
//     const menu_is_active = menu.classList.contains('open');

//     if (!its_menu && !its_btnMenu && menu_is_active) {
//         toggleMenu();
//     }
// });
