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

const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const divImage = item.querySelector(".accordion__item-icon");
    const image = divImage.querySelector("img");
    /* image.style.transform = "rotate(45deg)"; */

    image.classList.toggle("rotateImage");
    item.nextElementSibling.classList.toggle("active");
  });
});
