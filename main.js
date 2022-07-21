const lightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true,
});

// Preloading
let loader = document.getElementById("loader");
setTimeout(function(){ loader.style.display = "none"; }, 1300);