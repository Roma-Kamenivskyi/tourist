$(function() {
  // Global variables
  const toTopBtn = $("#toTopBtn");
  const mobileWrap = $(".mobile-nav-wrapper");

  // Event Listeners
  $(".close-mobile-nav").on("click", closeMobileNavigation);
  $(window).on("scroll", displayBtnByScroll);
  toTopBtn.on("click", scrollToTop);

  // Navbar accordion dropdown
  $(".dropdown-toggle").on("click", function() {
    $(".dropdown-menu")
      .not($(this).next())
      .slideUp();
    $(this)
      .next()
      .slideToggle();
  });

  // Open burger menu

  $(".burger-menu").on("click", function() {
    $("html, body").css("overflow-y", "hidden");
    mobileWrap.css({
      left: "0",
      right: "0"
    });
  });

  // functions
  function closeMobileNavigation() {
    $("html, body").css("overflow-y", "auto");
    mobileWrap.css({
      left: "-1000px",
      right: "auto"
    });
  }

  function displayBtnByScroll() {
    if ($(this).scrollTop() > 400) {
      toTopBtn.css("bottom", "6rem");
    } else {
      toTopBtn.css("bottom", "-10rem");
    }
  }

  function scrollToTop(event) {
    event.preventDefault();
    $("body, html").animate({ scrollTop: 0 }, 500);
  }

  // Plugins init
  const typed = new Typed("#typed", {
    strings: [
      "We know what you need",
      "Join us, you will not regret",
      "Save Upto 40% For Upcoming Summer",
      "We have very nice prices, check it out"
    ],
    startDelay: 20,
    backSpeed: 40,
    typeSpeed: 70,
    loop: true
  });

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
});
