document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    document.getElementById('addSkillForm').addEventListener('submit', e => addSkill(e));
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

