$(function (){

  $('input[name=phone]').mask('+7 (999) 999-99-99');

  $('.menu-mob, .menu-closer').on('click',function(e){
      e.preventDefault();
      $('.top-left').toggleClass('active');
  });

  

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper3 = new Swiper('.similar-slide-content', {
    // Default parameters
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    }
  });

  const swiper5 = new Swiper('.similar-product-slide', {
    // Default parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      990: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3.3
      },
      1400: {
        slidesPerView: 4
      }
    },
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3'
    }
  });

  $('.nav-tabs .nav-link').on('click',function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

});

