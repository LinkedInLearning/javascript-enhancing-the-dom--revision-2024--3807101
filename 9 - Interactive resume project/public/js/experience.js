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