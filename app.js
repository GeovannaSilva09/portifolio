'use strict'

const cards = document.querySelectorAll('.habilidades');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });

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