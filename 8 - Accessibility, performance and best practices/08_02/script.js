document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name === '' || email === '' || message === '') {
            formStatus.textContent = 'Please fill in all fields.';
        } else {
            formStatus.textContent = 'Thank you for your message!';
        }
    });
});
