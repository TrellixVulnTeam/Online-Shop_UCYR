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

  $('.popular__tab').on('click', function (e) {
    e.preventDefault();

    $('.popular__tab').removeClass('popular__tab--active');
    $('.popular__content-item').removeClass('popular__content-item--active');

    $(this).addClass('popular__tab--active');
    $($(this).attr('href')).addClass('popular__content-item--active');
  });

  $('.popular__list').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button class="popular__slider-btn popular__slider-btn--prev"><img src="img/icons/arrow-left-dark.png" alt=""></button>',
    nextArrow:
      '<button class="popular__slider-btn popular__slider-btn--next"><img src="img/icons/arrow-right-dark.png" alt=""></button>',
  });

  $('.similar__tab').on('click', function (e) {
    e.preventDefault();

    $('.similar__tab').removeClass('similar__tab--active');
    $('.similar__content-item').removeClass('similar__content-item--active');

    $(this).addClass('similar__tab--active');
    $($(this).attr('href')).addClass('similar__content-item--active');
  });

  $('.similar__list').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button class="similar__slider-btn similar__slider-btn--prev"><img src="img/icons/arrow-left-dark.png" alt=""></button>',
    nextArrow:
      '<button class="similar__slider-btn similar__slider-btn--next"><img src="img/icons/arrow-right-dark.png" alt=""></button>',
  });
});
