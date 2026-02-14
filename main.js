  // Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé - Initialisation du menu');
    
    // Récupérer les éléments du menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Vérifier que les éléments existent
    if (menuToggle && navLinks) {
        console.log('Menu trouvé - Ajout des événements');
        
        // Ouvrir/fermer le menu quand on clique sur le bouton
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Clic sur le menu');
            
            // Basculer la classe active
            navLinks.classList.toggle('active');
            
            // Changer l'icône du menu
            const icon = this.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Fermer le menu quand on clique sur un lien
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Fermer le menu quand on redimensionne (si on repasse en desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Empêcher la propagation des clics dans le menu
        navLinks.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
    } else {
        console.log('Menu non trouvé - Vérifiez les IDs');
        if (!menuToggle) console.log('menuToggle non trouvé');
        if (!navLinks) console.log('navLinks non trouvé');
    }
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }
    
    // Smooth scroll pour les ancres
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
    const navLinks_ = document.querySelectorAll('.nav-links a');
    
    navLinks_.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
