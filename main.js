  // Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé - Initialisation');
    
    // Récupérer les éléments du menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Vérifier que les éléments existent
    if (menuToggle && navLinks) {
        console.log('Menu trouvé - OK');
        
        // Ouvrir/fermer le menu au clic sur le bouton
        menuToggle.onclick = function(e) {
            e.preventDefault();
            console.log('Clic sur le menu');
            
            // Basculer la classe active
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                navLinks.classList.add('active');
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            }
        };
        
        // Fermer le menu quand on clique sur un lien
        const links = navLinks.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].onclick = function() {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            };
        }
        
        // Fermer le menu si on clique en dehors
        document.onclick = function(e) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        };
    } else {
        console.log('Menu non trouvé');
        if (!menuToggle) console.log('menuToggle manquant');
        if (!navLinks) console.log('navLinks manquant');
    }
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            this.reset();
        };
    }
    
    // Highlight du menu actif
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks_ = document.querySelectorAll('.nav-links a');
    
    navLinks_.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
