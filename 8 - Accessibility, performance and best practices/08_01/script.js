document.addEventListener('DOMContentLoaded', () => {
    const employeeList = document.getElementById('employeeList');
    const employees = ['John Doe', 'Jane Smith', 'Emma Johnson'];

    // Efficiently appending multiple list items
    employees.forEach(employee => {
        let listItem = document.createElement('li');
        listItem.textContent = employee;
        employeeList.appendChild(listItem);
    });

    // Example of event delegation
    employeeList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            alert('Clicked on ' + event.target.textContent);
        }
    });
});
