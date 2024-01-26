document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('editContactBtn').addEventListener('click', toggleContactForm);
    document.getElementById('addContactBtn').addEventListener('click', toggleContactForm);
    document.getElementById('contactForm').addEventListener('submit', e => saveContactInfo(e));
    fetchAndDisplayContactInfo();

});

// Function to toggle the contact form and populate it with existing data if any
function toggleContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';

    fetchAndDisplayContactInfo();
}

// Function to save contact information to the server
function saveContactInfo(event) {
    event.preventDefault();

    const contactData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        linkedin: document.getElementById('linkedin').value
    };

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
    })
        .then(response => response.text())
        .then(() => {
            document.getElementById('contactForm').style.display = 'none';
            fetchAndDisplayContactInfo();
        })
        .catch(error => console.error('Error:', error));

}

// Function to fetch and display contact information
function fetchAndDisplayContactInfo() {
    fetch('/api/contact')
        .then(response => response.json())
        .then(contactInfo => {
            const hasContactInfo = contactInfo && Object.keys(contactInfo).length > 0;
            document.getElementById('editContactBtn').style.display = hasContactInfo ? 'block' : 'none';
            document.getElementById('addContactBtn').style.display = !hasContactInfo ? 'block' : 'none';

            const contactDiv = document.getElementById('contactInfo');
            if (hasContactInfo) {
                document.getElementById('name').value = contactInfo.name || '';
                document.getElementById('email').value = contactInfo.email || '';
                document.getElementById('phone').value = contactInfo.phone || '';
                document.getElementById('linkedin').value = contactInfo.linkedin || '';

                contactDiv.innerHTML = `
                        <p>Name: ${contactInfo.name}</p>
                        <p>Email: ${contactInfo.email}</p>
                        <p>Phone: ${contactInfo.phone}</p>
                        <p>LinkedIn: <a href="${contactInfo.linkedin}" target="_blank">${contactInfo.linkedin}</a></p>
                    `;
            } else {
                contactDiv.innerHTML = `<p>No contact information available. Add your contact information to get started.</p>`;
            }
        })
        .catch(error => console.error('Error:', error));

}