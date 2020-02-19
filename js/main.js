jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code

});



// Nav link color changer
let navLink = document.getElementsByClassName("nav-link");
let colorChanger = Math.floor(Math.random() * 16777215).toString(16);
console.log(colorChanger);
// This event will activate every time the cursor
// is moved onto a nav link
navLink[0].addEventListener("mouseover", event => {
   console.log(navLink);
   // highlight the mouseenter target
   event.target.style.color = `#${colorChanger}`;

   // reset the color after a short delay
   setTimeout(() => {
      event.target.style.color = "";
   }, 700);
}, false);

// This event will activate every time the cursor
// is moved over a nav link
navLink[1].addEventListener("mouseover", event => {
   // highlight the mouseover target
   event.target.style.color = `#${colorChanger}`;

   // reset the color after a short delay
   setTimeout(() => {
      event.target.style.color = "";
   }, 700);
}, false);
navLink[2].addEventListener("mouseover", event => {
   // highlight the mouseover target
   event.target.style.color = `#${colorChanger}`;

   // reset the color after a short delay
   setTimeout(() => {
      event.target.style.color = "";
   }, 700);
}, false);
navLink[3].addEventListener("mouseover", event => {
   // highlight the mouseover target
   event.target.style.color = `#${colorChanger}`;

   // reset the color after a short delay
   setTimeout(() => {
      event.target.style.color = "";
   }, 700);
}, false);
navLink[4].addEventListener("mouseover", event => {
   // highlight the mouseover target
   event.target.style.color = `#${colorChanger}`;

   // reset the color after a short delay
   setTimeout(() => {
      event.target.style.color = "";
   }, 700);
}, false);
navLink[5].addEventListener("mouseover", event => {
   // highlight the mouseover target
   event.target.style.color = `#${colorChanger}`;

   // reset the color after a short delay
   setTimeout(() => {
      event.target.style.color = "";
   }, 700);
}, false);