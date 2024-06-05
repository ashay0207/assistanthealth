var swiper = new Swiper(".partner-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
        320: { // Mobile portrait
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: { // Mobile landscape
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: { // Tablet
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

var swiper = new Swiper(".test-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });