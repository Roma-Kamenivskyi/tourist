$(function() {
  $(".slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: true,
    infinite: true,
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
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".dropdown-toggle").on("click", function() {
    $(".dropdown-menu")
      .not($(this).next())
      .slideUp();
    $(this)
      .next()
      .slideToggle();
  });
  $(".burger-menu").on("click", function() {
    $(".mobile-navigation").slideToggle();
  });

  //   let $burgers = $(".c-hamburger");
  //   $burgers.each(function(item) {

  //   });
  //   on("click", function(e) {
  //     e.preventDefault();
  //     $(this).toggleClass("is-active");
  //   });
  // $('#menuToggle').on('click', function(){
  //     $(this).toggleClass('menu-toggle--active');
  //     return false;
  // });
});
