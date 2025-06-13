/**
 * Main Application Entry Point
 * Initializes all components and handles global app state
 */

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Stellar Splits Landing Page - Initializing...');
    
    // Initialize form handlers
    initializeForms();
    
    // Add any global event listeners or app-wide functionality here
    console.log('Stellar Splits Landing Page - Ready!');
}

/**
 * Initialize all forms on the page
 */
function initializeForms() {
    // Initialize main beta signup form
    handleFormSubmission(
        'betaSignupForm', 'email', 'role', 'primaryCTA', 
        'ctaText', 'ctaLoader', 'emailError', 'roleError'
    );
    
    // Initialize footer form if it exists
    const footerForm = document.getElementById('footerForm');
    if (footerForm) {
        handleFormSubmission(
            'footerForm', 'footerEmail', 'footerRole', 'footerCTA',
            'footerCtaText', 'footerCtaLoader', 'footerEmailError', 'footerRoleError'
        );
    }
}

/**
 * Handle any global errors
 */
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // You could send this to an error tracking service
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an error tracking service
});

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
