// Swiper
var slideServices = new Swiper(".slide-services", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl:
      ".s-products .services .slide-services .swiper-navigation .button-next",
    prevEl:
      ".s-products .services .slide-services .swiper-navigation .button-prev",
  },
});

var slideProducts = new Swiper(".slide-products", {
  slidesPerView: 10,
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: "true",
    snapOnRelease: true,
    dragSize: "auto",
  },
});

//Menu modal
const btnAbrirModal = document.getElementById("js-btn-sites");
const modalMenu = document.getElementById("js-modal-menu");
const imgBtnAbrirModal = btnAbrirModal.querySelector("img");

btnAbrirModal.addEventListener("click", () => {
  if (modalMenu.classList.contains("active")) {
    imgBtnAbrirModal.style.transform = "rotate(0deg)";
    modalMenu.classList.remove("active");
  } else {
    imgBtnAbrirModal.style.transform = "rotate(180deg)";
    modalMenu.classList.add("active");
  }
});
