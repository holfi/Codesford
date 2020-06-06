/* Show and close Burger menu */

function burgerMenu(selector) {

    /* Variables */

    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');


    /* Hide toggle menu */

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    /* Show toggle menu */

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu ('.burger-menu');


/* It shows and closes toggle menu for language change */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* Slider */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function slideTime(n){
    n=1
    showSlides(slideIndex += n);
    }
   setInterval(slideTime, 5000);
  