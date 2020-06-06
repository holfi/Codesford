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