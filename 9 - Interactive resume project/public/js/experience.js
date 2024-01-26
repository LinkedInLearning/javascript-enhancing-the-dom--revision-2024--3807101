document.addEventListener('DOMContentLoaded', () => {
    fetchAndLoadExperiences();
    document.getElementById('sortBtn').addEventListener('click', sortExperiences);
    document.getElementById('addExperienceBtn').addEventListener('click', () => document.getElementById('addExperienceForm').style.display = 'block');
    document.getElementById('addExperienceForm').addEventListener('submit', e => addExperience(e));
});

function fetchAndLoadExperiences() {
    fetch('/api/experiences')
        .then(response => response.json())
        .then(data => displayExperiences(data))
        .catch(err => console.error('Error:', err));
}

function displayExperiences(experiences) {
   const list = document.getElementById('experienceList');
   list.innerHTML = '';
   experiences.forEach(exp => {
    list.innerHTML += `
      <li>
        <h3>${exp.company} - ${exp.role}</h3>
        <p>${exp.date}</p>
        <p>${exp.description}</p>
      </li>
    `;
   })
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

    fetch('api/experiences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.text())
        .then(() => {
            form.style.display = 'none';
            form.reset();
            fetchAndLoadExperiences();
        })
        .catch(error => console.error('Error:', error));
}

let sortAscending = true;

function sortExperiences() {
    fetch('/api/experiences')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return sortAscending ? dateB - dateA : dateA - dateB;
            });
            sortAscending = !sortAscending; // Toggle sort direction
            displayExperiences(data);
        })
        .catch(err => console.error('Error:', err));
}