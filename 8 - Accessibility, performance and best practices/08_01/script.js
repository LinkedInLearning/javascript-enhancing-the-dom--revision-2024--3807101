document.addEventListener('DOMContentLoaded', () => {
    const employeeList = document.getElementById('employeeList');
    const employees = ['John Doe', 'Jane Smith', 'Emma Johnson'];

    // appending multiple list items
    employees.forEach(employee => {
        let listItem = document.createElement('li');
        listItem.textContent = employee;
        employeeList.appendChild(listItem);
    });

    
});
