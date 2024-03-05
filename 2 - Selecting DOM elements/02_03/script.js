let menuItems = document.querySelectorAll('div > .menu-item');
menuItems.forEach(item => console.log(item.textContent));

let firstParagraphs = document.querySelectorAll('section > p:first-child');
firstParagraphs.forEach(paragraph => console.log(paragraph.textContent));

let lastListItems = document.querySelectorAll('ul > li:last-child');
lastListItems.forEach(item => console.log(item.textContent));

let emailInputs = document.querySelectorAll('input[type="email"');
emailInputs.forEach(input => console.log(input.placeholder));

let thirdListItems = document.querySelectorAll('ul > li:nth-child(3n)');
thirdListItems.forEach(item => console.log(item.textContent));

let paragraphsAfterHeading = document.querySelectorAll('h2 + p');
paragraphsAfterHeading.forEach(p => console.log(p.textContent));