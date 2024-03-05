document.addEventListener('DOMContentLoaded', () => {
    // Changing text on button click
    document.getElementById('changeTextButton').addEventListener('click', () => {
        document.getElementById('para1').textContent = 'Text changed!';
    });

    // Changing style on mouseover and mouseout
    let para1 = document.getElementById('para1');
    para1.addEventListener('mouseover', () => para1.style.color = 'blue');
    para1.addEventListener('mouseout', () => para1.style.color = 'black');

    // Event delegation on list
    document.getElementById('itemList').addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            alert('Clicked on: ' + e.target.textContent);
        }
    });

    // Preventing link navigation
    document.getElementById('preventLink').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('para2').textContent = 'No no, not going there!';
    });
});
