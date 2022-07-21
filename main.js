const lightbox1 = GLightbox({
  selector: ".glightbox1",
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
});

const lightbox2 = GLightbox({
  selector: ".glightbox2",
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  plyr: {
    config: {
      controls: [
        "volume",
        "settings",
        "fullscreen",
        "mute",
        "captions",
        "progress",
      ],
    },
  },
});

// Preloading
let loader = document.getElementById("loader");
setTimeout(function () {
  loader.style.display = "none";
}, 1300);

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
