document.addEventListener('DOMContentLoaded', () => {
    // Prevent default link behavior
    let resourceLink = document.getElementById('resourceLink');
    let feedbackMessage = document.getElementById('feedbackMessage');
    resourceLink.addEventListener('click', (e) => {
        feedbackMessage.textContent = 'Resource page loading prevented!';
    });

    // Prevent form submission from refreshing the page
    let feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (e) => {
        alert('Feedback submitted! (Page refresh prevented)');
    });
});
