document.addEventListener('DOMContentLoaded', () => {
    let outerContainer = document.getElementById('outerContainer');
    let innerContainer = document.getElementById('innerContainer');
    let actionButton = document.getElementById('actionButton');

    // Event Bubbling
    actionButton.addEventListener('click', () => console.log('Button clicked!'));
    innerContainer.addEventListener('click', () => console.log('Div clicked!'));
    
});