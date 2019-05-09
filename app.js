var menu = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', function() {
    document.documentElement.classList.toggle('menu-open');
});


/* jQuery -->
$('.menu').on('click', function() {
    $('html').toggleClass('menu-open');
});
*/