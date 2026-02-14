  // Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé');
    
    // Récupérer les éléments
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Vérifier que les éléments existent
    if (menuToggle && navMenu) {
        console.log('Menu trouvé');
        
        // Clic sur le bouton menu
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Clic menu');
            
            // Ouvrir/fermer le menu
            navMenu.classList.toggle('active');
            
            // Changer l'icône
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Clic sur les liens du menu
        const links = navMenu.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
        
        // Clic ailleurs sur la page
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
        
        // Redimensionnement
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    } else {
        console.log('Menu non trouvé');
    }
    
    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message envoyé ! Nous vous répondrons bientôt.');
            this.reset();
        });
    }
    
    // Lien actif
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
