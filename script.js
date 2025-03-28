// Sample data arrays
const projects = [
    {
        title: "Stationery Website",
        description: "Modern e-commerce website for stationery products with responsive design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "images/stationary.png",
        demoLink: "https://fatimasoharwardi.github.io/universalstationary/",
        codeLink: "https://github.com/fatimasoharwardi/universalstationary.git"
    },
       {
        title: "Tic Tac Toe Game",
        description: "Interactive tic-tac-toe game with winning logic and score tracking.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "images/tictac.png",
        demoLink: "https://fatimasoharwardi.github.io/tictac/",
        codeLink: "https://github.com/fatimasoharwardi/tictac.git"
    },
    {
        title: "Todo List App",
        description: "A dynamic todo list application with features like add, delete, and mark tasks as complete.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "images/list.png",
        demoLink: "https://fatimasoharwardi.github.io/todolist/",
        codeLink: "https://github.com/fatimasoharwardi/todolist.git"
    },
 
    {
        title: "Digital Clock",
        description: "Real-time digital clock with modern UI and multiple time formats.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "images/clock.png",
        demoLink: "https://fatimasoharwardi.github.io/clock/",
        codeLink: "https://github.com/fatimasoharwardi/clock.git"
    },
    {
        title: "Calculator",
        description: "Fully functional calculator with basic arithmetic operations and clean interface.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "images/calculator.png",
        demoLink: "https://fatimasoharwardi.github.io/calculator/",
        codeLink: "https://github.com/fatimasoharwardi/calculator.git"
    },
  
];

// Core functions
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = ''; // Clear existing content
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <a href="${project.demoLink}" class="project-link" target="_blank">Live Demo</a>
                    <a href="${project.codeLink}" class="project-link" target="_blank">View Code</a>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="skill-tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// Event Handlers
function toggleMenu() {
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : 
        '<i class="fas fa-bars"></i>';
}

// UI Feedback Functions

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add these styles to your CSS
const styles = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    .error {
        border-color: #ff4444 !important;
    }
    
    .success-popup {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--neon-gradient);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.5s ease;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    // Add responsive styles for contact section
    @media screen and (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }
        
        .contact-card {
            min-width: 250px;
            margin: 1rem auto;
            width: 90%;
        }
    }
    
    @media screen and (max-width: 400px) {
        .contact-card {
            padding: 1rem;
        }
        
        .contact-card i {
            font-size: 1.5rem;
        }
        
        .contact-card h3 {
            font-size: 1rem;
        }
        
        .contact-card p {
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1rem;
        }
        
        .contact-card {
            min-width: 250px;
            width: 100%;
            margin: 0 auto;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .contact-icon {
            margin-bottom: 1rem;
        }
    }
    
    @media screen and (max-width: 480px) {
        .contact-card {
            padding: 1.25rem;
            margin: 0.5rem auto;
        }
        
        .contact-card i {
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
        }
        
        .contact-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }
        
        .contact-card p, 
        .contact-card a {
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 320px) {
        .contact-card {
            min-width: 200px;
            padding: 1rem;
        }
        
        .contact-card i {
            font-size: 1.5rem;
        }
        
        .contact-card h3 {
            font-size: 1rem;
        }
        
        .contact-card p,
        .contact-card a {
            font-size: 0.85rem;
        }
    }

    @media screen and (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0;
            width: 100%;
        }
        
        .contact-card {
            width: calc(100% - 2rem);
            min-width: unset;
            margin: 0.5rem 1rem;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
        }

        .contact-container {
            padding: 0;
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            width: 100%;
            padding: 0;
            margin: 0;
        }
        
        .contact-card {
            width: 100%;
            margin: 0;
            padding: 2rem 1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .contact-container {
            padding: 0;
            width: 100%;
            margin: 0;
        }

        #contact {
            padding: 0;
        }
    }

    @media screen and (max-width: 480px) {
        .contact-card {
            padding: 1.5rem 1rem;
        }
        
        .contact-card i {
            font-size: 1.75rem;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle menu icon
        menuBtn.querySelector('i').className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
        
        // Toggle menu
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

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMenu();
        }
    });
});

// Skills toggle functionality with responsive adjustments
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
            
            // Adjust grid columns based on viewport width
            if (window.innerWidth >= 1200) {
                activeGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else if (window.innerWidth >= 768) {
                activeGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                activeGrid.style.gridTemplateColumns = '1fr';
            }
        }

        toggleBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });
    }

    // Show technical skills by default
    showGrid('technical');

    // Add click handlers
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => showGrid(btn.dataset.type));
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const activeType = document.querySelector('.toggle-btn.active').dataset.type;
            showGrid(activeType);
        }, 250);
    });
});
