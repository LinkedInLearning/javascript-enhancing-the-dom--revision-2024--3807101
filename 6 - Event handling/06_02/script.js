document.addEventListener('DOMContentLoaded', () => {
    // Click event
    document.getElementById('clickButton').addEventListener('click', () => {
        console.log('Button clicked!');
    });

    // Mouseover and Mouseout events
    let hoverArea = document.getElementById('hoverArea');
    hoverArea.addEventListener('mouseover', () => {
        console.log('Mouseover on element!');
    });
    hoverArea.addEventListener('mouseout', () => {
        console.log('Mouseout of element!');
    });

    // Focus and Blur events
    let inputField = document.getElementById('inputField');
    inputField.addEventListener('focus', () => {
        console.log('Input field focused!');
    });
    inputField.addEventListener('blur', () => {
        console.log('Input field lost focus!');
    });

    // Form submit event
    let simpleForm = document.getElementById('simpleForm');
    simpleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    });

    // Keydown event
    document.addEventListener('keydown', (e) => {
        console.log(`Key pressed: ${e.key}`);
    });
});
