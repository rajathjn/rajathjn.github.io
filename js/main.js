/**
 * ========================================
 * PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * ========================================
 * 
 * This file contains all interactive functionality for the portfolio website:
 * - Particle background animation (canvas-based)
 * - Mobile navigation toggle
 * - Smooth scrolling navigation
 * - Active nav link highlighting on scroll
 * - Scroll-triggered animations
 * - Navbar background effects
 * - Scroll to top button
 * - External link handling
 * 
 * @author Rajath Jaiprakash
 * @version 2.0.0
 * @lastUpdated 2025-11-30
 */

// ========================================
// CONFIGURATION CONSTANTS
// ========================================
const CONFIG = {
    // Particle animation settings
    PARTICLE_DENSITY: 15000,        // Higher = fewer particles (area per particle)
    PARTICLE_CONNECTION_DISTANCE: 150,
    MOUSE_CONNECTION_DISTANCE: 250,
    PARTICLE_SPEED: 0.5,
    
    // Navigation settings
    MOBILE_BREAKPOINT: 809,
    NAVBAR_SCROLL_THRESHOLD: 50,
    SCROLL_OFFSET: 100,
    
    // Animation settings
    STAGGER_DELAY: 50,              // Delay between staggered animations (ms)
    SCROLL_TO_TOP_THRESHOLD: 300    // Scroll distance to show button
};

// ========================================
// PARTICLE BACKGROUND ANIMATION
// ========================================

/**
 * ParticleBackground Class
 * Creates an animated particle system on a canvas element with:
 * - Floating particles with random colors and sizes
 * - Connection lines between nearby particles
 * - Interactive mouse connections with glow effects
 */
class ParticleBackground {
    /**
     * Initialize the particle background system
     * Sets up canvas, creates particles, and starts animation loop
     */
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mousePosition = { x: null, y: null };
        this.animationId = null;
        
        this.init();
    }
    
    /**
     * Initialize canvas and start animation
     */
    init() {
        this.resizeCanvas();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }
    
    /**
     * Resize canvas to match its container dimensions
     * Called on initial load and window resize
     */
    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    /**
     * Create particle objects based on canvas size
     * Particle count scales with canvas area for consistent density
     */
    createParticles() {
        const particleCount = Math.floor(
            (this.canvas.width * this.canvas.height) / CONFIG.PARTICLE_DENSITY
        );
        
        this.particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
            vy: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
            radius: Math.random() * 2 + 1,
            color: `rgba(0, ${Math.floor(Math.random() * 100 + 155)}, 255, ${Math.random() * 0.5 + 0.3})`
        }));
    }
    
    /**
     * Set up event listeners for window resize and mouse tracking
     */
    setupEventListeners() {
        // Debounced resize handler to prevent excessive recalculation
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.resizeCanvas();
                this.createParticles();
            }, 150);
        });
        
        // Track mouse position for interactive connections
        document.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        });
        
        // Clear mouse position when cursor leaves document
        document.addEventListener('mouseleave', () => {
            this.mousePosition.x = null;
            this.mousePosition.y = null;
        });
    }
    
    /**
     * Render all particles with glow effect
     */
    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = particle.color;
            this.ctx.fill();
        });
        // Reset shadow after drawing all particles
        this.ctx.shadowBlur = 0;
    }
    
    /**
     * Draw connection lines between nearby particles and to mouse cursor
     * Uses distance-based opacity for smooth fade effect
     */
    drawConnections() {
        const { PARTICLE_CONNECTION_DISTANCE, MOUSE_CONNECTION_DISTANCE } = CONFIG;
        
        for (let i = 0; i < this.particles.length; i++) {
            const particleA = this.particles[i];
            
            // Draw connections between particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const particleB = this.particles[j];
                const distance = this.getDistance(particleA, particleB);
                
                if (distance < PARTICLE_CONNECTION_DISTANCE) {
                    const opacity = 0.2 * (1 - distance / PARTICLE_CONNECTION_DISTANCE);
                    this.drawLine(
                        particleA.x, particleA.y,
                        particleB.x, particleB.y,
                        `rgba(0, 255, 255, ${opacity})`,
                        0.5
                    );
                }
            }
            
            // Draw connections to mouse cursor with glow effect
            if (this.mousePosition.x !== null) {
                const mouseDistance = this.getDistance(particleA, this.mousePosition);
                
                if (mouseDistance < MOUSE_CONNECTION_DISTANCE) {
                    const opacity = 0.8 * (1 - mouseDistance / MOUSE_CONNECTION_DISTANCE);
                    this.ctx.shadowBlur = 15;
                    this.ctx.shadowColor = 'rgba(0, 255, 255, 0.6)';
                    this.drawLine(
                        particleA.x, particleA.y,
                        this.mousePosition.x, this.mousePosition.y,
                        `rgba(0, 255, 255, ${opacity})`,
                        2
                    );
                    this.ctx.shadowBlur = 0;
                }
            }
        }
    }
    
    /**
     * Calculate distance between two points
     * @param {Object} pointA - First point with x, y coordinates
     * @param {Object} pointB - Second point with x, y coordinates
     * @returns {number} Distance between points
     */
    getDistance(pointA, pointB) {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    /**
     * Draw a line between two points
     * @param {number} x1 - Start X coordinate
     * @param {number} y1 - Start Y coordinate
     * @param {number} x2 - End X coordinate
     * @param {number} y2 - End Y coordinate
     * @param {string} color - Stroke color (CSS color value)
     * @param {number} width - Line width in pixels
     */
    drawLine(x1, y1, x2, y2, color, width) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
    
    /**
     * Update particle positions and handle edge bouncing
     */
    updateParticles() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Clamp position within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }
    
    /**
     * Main animation loop - clears canvas and redraws each frame
     */
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawConnections();
        this.drawParticles();
        this.updateParticles();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// MOBILE NAVIGATION
// ========================================

/**
 * Initialize mobile navigation toggle functionality
 * Handles menu open/close and responsive behavior
 */
function initMobileNavigation() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!mobileToggle || !navMenu) return;
    
    /**
     * Toggle mobile menu visibility and update button text
     */
    const toggleMenu = () => {
        const isActive = navMenu.classList.toggle('active');
        mobileToggle.querySelector('span').textContent = isActive ? 'Close' : 'Menu';
    };
    
    /**
     * Close mobile menu and reset button text
     */
    const closeMenu = () => {
        navMenu.classList.remove('active');
        mobileToggle.querySelector('span').textContent = 'Menu';
    };
    
    // Toggle menu on button click
    mobileToggle.addEventListener('click', toggleMenu);
    
    // Close menu when nav link is clicked (mobile only)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= CONFIG.MOBILE_BREAKPOINT) {
                closeMenu();
            }
        });
    });
    
    // Close menu when window resizes above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > CONFIG.MOBILE_BREAKPOINT) {
            closeMenu();
        }
    });
}

// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================

/**
 * Initialize smooth scrolling for anchor links
 * Accounts for fixed navbar height when scrolling to sections
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if just a hash or invalid selector
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            e.preventDefault();
            
            // Calculate scroll position accounting for navbar
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================

/**
 * Update active navigation link based on scroll position
 * Highlights the nav link corresponding to the currently visible section
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    
    let currentSection = '';
    
    // Find the currently visible section
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - CONFIG.SCROLL_OFFSET;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active class on nav links
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
    });
}

// ========================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ========================================

/**
 * Intersection Observer configuration for scroll animations
 */
const scrollObserverOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
};

/**
 * Intersection Observer callback - applies animation classes when elements enter viewport
 */
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        const target = entry.target;
        
        // Apply appropriate animation based on element class
        if (target.classList.contains('slide-left')) {
            target.classList.add('slide-in-left');
        } else if (target.classList.contains('slide-right')) {
            target.classList.add('slide-in-right');
        } else if (target.classList.contains('fade')) {
            target.classList.add('fade-in');
        } else {
            target.classList.add('fade-in-up');
        }
        
        // Apply staggered animation to child elements
        const staggerChildren = target.querySelectorAll('.stagger-child');
        staggerChildren.forEach((child, index) => {
            setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            }, index * CONFIG.STAGGER_DELAY);
        });
        
        // Stop observing once animated
        scrollObserver.unobserve(target);
    });
}, scrollObserverOptions);

/**
 * Set up scroll animations for various page elements
 * Applies animation classes and registers elements with Intersection Observer
 */
function initScrollAnimations() {
    // Animate work cards with alternating slide directions
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', index % 2 === 0 ? 'slide-left' : 'slide-right');
        scrollObserver.observe(card);
    });
    
    const experienceItems = document.querySelectorAll('.experience-item, .education-item, .publication-item');
    experienceItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        if (index % 2 === 0) {
            item.classList.add('slide-left');
        } else {
            item.classList.add('slide-right');
        }
        scrollObserver.observe(item);
    });
    
    // Updated selectors to avoid animating wrapper containers (.about-content) which breaks backdrop-filter
    const sections = document.querySelectorAll('.section-header, .about-content > .section-title, .about-content > .about-text, .skill-card, .glass-box, .competitive-sites');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll', 'fade');
        scrollObserver.observe(section);
    });
    
    // Set up stagger animation styles for skill tags
    const skillTags = document.querySelectorAll('.software-skills span');
    skillTags.forEach(tag => {
        tag.classList.add('stagger-child');
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    });
}

// ========================================
// NAVBAR SCROLL EFFECTS
// ========================================

/**
 * Update navbar appearance based on scroll position
 * Adds background blur when scrolled past threshold
 */
function updateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > CONFIG.NAVBAR_SCROLL_THRESHOLD) {
        navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--color-bg)';
        navbar.style.backdropFilter = 'none';
    }
}

// ========================================
// EXTERNAL LINKS HANDLER
// ========================================

/**
 * Configure external links to open in new tab with security attributes
 * Automatically adds target="_blank" and rel="noopener noreferrer"
 */
function initExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

/**
 * Initialize scroll-to-top button functionality
 * Shows button when scrolled past threshold, scrolls to top on click
 */
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Update scroll-to-top button visibility based on scroll position
 */
function updateScrollToTopVisibility() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;
    
    scrollToTopBtn.classList.toggle('visible', window.scrollY > CONFIG.SCROLL_TO_TOP_THRESHOLD);
}

// ========================================
// FORM SUBMISSION HANDLER
// ========================================

/**
 * Prevent default form submission and handle via JavaScript
 * Add custom form handling logic as needed
 */
function initFormHandlers() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Custom form handling can be added here
            console.log('Form submission intercepted');
        });
    });
}

// ========================================
// CONSOLE BRANDING
// ========================================

/**
 * Display styled console message for developer visitors
 */
function showConsoleBranding() {
    console.log('%cRajath Jaiprakash Portfolio', 'font-size: 20px; font-weight: bold; color: #ffffff;');
    console.log('%cSite Reliability Engineer', 'font-size: 14px; color: #a6a6a6;');
    console.log('%cCreated with ❤️', 'font-size: 12px; color: #a6a6a6;');
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Main initialization function
 * Sets up all page functionality when DOM is ready
 */
function init() {
    // Initialize particle background
    new ParticleBackground();
    
    // Initialize navigation
    initMobileNavigation();
    initSmoothScroll();
    
    // Initialize scroll-based features
    initScrollAnimations();
    initScrollToTop();
    
    // Initialize other features
    initExternalLinks();
    initFormHandlers();
    
    // Show console branding
    showConsoleBranding();
}

/**
 * Combined scroll event handler for better performance
 * Consolidates all scroll-based updates into a single handler
 */
function handleScroll() {
    updateActiveNavLink();
    updateNavbarOnScroll();
    updateScrollToTopVisibility();
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('scroll', handleScroll, { passive: true });
