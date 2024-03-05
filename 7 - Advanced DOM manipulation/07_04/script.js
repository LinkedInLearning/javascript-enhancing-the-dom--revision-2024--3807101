document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => createTable(data))
        .catch(error => console.error('Error fetching data:', error));
});

function createTable(users) {
    const table = document.getElementById('userData');
    const thead = table.createTHead();
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // Table Header
    let headers = ['ID', 'Name', 'Username', 'Email'];
    let headerRow = thead.insertRow();
    headers.forEach(headerText => {
        let header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    // Table Body
    users.forEach(user => {
        let row = tbody.insertRow();
        Object.values(user).slice(0, 4).forEach(text => {
            let cell = row.insertCell();
            cell.textContent = text;
        });
    });
}
