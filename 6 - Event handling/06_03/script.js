document.addEventListener('DOMContentLoaded', () => {
    let actionButton = document.getElementById('actionButton');

    // Add the event listener
    actionButton.addEventListener('click', handleActionOnce);
});

function handleActionOnce() {
    let actionButton = document.getElementById('actionButton');
    console.log('Action performed!');
    // Remove the event listener after first execution
    actionButton.removeEventListener('click', handleActionOnce);
}