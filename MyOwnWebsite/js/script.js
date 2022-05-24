let navbar = document.getElementById('navbar').classList
console.log(navbar)
let main_content =  document.querySelector(".main-content")
console.log(main_content)
main_content = main_content.classList
console.log(main_content)
let active_class_navbar = "navbar-scrolled"
let active_class_main = "main-active"
let hero_height = document.getElementById('section-hero').clientHeight;

window.addEventListener('load', e => {
  if(scrollY > hero_height * 0.3) {
    main_content.add(active_class_main)
  }
})

window.addEventListener('scroll', e => {
  if(scrollY > hero_height * 0.3) {
    main_content.add(active_class_main)
  }
})

window.addEventListener('scroll', e => {
  if(scrollY > hero_height * 0.9) {
    navbar.add(active_class_navbar)
  }
    else navbar.remove(active_class_navbar)
})

const anchors = document.querySelectorAll('a[href*="#"]')
console.log(anchors)

for (let anchor of anchors) {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let hBurger =  document.querySelector(".header-burger")
$(document).ready(function() {
  hBurger.addEventListener("click", e => {
  $('.header-burger,.header-menu').toggleClass('active');
  $('body').toggleClass('lock');
})
})

$(document).ready(function() {
$('.header-link').click(function(event) {
  $('.header-burger,.header-menu').toggleClass('active');
  $('body').toggleClass('lock');
});
});


$(document).ready(function() {
  $('.btn-get-started').click(function(event) {
    window.scrollTo({
      top: hero_height,
      behavior: 'smooth'
    });
  });
  });


$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  });
  $('.slider').on('afterChange', function(event, slick, currentSlide){
  });
});
