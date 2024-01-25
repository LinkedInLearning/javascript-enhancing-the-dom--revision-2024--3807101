document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Task: Validate each field here
        // - Check if the name, email, and password are not empty.
        // - Validate the email format.
        // - Check the password length and complexity.
        // - Display messages or indicators for each input's validation.

        // Example Validation:
        // if (nameInput.value.trim() === '') {
        //     formFeedback.textContent = 'Name cannot be empty';
        //     // Add more validation checks
        // }

        // Your code goes here...
    });
});
