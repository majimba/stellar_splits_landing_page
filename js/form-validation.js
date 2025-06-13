/**
 * Form Validation and Submission Handler
 * Handles email validation and form submission for beta signup
 */

/**
 * Validates email format using regex
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Handles form submission with validation and loading states
 * @param {string} formId - Form element ID
 * @param {string} emailId - Email input element ID
 * @param {string} roleId - Role select element ID
 * @param {string} ctaId - Submit button element ID
 * @param {string} ctaTextId - Submit button text element ID
 * @param {string} ctaLoaderId - Loading spinner element ID
 * @param {string} emailErrorId - Email error message element ID
 * @param {string} roleErrorId - Role error message element ID
 */
function handleFormSubmission(formId, emailId, roleId, ctaId, ctaTextId, ctaLoaderId, emailErrorId, roleErrorId) {
    const form = document.getElementById(formId);
    const emailInput = document.getElementById(emailId);
    const roleSelect = document.getElementById(roleId);
    const ctaButton = document.getElementById(ctaId);
    const ctaText = document.getElementById(ctaTextId);
    const ctaLoader = document.getElementById(ctaLoaderId);
    const emailError = document.getElementById(emailErrorId);
    const roleError = document.getElementById(roleErrorId);

    if (!form || !emailInput || !roleSelect || !ctaButton) {
        console.error('Required form elements not found');
        return;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Reset error states
        emailError.style.display = 'none';
        roleError.style.display = 'none';
        emailInput.classList.remove('border-error');
        roleSelect.classList.remove('border-error');
        
        const email = emailInput.value.trim();
        const role = roleSelect.value;
        let hasErrors = false;
        
        // Validate email
        if (!email) {
            emailError.textContent = 'Email is required';
            emailError.style.display = 'block';
            emailInput.classList.add('border-error');
            hasErrors = true;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            emailInput.classList.add('border-error');
            hasErrors = true;
        }
        
        // Validate role
        if (!role) {
            roleError.textContent = 'Please select your role';
            roleError.style.display = 'block';
            roleSelect.classList.add('border-error');
            hasErrors = true;
        }
        
        if (hasErrors) return;
        
        // Show loading state
        ctaText.style.display = 'none';
        ctaLoader.style.display = 'flex';
        ctaLoader.classList.remove('hidden');
        ctaLoader.classList.add('flex');
        ctaButton.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Redirect to success page
            window.location.href = './pages/form_success_page.html';
        } catch (error) {
            console.error('Form submission error:', error);
            // Redirect to error page
            window.location.href = './pages/form_error_page.html';
        } finally {
            // Reset loading state
            ctaText.style.display = 'inline-block';
            ctaLoader.style.display = 'none';
            ctaLoader.classList.remove('flex');
            ctaLoader.classList.add('hidden');
            ctaButton.disabled = false;
        }
    });
}

// Export functions for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateEmail, handleFormSubmission };
}
