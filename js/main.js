$(function () {
  $('.banner__slider').slick({
    dots: true,
    prevArrow:
      '<button class="banner__slider-btn banner__slider-btn--prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner__slider-btn banner__slider-btn--next"><img src="img/arrow-right.svg" alt=""></button>',
  });

  $('.search__tab').on('click', function (e) {
    e.preventDefault();

    $('.search__tab').removeClass('search__tab--active');
    $('.search__content-item').removeClass('search__content-item--active');

    $(this).addClass('search__tab--active');
    $($(this).attr('href')).addClass('search__content-item--active');
  });
});
