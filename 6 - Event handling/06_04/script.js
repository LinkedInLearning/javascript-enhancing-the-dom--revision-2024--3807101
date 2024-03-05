document.addEventListener('DOMContentLoaded', () => {
    let outerContainer = document.getElementById('outerContainer');
    let innerContainer = document.getElementById('innerContainer');
    let actionButton = document.getElementById('actionButton');

    // Event Bubbling
    actionButton.addEventListener('click', () => console.log('Button clicked!'));
    innerContainer.addEventListener('click', () => console.log('Div clicked!'));
    outerContainer.addEventListener('click', () => console.log('Outer div clicked!'));

    // Event Capturing
    actionButton.addEventListener('click', () => console.log('Button clicked!'), true);
    innerContainer.addEventListener('click', () => console.log('Div clicked!'), true);
    outerContainer.addEventListener('click', () => console.log('Outer div clicked!'), true);

    // Stop Propagation
    actionButton.addEventListener('click', (e) => {
        console.log('Button clicked!');
        e.stopPropagation();
    });
    innerContainer.addEventListener('click', () => console.log('Div clicked!'));
    
});
