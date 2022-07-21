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
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 991px
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
setTimeout(function(){ loader.style.display = "none"; }, 1300);

// Tilt poster
var tilt = document.getElementById("js-tilt");
VanillaTilt.init(tilt, {
  scale: 1.14,
  perspective: 10000
});
