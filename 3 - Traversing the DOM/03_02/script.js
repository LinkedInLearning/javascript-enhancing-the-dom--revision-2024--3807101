// Accessing Parent Node
let employeeCountSpan = document.getElementById('employeeCount');
let parentParagraph = employeeCountSpan.parentNode;
console.log('Parent of employee count:', parentParagraph);


// Accessing Child Nodes
let statsSection = document.getElementById('statsSection');
let childrenOfStats = statsSection.children;
console.log('Children of stats section:', childrenOfStats);


// Accessing Sibling Nodes
let salesDepartment = document.querySelector('.department');
let nextDepartment = salesDepartment.nextSibling;
let previousDepartment = salesDepartment.previousSibling;
console.log('Next sibling:', nextDepartment);
console.log('Previous sibling:', previousDepartment);



// Traversing to find all siblings
let allDepartments = [];
let currentElement = salesDepartment;
while (currentElement) {
    if (currentElement.nodeType === Node.ELEMENT_NODE) {
        allDepartments.push(currentElement);
    }
    currentElement = currentElement.nextSibling;
}
console.log('All departments:', allDepartments);
