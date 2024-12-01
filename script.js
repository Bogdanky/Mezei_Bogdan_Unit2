// Selectăm titlul și imaginile
const monitorizareTitle = document.querySelector('#monitorizare-resurse h2'); // Titlul <h2>
let slides = document.querySelectorAll('.slide'); // Toate imaginile
let currentIndex = 0; // Indexul imaginii curente
let slideshowInterval = null; // Variabilă pentru rularea slideshow-ului

// Funcția pentru afișarea unei imagini specifice
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Ascundem toate imaginile
        if (i === index) {
            slide.classList.add('active'); // Afișăm imaginea curentă
        }
    });
}

// Funcția pentru trecerea la următoarea imagine
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Incrementăm indexul ciclic
    showSlide(currentIndex); // Afișăm următoarea imagine
}

// Pornim slideshow-ul la click pe titlu
monitorizareTitle.addEventListener('click', function () {
    if (!slideshowInterval) { // Dacă slideshow-ul nu rulează deja
        slideshowInterval = setInterval(nextSlide, 3000); // Schimbăm imaginea la fiecare 3 secunde
        showSlide(currentIndex); // Afișăm prima imagine
        console.log('Slideshow pornit');
    } else {
        console.log('Slideshow este deja activ!');
    }
});

document.querySelector('#social-button').addEventListener('click', function() {
    window.location.href = 'contact.html';
});