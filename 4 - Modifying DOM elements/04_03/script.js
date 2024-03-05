function changeAttributes() {
    // Changing the source of an image
    let exampleImage = document.getElementById('exampleImage');
    exampleImage.setAttribute('src', 'puppy2.jpg');

    // Changing the href of a link
    let exampleLink = document.getElementById('exampleLink');
    exampleLink.setAttribute('href', 'https://newexample.com');
    exampleLink.textContent = 'Visit NewExample.com';
}
