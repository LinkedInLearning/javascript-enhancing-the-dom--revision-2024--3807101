// Adding a new button to the content area
let contentArea = document.getElementById('contentArea');
let addButton = document.createElement('button');
addButton.textContent = 'Add';
contentArea.appendChild(addButton);

// Adding a new list item to the existing list
let taskList = document.getElementById('taskList');
let newListItem = document.createElement('li');
newListItem.textContent = 'New Task';
taskList.appendChild(newListItem);

// Cloning an element and adding its twin to the page
let clonedListItem = newListItem.cloneNode(true);
clonedListItem.textContent = 'Cloned Task';
taskList.appendChild(clonedListItem);

// Replacing the old paragraph at the top of the page
let oldParagraph = contentArea.querySelector('p');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'New, more engaging paragraph!';
contentArea.replaceChild(newParagraph, oldParagraph);

// Removing the image of the puppy from the page
let puppyImage = document.getElementById('puppyImage');
puppyImage.parentNode.removeChild(puppyImage);
