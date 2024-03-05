// demo 1
// Using querySelector with an ID
let header = document.querySelector('#dashboardHeader');
console.log(header.textContent);  // Outputs: Business Dashboard

// Using querySelector with a tag
let firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent);  // Outputs: Total Employees: 120

// Using querySelector with a class
let highlight = document.querySelector('.highlight');
console.log(highlight.textContent);  // Outputs: Top Performers: 10


// demo 2
// Using querySelectorAll with a class
let highlights = document.querySelectorAll('.highlight');
highlights.forEach(function(item) {
    console.log(item.textContent);
});
// Outputs each text content of elements with class 'highlight'
