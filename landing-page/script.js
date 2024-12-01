$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
        } 
    });
});


const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const menuLinks = fullscreenMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    fullscreenMenu.classList.remove('open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.remove('open');
    });
});
