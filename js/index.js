'use strict';

const slides = document.querySelectorAll('.banner__slide');
const btnLeft = document.querySelector('.banner__slide-btn--prev');
const btnRight = document.querySelector('.banner__slide-btn--next');
let currentSlide = 0;
const maxSlide = slides.length;
const dotsContainer = document.querySelector('.banner__dots-box');

// =======  SLIDER  =========

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// creating dots
const crateDots = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `
        <button class="banner__dot" data-slide='${i}'></button>`,
    );
  });
};

crateDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.banner__dot')
    .forEach((dot) => dot.classList.remove('banner__dot--active'));

  document
    .querySelector(`.banner__dot[data-slide="${slide}"]`)
    .classList.add('banner__dot--active');
};
// go to slide
function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
  );
}

//  next slide
function nextSlide() {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}

// prev slide
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}

// Events

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
  if (e.key === 'ArrowRight') {
    nextSlide();
  }
});

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('banner__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

//  card

//===========   CARDS   ================

const objOne = {
  sale: true,
  notAvailable: false,
  img: 'img/content/55a4f760715a1 1.png',
  title: 'Спасательное снаряжение',
  price: 9100,
};
const objTwo = {
  sale: false,
  notAvailable: true,
  img: 'img/content/pop-1.png',
  title: 'Тестовый товар',
  price: 119100,
};
const objThree = {
  sale: false,
  notAvailable: true,
  img: 'img/content/2178888 1.png',
  title: 'Спасательное снаряжение',
  price: 20200,
};

const objFour = {
  sale: true,
  notAvailable: false,
  img: 'img/content/pop-2.png',
  title: 'Водонепроницаемый Рюкзак',
  price: 9100,
};
const objFive = {
  sale: false,
  notAvailable: false,
  img: 'img/content/55a4f760715a1 1.png',
  title: 'test 2',
  price: 119100,
};
const objSix = {
  sale: false,
  notAvailable: true,
  img:
    'img/content/1813210658_w640_h640_brp-audio-portativnaya-sistema-295100797 1.png',
  title: 'Спасательное снаряжение',
  price: 20200,
};

const objOnePop = {
  sale: true,
  notAvailable: false,
  img:
    'img/content/1813210658_w640_h640_brp-audio-portativnaya-sistema-295100797 1.png',
  title: 'Спасательное снаряжение',
  price: 19100,
};
const objTwoPop = {
  sale: false,
  notAvailable: true,
  img: 'img/content/pop-1.png',
  title: 'Тестовый товар',
  price: 59100,
};
const objThreePop = {
  sale: true,
  notAvailable: true,
  img: 'img/content/2178888 1.png',
  title: 'Спасательное снаряжение',
  price: 2000,
};

const objFourPop = {
  sale: false,
  notAvailable: false,
  img: 'img/content/pop-2.png',
  title: 'Водонепроницаемый Рюкзак',
  price: 9100,
};
const objFivePop = {
  sale: false,
  notAvailable: false,
  img: 'img/content/55a4f760715a1 1.png',
  title: 'Popular product 5',
  price: 119100,
};
const objSixPop = {
  sale: false,
  notAvailable: true,
  img:
    'img/content/1813210658_w640_h640_brp-audio-portativnaya-sistema-295100797 1.png',
  title: 'Спасательное снаряжение',
  price: 20200,
};

const similarArr = [objOne, objTwo, objThree, objFour, objSix, objFive];
const popularArr = [
  objOnePop,
  objTwoPop,
  objThreePop,
  objFourPop,
  objSixPop,
  objFivePop,
];
const similarList = document.querySelector('.similar__list');
const popularList = document.querySelector('.popular__list');

function addNewCard(obj, place) {
  const sale = obj.sale ? 'sale' : '';
  const avail = obj.notAvailable ? 'card__not-available--active' : '';

  place.insertAdjacentHTML(
    'beforeend',

    `<li class="similar__item">
      <div class="card ${sale} ${avail}">
        <button class="wishlist"></button>
        <button class="cart"></button>
        <a href="" class="card__img-wrapper">
          <img src="${obj.img}" alt="" class="card__img" />
        </a>
        <p class="card__hover">посмотреть товар</p>
        <h3 class="card__title"><a href="">${obj.title}</a></h3>
        <span class="card__price">${obj.price}₽</span>
        <p class="card__not-available"
          >нет в наличии<br />
          <span><a href="">Сообщить о поступлении</a></span>
        </p>
      </div>
    </li>`,
  );
}

similarArr.forEach((el) => addNewCard(el, similarList));
popularArr.forEach((el) => addNewCard(el, popularList));

const card = document.querySelectorAll('.card');
const wishlist = document.querySelectorAll('.wishlist');

card.forEach((el, i) => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('wishlist')) {
      wishlist[i].classList.toggle('wishlist--active');
    }
  });
});

/* <div class="card sale">
  <button class="wishlist"></button>
  <button class="cart"></button>
  <div class="card__img-wrapper">
    <img src="img/content/295100712 1.png" alt="" class="card__img" />
  </div>

  <p class="card__hover">посмотреть товар</p>
  <h3 class="card__title">Спасательное снаряжение</h3>
  <span class="card__price">9 800 ₽</span>
  <p class="card__not-available">
    нет в наличии
    <br />
    <span>
      <a href="">Сообщить о поступлении</a>
    </span>
  </p>
</div>; */
