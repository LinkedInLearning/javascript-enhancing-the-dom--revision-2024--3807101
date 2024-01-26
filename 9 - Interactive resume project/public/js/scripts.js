// Call this function on initial page load to show the first section and load contact info
document.addEventListener('DOMContentLoaded', () => {
    fetchAndLoadExperiences();
    showSection('experiences'); // This will display the experiences section by default
    fetchAndDisplayContactInfo(); // Load the contact information
    loadSkills();
});


function showSection(sectionId) {
    // Hide all sections
    document.getElementById('experiences').classList.remove('active');
    document.getElementById('contact').classList.remove('active');

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Update navbar links to reflect active section
    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(link => {
        if (link.textContent.toLowerCase() === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


function fetchAndLoadExperiences() {
    fetch('/api/experiences')
        .then(response => response.json())
        .then(data => {
            displayExperiences(data);
        })
        .catch(error => console.error('Error:', error));
}

function displayExperiences(experiences) {
    const list = document.getElementById('experienceList');
    list.innerHTML = ''; // Clear the list
    experiences.forEach(exp => {
        list.innerHTML += `
            <li>
                <h3>${exp.company} - ${exp.role}</h3>
                <p>${exp.date}</p>
                <p>${exp.description}</p>
            </li>
        `;
    });
}

function addExperience(event) {
    event.preventDefault();
    const form = document.getElementById('addExperienceForm');

    const formData = {
        company: form.company.value,
        role: form.role.value,
        date: form.date.value,
        description: form.description.value
    };

    fetch('/api/experiences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.text())
        .then(() => {
            form.style.display = 'none';
            form.reset();
            fetchAndLoadExperiences(); // Fetch the new list of experiences
        })
        .catch(error => console.error('Error:', error));
}

let sortAscending = true;

function sortExperiences() {
    fetch('/api/experiences')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => {
                const dateA = new Date(a.date), dateB = new Date(b.date);
                return sortAscending ? dateB - dateA : dateA - dateB; // Sort based on flag
            });
            sortAscending = !sortAscending; // Toggle the direction of sorting
            displayExperiences(data); // Display sorted experiences without re-fetching
        })
        .catch(error => console.error('Error:', error));
}

/// ... Other functions ...

// Function to toggle the contact form and populate it with existing data if any
function toggleContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';

    // If we are showing the form, check if we need to populate it with existing data
    if (contactForm.style.display === 'block') {
        fetch('/api/contact')
            .then(response => response.json())
            .then(contactInfo => {
                // If there is existing contact info, populate the fields
                if (contactInfo && Object.keys(contactInfo).length > 0) {
                    document.getElementById('name').value = contactInfo.name || '';
                    document.getElementById('email').value = contactInfo.email || '';
                    document.getElementById('phone').value = contactInfo.phone || '';
                    document.getElementById('linkedin').value = contactInfo.linkedin || '';
                }
            })
            .catch(error => console.error('Error:', error));
    }
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
        fetchAndDisplayContactInfo(); // Fetch the new contact info to display
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
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call this function on initial page load to show the first section and load contact info
document.addEventListener('DOMContentLoaded', () => {
    fetchAndLoadExperiences();
    showSection('experiences'); // This will display the experiences section by default
    fetchAndDisplayContactInfo(); // Load the contact information
});

function loadSkills() {
    fetch('/api/skills')
        .then(response => response.json())
        .then(skills => {
            const list = document.getElementById('skillsList');
            list.innerHTML = ''; // Clear the list
            skills.forEach(skill => {
                const listItem = document.createElement('li');
                listItem.textContent = skill;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteSkill(skill);
                listItem.appendChild(deleteButton);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

function addSkill(event) {
    event.preventDefault();
    const newSkill = document.getElementById('newSkill').value;

    fetch('/api/skills', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skill: newSkill }),
    })
    .then(response => response.text())
    .then(() => {
        document.getElementById('addSkillForm').reset();
        loadSkills();
    })
    .catch(error => console.error('Error:', error));
}

function deleteSkill(skill) {
    fetch('/api/skills', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skill: skill }),
    })
    .then(response => response.text())
    .then(() => {
        loadSkills();
    })
    .catch(error => console.error('Error:', error));
}



