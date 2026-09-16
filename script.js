// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar hide/show on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        menuBtn.querySelector('i').className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';

        if (isMenuOpen) {
            navLinks.style.right = '0';
            navOverlay.style.visibility = 'visible';
            navOverlay.style.opacity = '1';
            document.body.style.overflow = 'hidden';
        } else {
            navLinks.style.right = '-300px';
            navOverlay.style.visibility = 'hidden';
            navOverlay.style.opacity = '0';
            document.body.style.overflow = '';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) toggleMenu();
    });
});

// Skills toggle (3 tabs)
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const skillsGrids = document.querySelectorAll('.skills-grid');

    function showGrid(type) {
        skillsGrids.forEach(grid => {
            grid.classList.remove('active');
            grid.style.display = 'none';
        });

        const activeGrid = document.querySelector(`.skills-grid.${type}`);
        if (activeGrid) {
            activeGrid.classList.add('active');
            activeGrid.style.display = 'grid';
        }

        toggleBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });
    }

    showGrid('technical');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => showGrid(btn.dataset.type));
    });
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.service-item, .journey-card, .skill-box, .why-card, .about-wrapper, .contact-container'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(el);
    });
});
// ============================================
// CONTACT FORM — Pure mailto (No third party)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const sendBtn = document.getElementById('send-btn');
    const formStatus = document.getElementById('form-status');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            formStatus.className = 'form-status error';
            formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill in all fields.';
            return;
        }

        // Build mailto link
        const mailtoSubject = encodeURIComponent(subject + ' — from ' + name);
        const mailtoBody = encodeURIComponent(
            'Name: '    + name    + '\n' +
            'Email: '   + email   + '\n' +
            'Subject: ' + subject + '\n\n' +
            'Message:\n' + message + '\n\n' +
            '---\nSent from portfolio contact form'
        );

        const mailtoLink = 'mailto:fatimasohwardii@gmail.com' +
                           '?subject=' + mailtoSubject +
                           '&body='    + mailtoBody;

        // Open user's default email app
        window.location.href = mailtoLink;

        // Show success feedback
        formStatus.className = 'form-status success';
        formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Your email app is opening — please hit <strong>Send</strong> to deliver the message.';

        // Reset form after short delay
        setTimeout(() => {
            contactForm.reset();
        }, 1500);
    });
});
