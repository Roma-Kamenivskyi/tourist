$(function() {
  $(".slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: true,
    infinite: true,
    dots: false,
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

  $(".slick-cards").slick({
    centerMode: true,
    slidesToShow: 4,
    infinite: true,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
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
  $(".partners-slick").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4
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
          slidesToShow: 1
        }
      }
    ]
  });

  // Navbar accordion dropdown
  $(".dropdown-toggle").on("click", function() {
    $(".dropdown-menu")
      .not($(this).next())
      .slideUp();
    $(this)
      .next()
      .slideToggle();
  });

  // Mobile burger menu
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
});
