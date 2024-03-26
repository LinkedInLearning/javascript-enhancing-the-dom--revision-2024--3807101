// Populating department dropdown
let departmentSelect = document.getElementById('departmentSelect');
['Sales', 'Marketing', 'Development'].forEach(department => {
    let option = new Option(department, department.toLowerCase());
    departmentSelect.add(option);
});
