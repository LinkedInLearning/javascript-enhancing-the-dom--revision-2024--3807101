// Challenge 1
let actionButton = document.getElementById('actionButton');
console.log(actionButton);

// Challenge 2
let infoElements = document.getElementsByClassName('info');
for (let i = 0; i < infoElements.length; i++) {
    console.log(infoElements[i]);
}

// Challenge 3
let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

// Challenge 4
let highlightedSpans = document.querySelectorAll('span.highlight');
highlightedSpans.forEach(span => console.log(span));
