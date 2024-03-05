// Populating department dropdown
let departmentSelect = document.getElementById('departmentSelect');
['Sales', 'Marketing', 'Development'].forEach(department => {
    let option = new Option(department, department.toLowerCase());
    departmentSelect.add(option);
});

// Generating an employee profile picture
let profilePictureDiv = document.getElementById('profilePicture');
let employeeImage = new Image();
employeeImage.src = 'employee-placeholder.jpg';  // Replace with a valid image source
employeeImage.alt = 'Employee Profile Picture';
profilePictureDiv.appendChild(employeeImage);
