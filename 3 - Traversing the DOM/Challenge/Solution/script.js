// Task 1: Find the parent element of a cat
let catElement = document.querySelector('#animalFamilyTree li:nth-child(2)');
console.log('Parent of Cat:', catElement.parentNode);

// Task 2: List all the children of the cat's parent
let catsParent = catElement.parentNode;
Array.from(catsParent.children).forEach(child => {
    console.log('Child of Cat\'s Parent:', child.textContent);
});

// Task 3: Identify the cat's parent's next sibling in the tree
let catsParentSibling = catsParent.nextElementSibling;
console.log('Cat\'s Parent Next Sibling:', catsParentSibling ? catsParentSibling.textContent : 'No next sibling');
