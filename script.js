console.log(1111);

const swiper = new Swiper(".faq__swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".my-button-next",
    prevEl: ".my-button-prev",
  },
});
