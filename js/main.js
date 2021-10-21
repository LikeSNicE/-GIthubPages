$(function () {
  $(".menu a, .go-top, .footer__item a").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  $('.slider-blog-inner').slick({
    dots: true,
    arrows: true,
    speed: 1500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3800,
    // fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        autoplay: false,
        autoplaySpeed: 6000,
      }
    },
  ]
  });
  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
});
 AOS.init({
   disable: 'phone',
 });
 new vidbg('.game', {
   mp4: 'video/v4.mp4',
   overlay: false,
   overlayColor: "#fff",
   overlayAlpha: 1,
 });

