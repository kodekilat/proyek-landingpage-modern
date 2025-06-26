document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('#navbar .burger');
    const navLinks = document.querySelector('#navbar .nav-links');
    const navLinkItems = document.querySelectorAll('#navbar .nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        navLinkItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked
    navLinkItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                // Reset link animations
                navLinkItems.forEach(link => link.style.animation = '');
            }
        });
    });

    // (Opsional) Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Jika scroll lebih dari 50px
            // navbar.classList.add('scrolled'); // Aktifkan jika ada style .scrolled
        } else {
            // navbar.classList.remove('scrolled');
        }
    });

    // (Opsional) Active link highlighting on scroll (lebih kompleks, perlu Intersection Observer)
    // Ini adalah versi sederhana, bisa disempurnakan
    const sections = document.querySelectorAll('main section[id]');
    window.addEventListener('scroll', navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // -50 atau -tinggi navbar
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
});