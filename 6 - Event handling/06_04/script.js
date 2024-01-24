document.addEventListener('DOMContentLoaded', () => {
    let outerContainer = document.getElementById('outerContainer');
    let innerContainer = document.getElementById('innerContainer');
    let actionButton = document.getElementById('actionButton');

    // Event Bubbling
    actionButton.addEventListener('click', () => console.log('Button clicked!'));
    innerContainer.addEventListener('click', () => console.log('Inner container clicked!'));
    outerContainer.addEventListener('click', () => console.log('Outer container clicked!'));

    // Event Capturing
    outerContainer.addEventListener('click', () => console.log('Outer container capturing!'), true);
    innerContainer.addEventListener('click', () => console.log('Inner container capturing!'), true);

    // Stopping Propagation
    actionButton.addEventListener('click', (e) => {
        console.log('Button click - stopped propagation!');
        e.stopPropagation();
    });
});
