$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');
  
    $('.ftr-cat-btn').on('click',function(e){
        e.preventDefault();
        $('.footer-nav').toggleClass('active');
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
  
    var swiper3 = new Swiper('.tab-video-slide', {
      // Default parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      // Responsive breakpoints
      navigation: {
          nextEl: '.video-button-next',
          prevEl: '.video-button-prev',
      }
    });
  
    const swiper5 = new Swiper('.accessory-slide', {
      // Default parameters
      loop: false,
      slidesPerView: 4,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView:1
        },
        480: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        990: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 2.3
        },
        1400: {
          slidesPerView: 3
        }
      },
      navigation: {
          nextEl: '.accessory-button-next',
          prevEl: '.accessory-button-prev'
      }
    });

    const swiper6 = new Swiper('.similar-slide', {
      // Default parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView:1
        },
        480: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        990: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 2.3
        },
        1400: {
          slidesPerView: 3
        }
      },
      navigation: {
          nextEl: '.similar-button-next',
          prevEl: '.similar-button-prev'
      }
    });
  
    $('.nav-tabs .nav-link').on('click',function(e){
      e.preventDefault();
      $(this).parent().toggleClass('active');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });

    new ModalVideo('.tab-v');

    $('.mob-m, .header-cross').on('click', function (e) {
      e.preventDefault();
      $('.header').toggleClass('active');
    });
  
  });
  
  