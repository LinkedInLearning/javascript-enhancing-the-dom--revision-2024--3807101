function changeStyle() {
    let isBold = false;
    let dynamicText = document.getElementById('dynamicText');

    // Changing background color
    dynamicText.style.backgroundColor = 'lightblue';

    // Changing font size
    dynamicText.style.fontSize = '18px';

    // Toggling font weight
    dynamicText.style.fontWeight = isBold ? 'normal' : 'bold';
    isBold = !isBold;

    // Changing text color
    dynamicText.style.color = 'green';
}