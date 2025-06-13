jQuery(document).ready(function () {
  jQuery(".c-slider-init").slick({
    dots: false,
    nav: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  jQuery(".slick-current").addClass("initialAnimation");

  // Delay the first slide's animation after page load
  // setTimeout(() => {
  //   jQuery(".slick-current").addClass("initialAnimation zoom-in");
  // }, 800); 

  let transitionSetup = {
    target: ".slick-list",
    enterClass: "u-scale-out",
    doTransition: function () {
      document.querySelector(this.target).classList.add(this.enterClass);
      jQuery(".slick-current").removeClass("animateIn initialAnimation");
    },
    exitTransition: function () {
      setTimeout(() => {
        document.querySelector(this.target).classList.remove(this.enterClass);
        jQuery(".slick-current").addClass("animateIn");
      }, 200); // You can adjust timing here
    },
  };

  jQuery(".c-slider-init").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      transitionSetup.doTransition();
    }
  );

  jQuery(".c-slider-init").on("afterChange", function () {
    transitionSetup.exitTransition();
  });
});
