  // Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simuler l'envoi
            console.log('Formulaire soumis:', data);
            
            // Message de confirmation
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }
    
    // Smooth scroll pour les ancres (quand on arrive depuis un lien avec #)
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
    
    // Highlight du menu actif
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
