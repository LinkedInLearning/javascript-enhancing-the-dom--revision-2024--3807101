function updatePage() {

    // Reading and changing the value of a text input
    let nameInput = document.getElementById('nameInput');
    console.log('Name:', nameInput.value);
    nameInput.value = 'John Doe';

    // Working with select dropdown
    let departmentSelect = document.getElementById('departmentSelect');
    console.log('Selected Department:', departmentSelect.value);
    departmentSelect.value = 'marketing';

    // Interacting with radio buttons
    let radioButtons = document.querySelectorAll('input[type="radio"][name="status"]');
    radioButtons.forEach(radio => {
        if (radio.checked) {
            console.log('Employee Status:', radio.value);
        }
    });

    // Interacting with checkboxes
    let newsletterCheckbox = document.getElementById('newsletterCheckbox');
    console.log('Newsletter Subscription:', newsletterCheckbox.checked);
    newsletterCheckbox.checked = true;

}
