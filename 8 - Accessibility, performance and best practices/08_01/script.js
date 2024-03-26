document.addEventListener('DOMContentLoaded', () => {
    const employees = ['John Doe', 'Jane Smith', 'Emma Johnson'];

    // appending multiple list items
    employees.forEach(employee => {
        let listItem = document.createElement('li');
        listItem.textContent = employee;
        document.getElementById('employeeList').appendChild(listItem);
    });


});