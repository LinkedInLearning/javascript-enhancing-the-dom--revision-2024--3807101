document.addEventListener('DOMContentLoaded', () => {
    let actionButton = document.getElementById('actionButton');

    function handleActionOnce() {
        console.log('Action performed!');
        // Remove the event listener after first execution
        actionButton.removeEventListener('click', handleActionOnce);
    }

    // Add the event listener
    actionButton.addEventListener('click', handleActionOnce);
});
