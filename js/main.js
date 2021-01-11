$(function () {
  // $('.banner__slider').slick({
  //   dots: true,
  //   prevArrow:
  //     '<button class="banner__slider-btn banner__slider-btn--prev"><img src="img/arrow-left.svg" alt=""></button>',
  //   nextArrow:
  //     '<button class="banner__slider-btn banner__slider-btn--next"><img src="img/arrow-right.svg" alt=""></button>',

  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });

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

    $('.popular__list').slick('setPosition');
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.similar__tab').on('click', function (e) {
    e.preventDefault();

    $('.similar__tab').removeClass('similar__tab--active');
    $('.similar__content-item').removeClass('similar__content-item--active');

    $(this).addClass('similar__tab--active');
    $($(this).attr('href')).addClass('similar__content-item--active');

    $('.similar__list').slick('setPosition');
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.product__tab').on('click', function (e) {
    e.preventDefault();

    $('.product__tab').removeClass('product__tab--active');
    $('.product__content-item').removeClass('product__content-item--active');

    $(this).addClass('product__tab--active');
    $($(this).attr('href')).addClass('product__content-item--active');

    $('.product__content').slick('setPosition');
  });

  $('.product__info-tab').on('click', function (e) {
    e.preventDefault();

    $('.product__info-tab').removeClass('product__info-tab--active');
    $('.product__info-item').removeClass('product__info-item--active');

    $(this).addClass('product__info-tab--active');
    $($(this).attr('href')).addClass('product__info-item--active');

    $('.product__content').slick('setPosition');
  });

  $('.catalog__tab').on('click', function (e) {
    e.preventDefault();

    $('.catalog__tab').removeClass('catalog__tab--active');
    $('.catalog__content-item').removeClass('catalog__content-item--active');

    $(this).addClass('catalog__tab--active');
    $($(this).attr('href')).addClass('catalog__content-item--active');

    $('.catalog__content').slick('setPosition');
  });

  //  === Catalog Filter  Tab ===

  // $('.catalog__tab').on('click', function (e) {
  //   e.preventDefault();

  //   $('.catalog__tab').removeClass('catalog__tab--active');
  //   $('.catalog__content-item').removeClass('catalog__content-item--active');

  //   $(this).addClass('catalog__tab--active');
  //   $($(this).attr('href')).addClass('catalog__content-item--active');

  //   $('.catalog__content').slick('setPosition');
  // });
});
