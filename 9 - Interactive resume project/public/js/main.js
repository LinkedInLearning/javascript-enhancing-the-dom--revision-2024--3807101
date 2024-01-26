document.addEventListener('DOMContentLoaded', () => {
    fetchAndLoadExperiences();
    showSection('experiences');
    fetchAndDisplayContactInfo();
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
        link.classList.remove('active');
        if (link.textContent.toLowerCase() === sectionId) {
            link.classList.add('active');
        }
    });
}
