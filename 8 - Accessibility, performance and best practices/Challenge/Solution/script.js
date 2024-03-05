// Solutions for Accessibility Audit Challenge:
// Changes made to enhance accessibility:

// 1. Added language attribute to HTML tag.
// 2. Replaced onclick event with addEventListener for better keyboard accessibility.
// 3. Added meaningful alt text to the image.
// 4. Ensured proper contrast ratio for text.
// 5. Semantic tag main instead of div

document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('actionButton');
    actionButton.addEventListener('click', () => {
        alert('Button Clicked!');
    });
});
