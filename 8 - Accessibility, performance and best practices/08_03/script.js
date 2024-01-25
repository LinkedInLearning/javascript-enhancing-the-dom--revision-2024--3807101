document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('dataContainer');

    // Check if fetch is supported
    if (window.fetch) {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                dataContainer.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                dataContainer.textContent = 'Error fetching data';
            });
    } else {
        dataContainer.textContent = 'Fetch API not supported in this browser.';
    }
});
