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



// Получаем элементы кнопки открытия, закрытия, меню и ссылок
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const menuLinks = fullscreenMenu.querySelectorAll('a');

// Открытие меню
menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('open');
});

// Закрытие меню по кнопке "✖"
closeMenu.addEventListener('click', () => {
    fullscreenMenu.classList.remove('open');
});

// Закрытие меню при клике на любую ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.remove('open');
    });
});
