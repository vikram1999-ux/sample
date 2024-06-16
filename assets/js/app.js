$(".MainBanner_slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  fade: true,
  prevArrow: $(".customc-prev"),
  nextArrow: $(".customc-next"),
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("#Header").addClass("shrink");
  } else {
    $("#Header").removeClass("shrink");
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  fade: true,
  dots: false,
  smartSpeed: 600,
  slideSpeed: 300,
  paginationSpeed: 400,
  mouseDrag: true,
  singleItem: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".wizard-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  nav: true,
  mouseDrag: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-carousel-brand").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  fade: true,
  dots: false,
  smartSpeed: 600,
  slideSpeed: 300,
  paginationSpeed: 400,
  mouseDrag: true,
  singleItem: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 5,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {
    document
      .querySelectorAll(".nav-item.dropdown")
      .forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", function () {
          this.querySelector(".dropdown-menu").classList.add("show");
        });
        dropdown.addEventListener("mouseleave", function () {
          this.querySelector(".dropdown-menu").classList.remove("show");
        });

        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      });
  } else {
    document
      .querySelectorAll(".nav-item.dropdown > .nav-link")
      .forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
          e.preventDefault();
          let parentDropdown = this.parentElement;
          let submenu = parentDropdown.querySelector(".dropdown-menu");
          submenu.classList.toggle("show");
        });
      });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-item.dropdown")) {
        document
          .querySelectorAll(".nav-item.dropdown .dropdown-menu")
          .forEach(function (submenu) {
            submenu.classList.remove("show");
          });
      }
    });
  }

  document
    .querySelector(".nav-item.dropdown > .nav-link[href='services.html']")
    .addEventListener("click", function (e) {
      // Directly navigate to services.html
      window.location.href = "services.html";
    });
});

var typed = new Typed(".typing", {
  strings: ["1800" + "234" + "567" + "890"],
  typeSpeed: 100,
  backSpeed: 60,
  deleteSpeed: 50,
  waitBeforeDelete: 200000,
  waitBetweenWords: 500,
  loop: true,
});
var typed = new Typed(".mytyping", {
  strings: ["1800" + "234" + "567" + "890"],
  typeSpeed: 1000,
  backSpeed: 60000,
  deleteSpeed: 50,
  waitBeforeDelete: 200000,
  waitBetweenWords: 500,
  loop: true,
});
