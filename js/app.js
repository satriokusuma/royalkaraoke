
var btn = $('#ScrollToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 'slow');
});


//===========CAROUSEL============//
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items:1,
      nav:true,
      autoplay:true,
      autoplayTimeOut:5000,
      rewind:true,
      autoplaySpeed:3000,
      animateOut: 'fadeOut',
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
            
          },
          600:{
              items:1,
              
          },
          1000:{
              items:1,
             
          }
      }
  });
});

// //=======AOS ANIMATE============//
// AOS.init();


//=======NAVBAR============//
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar-link");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
  document.body.classList.toggle("open");
}


navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
   
  }
}
