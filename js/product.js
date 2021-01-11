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

const similarArr = [
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

const card = document.querySelectorAll('.card');
const wishlist = document.querySelectorAll('.wishlist');

// wishlist
card.forEach((el, i) => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('wishlist')) {
      wishlist[i].classList.toggle('wishlist--active');
    }
  });
});

//  Scroll & read me
const github = document.querySelector('.github');
const readme = document.querySelector('.readme');

window.addEventListener('scroll', () => {
  github.classList.toggle('github--active', window.scrollY > 200);
  // readme.classList.toggle('readme--active', window.scrollY > 200);
});
