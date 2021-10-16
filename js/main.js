$('.our-menu__inner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 17000,
  responsive: [
    {
      breakpoint: 321,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.review__slider').slick({
  arrows: false,
  //draggable: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 321,
      settings: {
        arrows: false,
        slidesToScroll: 1,
      }
    }
  ]
});
$(".header-top__link").html("МЕНЮ");


$(".header__btn").on("click", function () {
  $(".header-navbar").toggleClass("header-navbar--active");
});