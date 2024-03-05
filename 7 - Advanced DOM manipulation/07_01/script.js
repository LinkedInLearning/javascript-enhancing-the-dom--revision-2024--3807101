document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('registrationForm');
   const formFeedback = document.getElementById('formFeedback');

   form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;

    if(!name || !email) {
        formFeedback.textContent = 'Please fill in all the fields.';
        return;
    }

    formFeedback.textContent = `Thank you for registering, ${name}.`
   })
});
