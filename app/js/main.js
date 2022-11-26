$(function () {

  new ModalVideo('.about-video, .reviews-v');

  $('input[name="phone"]').mask('+7 (999) 999-99-99');


  let cardRent = document.querySelectorAll('.card--rent');

  if (cardRent) {
    cardRent.forEach(item => {
      const
        input = item.querySelector('.card-num'),
        result = item.querySelector('.card-res');
      sumPerDay = $('.card-res').attr('data-perday');

      $('input').on('input', function () {

        $(result).val($(input).val() * sumPerDay);
      });

    })
  }

  // let filtersWrap = document.querySelectorAll('.filters-w');

  // if (filtersWrap) {
  //   filtersWrap.forEach(item => {
  //     const
  //       checkboxes = item.querySelectorAll('.filters__checkbox');

  //     if ($('.filters__checkbox').first().hasClass('checked')) {
  //       checkboxes.forEach(item => {
  //         item.addClass('checked');
  //       })
  //     } else {
  //       console.log('dld')
  //     }
  //   })
  // }

  if ($(window).width() <= 992) {

    $('.catalog-sort').on('click', function () {
      $('.catalog-sort__list').css('opacity', '1');
      $('.catalog-sort__list').css('visibility', 'visible');
    })
    $(document).mouseup(function (e) {
      var container = $(".catalog-sort");
      if (container.has(e.target).length === 0) {
        $('.catalog-sort__list').css('opacity', '0');
        $('.catalog-sort__list').css('visibility', 'hidden');
      }
    });


  }



  if ($(window).width() > 992) {


    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.header').css('top', '-41px');
      }
      if ($(this).scrollTop() < 100) {
        $('.header').css('top', '0');
      }
    });

  }

  $('.reviews-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.reviews-arrow--next',
    prevArrow: '.reviews-arrow--prev',
    responsive: [{
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.articles-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.articles-arrow--next',
    prevArrow: '.articles-arrow--prev',
    responsive: [{
        breakpoint: 1301,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.hero-arrow--next',
    prevArrow: '.hero-arrow--prev',
    autoplay: true,
    speed: 1200,
    fade: true,
    dots: true,
  });

  $('.brends-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '.brends-arrow--next',
    prevArrow: '.brends-arrow--prev',
    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });


  $('.reviews-i, .card-slider').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

      }
    });
  });

  setTimeout(function () {
    $('.filters__checkbox, .cta-checkbox').styler();

  }, 100);



  $('.accessories-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.accessories-arrow--next',
    prevArrow: '.accessories-arrow--prev',
    responsive: [{
      breakpoint: 1351,
      settings: {
        slidesToShow: 2,
      }
    }, ]
  });


  const
    catalogItems = document.querySelectorAll('.card');
  catalogs = document.querySelectorAll('.cards');

  if (catalogs) {
    catalogs.forEach(item => {
      cardList = item.querySelector('.cards-list'),
        cardPrev = item.querySelector('.cards-arrow--prev'),
        cardNext = item.querySelector('.cards-arrow--next');

      $(cardList).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: cardNext,
        prevArrow: cardPrev,
        responsive: [{
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
          }
        }, ]
      });
    });
  };


  if (catalogItems) {
    catalogItems.forEach(item => {
      const
        cardSlider = item.querySelector('.card-slider'),
        cardPrev = item.querySelector('.card-arrow--prev'),
        cardNext = item.querySelector('.card-arrow--next');

      $(cardSlider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: cardNext,
        prevArrow: cardPrev,
      });

    });
  };




  $("img.hero-a, img.card-a, img.cards-a, img.brends-a, img.reviews-a, img.articles-a, img.pagination-img, img.accessories-a, img.drop-arrow, img.drop-list__arrow").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
          $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });

  //  Spincrement function
  $.fn.spincrement = function (opts) {
    // Default values
    var defaults = {
      from: 0,
      to: null,
      decimalPlaces: null,
      decimalPoint: '.',
      thousandSeparator: ',',
      duration: 1000, // ms; TOTAL length animation
      leeway: 50, // percent of duraion
      easing: 'spincrementEasing',
      fade: true,
      complete: null
    }
    var options = $.extend(defaults, opts)

    // Function for formatting number
    var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/)

    function format(num, dp) {
      num = num.toFixed(dp) // converts to string!

      // Non "." decimal point
      if ((dp > 0) && (options.decimalPoint !== '.')) {
        num = num.replace('.', options.decimalPoint)
      }

      // Thousands separator
      if (options.thousandSeparator) {
        while (re_thouSep.test(num)) {
          num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2')
        }
      }
      return num
    }

    // Apply to each matching item
    return this.each(function () {
      // Get handle on current obj
      var obj = $(this)

      // Set params FOR THIS ELEM
      var from = options.from
      if (obj.attr('data-from')) {
        from = parseFloat(obj.attr('data-from'))
      }

      var to
      if (obj.attr('data-to')) {
        to = parseFloat(obj.attr('data-to'))
      } else if (options.to !== null) {
        to = options.to
      } else {
        var ts = $.inArray(options.thousandSeparator, ['\\', '^', '$', '*', '+', '?', '.']) > -1 ? '\\' + options.thousandSeparator : options.thousandSeparator
        var re = new RegExp(ts, 'g')
        to = parseFloat(obj.text().replace(re, ''))
      }

      var duration = options.duration
      if (options.leeway) {
        // If leeway is set, randomise duration a little
        duration += Math.round(options.duration * ((Math.random() * 2) - 1) * options.leeway / 100)
      }

      var dp
      if (obj.attr('data-dp')) {
        dp = parseInt(obj.attr('data-dp'), 10)
      } else if (options.decimalPlaces !== null) {
        dp = options.decimalPlaces
      } else {
        var ix = obj.text().indexOf(options.decimalPoint)
        dp = (ix > -1) ? obj.text().length - (ix + 1) : 0
      }

      // Start
      obj.css('counter', from)
      if (options.fade) obj.css('opacity', 0)
      obj.animate({
        counter: to,
        opacity: 1
      }, {
        easing: options.easing,
        duration: duration,

        // Invoke the callback for each step.
        step: function (progress) {
          obj.html(format(progress * to, dp))
        },
        complete: function () {
          // Cleanup
          obj.css('counter', null)
          obj.html(format(to, dp))

          // user's callback
          if (options.complete) {
            options.complete(obj)
          }
        }
      })
    })
  }

  let numbers = document.querySelector('.nums');

  if (numbers) {



    var show = true;
    var countbox = ".nums";
    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.num').css('opacity', '1');
        $('.num').spincrement({
          thousandSeparator: "",
          duration: 1500
        });

        show = false;
      }
    });

    $.extend($.easing, {
      // This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
      spincrementEasing: function (x, t, b, c, d) {
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
      }
    })

  }

  $('.drop').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active')
  })

  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 5000000,
    from = 0,
    to = 0;

  function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }
  prettify(1000000);

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200000,
    to: 4000000,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");



    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });


  $('.catalog-sort__item').on('click', function () {
    $('.catalog-sort__item').removeClass('active');
    $(this).addClass('active');
  });

  $('.drop-list__item > span').on('click', function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass('active')
  })


  $('.search-btn').on('click', function (e) {
    e.preventDefault();
    $('.header-search--mob').css('top', '0');
  });

  $('.search-cross').on('click', function (e) {
    $('.header-search--mob').css('top', '-120%');

  });

  $('.filters-mob').on('click', function () {
    $('.filter').css('top', '0')
  })

  $('.filters-cross').on('click', function () {
    $('.filter').css('top', '-150%')
  })


})