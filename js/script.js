// Email subscription functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle subscription form on home page
    const homeForm = document.getElementById('subscription-form');
    const homeMessage = document.getElementById('subscription-message');
    const homeEmailInput = document.getElementById('email-input');

    // Handle subscription form on about page
    const aboutForm = document.getElementById('subscription-form-about');
    const aboutMessage = document.getElementById('subscription-message-about');
    const aboutEmailInput = document.getElementById('email-input-about');

    // Function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to show message
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `subscription-message ${type}`;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }

    // Function to handle form submission
    function handleSubmit(form, messageElement, emailInput, e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Validate email
        if (!email) {
            showMessage(messageElement, 'Please enter your email address.', 'error');
            messageElement.style.display = 'block';
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage(messageElement, 'Please enter a valid email address.', 'error');
            messageElement.style.display = 'block';
            return;
        }

        // TODO: Integrate with email service (EmailJS, Formspree, Netlify Forms, etc.)
        // For now, we'll simulate a successful submission
        // You can replace this with actual API call to your email service
        
        // Simulate API call
        setTimeout(() => {
            // Store email in localStorage (you can replace this with actual backend call)
            let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('subscribers', JSON.stringify(subscribers));
            }
            
            showMessage(messageElement, 'Thank you for subscribing! You will receive updates when new content is added.', 'success');
            messageElement.style.display = 'block';
            emailInput.value = '';
        }, 500);

        // Example integration with EmailJS (uncomment and configure):
        /*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
            .then(() => {
                showMessage(messageElement, 'Thank you for subscribing! You will receive updates when new content is added.', 'success');
                messageElement.style.display = 'block';
                emailInput.value = '';
            })
            .catch((error) => {
                showMessage(messageElement, 'Something went wrong. Please try again later.', 'error');
                messageElement.style.display = 'block';
                console.error('EmailJS error:', error);
            });
        */

        // Example integration with Formspree (uncomment and configure):
        /*
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            showMessage(messageElement, 'Thank you for subscribing! You will receive updates when new content is added.', 'success');
            messageElement.style.display = 'block';
            emailInput.value = '';
        })
        .catch(error => {
            showMessage(messageElement, 'Something went wrong. Please try again later.', 'error');
            messageElement.style.display = 'block';
            console.error('Formspree error:', error);
        });
        */
    }

    // Add event listeners
    if (homeForm) {
        homeForm.addEventListener('submit', (e) => handleSubmit(homeForm, homeMessage, homeEmailInput, e));
    }

    if (aboutForm) {
        aboutForm.addEventListener('submit', (e) => handleSubmit(aboutForm, aboutMessage, aboutEmailInput, e));
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
