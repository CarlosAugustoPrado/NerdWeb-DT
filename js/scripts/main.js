// Swiper
var slideServices = new Swiper(".slide-services", {
  slidesPerView: 3,
  spaceBetween: 24,
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl:
      ".s-products .services .slide-services .swiper-navigation .button-next",
    prevEl:
      ".s-products .services .slide-services .swiper-navigation .button-prev",
  },
  breakpoints: {
    1920: {
      spaceBetween: 24,
    },
    1100: {
      spaceBetween: 4,
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
  },
});

var slideProducts = new Swiper(".slide-products", {
  slidesPerView: 10,
  spaceBetween: 20,
  draggable: true,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: "true",
    snapOnRelease: true,
    dragSize: "auto",
  },
  breakpoints: {
    900: {
      slidesPerView: 10,
    },
    700: {
      slidesPerView: 6,
    },
    500: {
      slidesPerView: 4,
    },
    350: {
      slidesPerView: 2.3,
    },
  },
});

var slideCards = new Swiper(".slide-cards", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  speed: 1000,
  effect: "slide",
  grabCursor: true,
  breakpoints: {
    900: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    300: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

//Menu modal
const btnAbrirModal = document.getElementById("js-btn-sites");
const modalMenu = document.getElementById("js-modal-menu");
const imgBtnAbrirModal = btnAbrirModal.querySelector("i");

btnAbrirModal.addEventListener("click", () => {
  if (modalMenu.classList.contains("active")) {
    imgBtnAbrirModal.style.transform = "rotate(0deg)";
    modalMenu.classList.remove("active");
  } else {
    imgBtnAbrirModal.style.transform = "rotate(180deg)";
    modalMenu.classList.add("active");
  }
});

// Menu e modal mobile
const menuMobile = document.getElementById("js-menu-mobile");
const modalMobile = document.getElementById("js-modal-mobile");
const btnModalMobile = document.getElementById("js-btn-modal-mobile");
const imgMenuMobile = document.getElementById("js-caret-mobile");

const btnOpenMenuMobile = document.getElementById("js-open-menu-mobile");
const btnCloseMenuMobile = document.getElementById("js-closeMenuMobile");

btnCloseMenuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});

btnModalMobile.addEventListener("click", () => {
  if (modalMobile.classList.contains("active")) {
    imgMenuMobile.style.transform = "rotate(0deg)";
    modalMobile.classList.remove("active");
  } else {
    imgMenuMobile.style.transform = "rotate(180deg)";
    modalMobile.classList.add("active");
  }
});

btnOpenMenuMobile.addEventListener("click", () => {
  menuMobile.classList.add("active");
});
