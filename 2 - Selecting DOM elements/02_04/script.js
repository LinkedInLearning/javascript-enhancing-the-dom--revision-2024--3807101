let elements = document.querySelectorAll('.content *');

elements.forEach(element => {
    if (element.matches('.active')) {
        console.log('Found an active element:', element);
    }
});

