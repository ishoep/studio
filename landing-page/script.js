const translations = {
    ru: {
      about: "О нас",  
    }
}

// Язык по умолчанию и логика автозагрузки
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Добавление событий на кнопки
document.getElementById("langSwitcher").addEventListener("click", (event) => {
    if (event.target.dataset.lang) {
        const lang = event.target.dataset.lang;
        setLanguage(lang);
    }
});

// Установка языка при загрузке страницы
const browserLang = navigator.language.slice(0, 2);
setLanguage(translations[browserLang] ? browserLang : "en");






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