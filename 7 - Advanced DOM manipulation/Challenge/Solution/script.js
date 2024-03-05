document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (nameInput.value.trim() === '') {
            formFeedback.textContent = 'Name cannot be empty';
            formFeedback.style.color = 'red';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            formFeedback.textContent = 'Invalid email format';
            formFeedback.style.color = 'red';
            return;
        }

        if (passwordInput.value.length < 8) {
            formFeedback.textContent = 'Password must be at least 8 characters long';
            formFeedback.style.color = 'red';
            return;
        }

        formFeedback.textContent = 'Registration successful!';
        formFeedback.style.color = 'green';
    });
});
