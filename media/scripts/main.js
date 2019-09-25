$(function() {
  $(".slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: true,
    infinite: true,
    dots: false,
<<<<<<< HEAD

=======
    
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.slick-cards').slick({
    centerMode: true,
    slidesToShow: 4,
    infinite: true,

<<<<<<< HEAD
  $(".slick-cards").slick({
    centerMode: true,
    slidesToShow: 4,
    infinite: true,

=======
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
    responsive: [
      {
        breakpoint: 1100,
        settings: {
<<<<<<< HEAD
          slidesToShow: 3
=======
          slidesToShow: 3,
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
        }
      },
      {
        breakpoint: 800,
        settings: {
<<<<<<< HEAD
          slidesToShow: 2
=======
          slidesToShow: 2,
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });
<<<<<<< HEAD
  $(".partners-slick").slick({
=======
  $('.partners-slick').slick({
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
<<<<<<< HEAD
          slidesToShow: 4
=======
          slidesToShow: 4,
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
<<<<<<< HEAD
          slidesToShow: 1
=======
          slidesToShow: 1,
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
        }
      }
    ]
  });

<<<<<<< HEAD
  // Navbar accordion dropdown
=======
  // Navbar dropdown
>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
  $(".dropdown-toggle").on("click", function() {
    $(".dropdown-menu")
      .not($(this).next())
      .slideUp();
    $(this)
      .next()
      .slideToggle();
  });

  // Mobile burger menu
<<<<<<< HEAD
  const mobileWrap = $(".mobile-nav-wrapper");
  $(".burger-menu").on("click", function() {
    mobileWrap.css({
      left: "0",
      right: "0"
    });
  });

  // CLOSE BTN
  $(".close-mobile-nav").on("click", function() {
    mobileWrap.css({
      left: "-1000px",
      right: "auto"
    });
  });
=======
  let mobileWrap = $('.mobile-nav-wrapper');
  $(".burger-menu").on("click", function() {
    mobileWrap.slideDown();
    $("html, body").css('overflow', 'hidden');
  });

  $('.close-mobile-nav').on('click', function() {
    mobileWrap.slideUp();
    $("html, body").css('overflow', 'visible');
  });

>>>>>>> 1f1ab21db7fba07d0ec33ac28dd5b888185c38a8
});
