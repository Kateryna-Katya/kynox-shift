document.addEventListener('DOMContentLoaded', () => {
    // Inizializza icone Lucide
    lucide.createIcons();

    // Effetto scroll per l'header
    const header = document.querySelector('#header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
        }
    });

    // Animazione di ingresso per il logo (GSAP)
    gsap.from(".logo", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "bounce.out"
    });

    // Animazione link menu
    gsap.from(".nav__link", {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        delay: 0.5
    });
});