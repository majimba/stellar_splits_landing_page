/**
 * Navigation and UI Interaction Handler
 * Handles mobile menu toggle, smooth scrolling, and cookie consent
 */

/**
 * Initialize mobile navigation menu
 */
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        // Update button icon
        const icon = mobileMenuButton.querySelector('svg path');
        if (mobileMenu.classList.contains('hidden')) {
            icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
            icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    });

    // Close mobile menu when clicking on nav links
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('svg path');
            icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize cookie consent banner
 */
function initializeCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');
    
    if (!cookieConsent) {
        console.warn('Cookie consent elements not found');
        return;
    }

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice) {
        // Show cookie banner after a delay
        setTimeout(() => {
            cookieConsent.classList.remove('translate-y-full');
        }, 2000);
    }

    // Handle accept button
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.classList.add('translate-y-full');
            
            // Enable analytics if accepted
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            }
        });
    }

    // Handle decline button
    if (declineButton) {
        declineButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            cookieConsent.classList.add('translate-y-full');
        });
    }
}

/**
 * Initialize navbar scroll effects
 */
function initializeNavbarEffects() {
    const navbar = document.getElementById('navbar');
    
    if (!navbar) {
        console.warn('Navbar element not found');
        return;
    }

    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add/remove backdrop blur based on scroll position
        if (currentScrollY > 50) {
            navbar.classList.add('backdrop-blur-lg', 'bg-background/95');
            navbar.classList.remove('bg-background/90');
        } else {
            navbar.classList.add('bg-background/90');
            navbar.classList.remove('backdrop-blur-lg', 'bg-background/95');
        }
        
        lastScrollY = currentScrollY;
    });
}

/**
 * Initialize all navigation and UI components
 */
function initializeNavigation() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initializeMobileMenu();
            initializeSmoothScrolling();
            initializeCookieConsent();
            initializeNavbarEffects();
        });
    } else {
        initializeMobileMenu();
        initializeSmoothScrolling();
        initializeCookieConsent();
        initializeNavbarEffects();
    }
}

// Auto-initialize when script loads
initializeNavigation();

// Export functions for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeMobileMenu,
        initializeSmoothScrolling,
        initializeCookieConsent,
        initializeNavbarEffects,
        initializeNavigation
    };
}
