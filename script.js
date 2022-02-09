document.getElementById("amburger-icon").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("navigation__list").classList.toggle("none");
});

window.addEventListener('scroll', (e)=>{
    if(window.scrollY > 0 ) return  document.getElementById("navigation").classList.add("active");
    return document.getElementById("navigation").classList.remove("active");
})
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });