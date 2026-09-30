/**
 * Portfolio JavaScript Features
 * - Active navigation highlighting on scroll
 * - Smooth scroll behavior adjustments
 * - Interactive contact form submission feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const navLinks = document.querySelectorAll('.nav-links a');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const sections = document.querySelectorAll('section');

    /**
     * Update active link state in navigation on scrolling
     */
    const updateActiveNavOnScroll = () => {
        let currentSectionId = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNavOnScroll);

    /**
     * Contact Form Submission Handler
     */
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(contactForm);
            const name = formData.get('fullname');

            // Form Feedback Simulation
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            formStatus.innerHTML = `<i class="fas fa-check-circle"></i> Thank you, <strong>${name}</strong>! Your message has been sent successfully.`;

            // Clear inputs
            contactForm.reset();

            // Auto-hide alert after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        });
    }
});