document.addEventListener('DOMContentLoaded', () => {
    showSection('experiences');
});

function showSection(sectionId) {
    // Hide all sections
    document.getElementById('experiences').classList.remove('active');
    document.getElementById('contact').classList.remove('active');

    // Show the one that is selected
    document.getElementById(sectionId).classList.add('active');

    // Update navbar links to reflect active session
    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if(link.textContent.toLowerCase() === sectionId) {
            link.classList.add('active');
        }
    })
}
