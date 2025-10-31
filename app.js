'use strict'

const cards = document.querySelectorAll('.habilidades');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.5 });

cards.forEach(card => {
    observer.observe(card);
});


// Animação de digitação
const text = "Desenvolvedora Júnior com foco em Backend.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60); // velocidade da digitação
    }
}

typeEffect();


const footer = document.querySelector('footer');

function checkFooterVisibility() {
    const rect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
}

window.addEventListener('scroll', checkFooterVisibility);
window.addEventListener('load', checkFooterVisibility);




const workSection = document.querySelector('.work');

function checkWorkVisibility() {
    const rect = workSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        workSection.classList.add('show-work');
    } else {
        workSection.classList.remove('show-work');
    }
}

window.addEventListener('scroll', checkWorkVisibility);
window.addEventListener('load', checkWorkVisibility);
