$(function (){

    $('input[name=phone]').mask('+7 (999) 999-99-99');
    $('input[name=phone2]').mask('+7 (999) 999-99-99');
  
    $('.ftr-cat-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.footer-nav').toggleClass('active');
    });

    $('.card__description').on('click',function(e){
      e.preventDefault();
      $(this).addClass('active');
    });

    $('.basket-order-count .icon').on('click',function(e){
      e.preventDefault();
      $(this).parent().parent().addClass('remove');
    });

    $('.your-order-count .icon').on('click',function(e){
      e.preventDefault();
      $(this).parent().parent().addClass('remove');
    });

    $('.more-text-btn').on('click',function(e){
      e.preventDefault();
      $(this).siblings('.end-in').addClass('more');
    });

    $('.ser-tab-btn a').on('click',function(e){
      e.preventDefault();
      $('.service-price-tab').removeClass('hide');
    });

    $('.pay-ship-more').on('click',function(e){
      e.preventDefault();
      $(this).parent().toggleClass('active');
    });

    $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
          $('#scroll-top').fadeIn();
      } else {
          $('#scroll-top').fadeOut();
      }
    });
    $('#scroll-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
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
          slidesPerView:2
        },
        480: {
          slidesPerView: 2
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
      loop: false,
      slidesPerView: 4,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView:2
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
          slidesPerView: 3
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


    var swiper = new Swiper(".slide-date", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".date-button-next",
        prevEl: ".date-button-prev",
      },
    });
    var swiper2 = new Swiper(".slide-images", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper2-button-next",
        prevEl: ".swiper2-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });


    var swiper = new Swiper(".keys-slide", {
      navigation: {
        nextEl: '.keys-button-next',
        prevEl: '.keys-button-prev'
      },
      pagination: {
        el: ".keys-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
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

    $('.ser-tab-btn a').on('click', function (e) {
      e.preventDefault();
      $('.service-price-tab').removeClass('hide');
    });


    $('.calc-next').on('click', function (e) {
      e.preventDefault();
      $('.step-one').removeClass('active');
      $('.step-two').addClass('active');
    });
    $('.calc-back').on('click', function (e) {
      e.preventDefault();
      $('.step-two').removeClass('active');
      $('.step-one').addClass('active');
    });

    $('.head-basket-btn').on('click', function (e) {
      e.preventDefault();
      $(this).parent().toggleClass('active');
    });
    
    $(document).mouseup(function (e){
      var div = $(".head-basket-block, .card__description");
      if (!div.is(e.target) 
          && div.has(e.target).length === 0) {
          div.removeClass('active');
      }
    });

    $(window).scroll(function(){
      if ($(this).scrollTop() > 600) {
         $('.fixed-calc').addClass('fix');
      } else {
         $('.fixed-calc').removeClass('fix');
      }
    });


    $('select').each(function(){
      var $this = $(this), numberOfOptions = $(this).children('option').length;
    
      $this.addClass('select-hidden'); 
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');
  
      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());
    
      var $list = $('<ul />', {
          'class': 'select-options'
      }).insertAfter($styledSelect);
    
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }
    
      var $listItems = $list.children('li');
    
      $styledSelect.click(function(e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
      });
    
      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          //console.log($this.val());
      });
    
      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });
  
    });
  
});
  
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
      button.classList.toggle('added');
  });
});

