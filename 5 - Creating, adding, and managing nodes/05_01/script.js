// Create a new paragraph element
let newParagraph = document.createElement('p');

// Set text content for the new element
newParagraph.textContent = 'This is a new paragraph added by JavaScript.';

// Optionally, set some attributes
newParagraph.setAttribute('id', 'newParagraph');
newParagraph.style.color = 'blue';

// Append the new element to the content area
let contentArea = document.getElementById('contentArea');
contentArea.appendChild(newParagraph);
